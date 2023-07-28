import { AbsoluteFill } from '@components/Layout';
import { Dimensions, ImageRequireSource, StyleSheet } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import styled from 'styled-components/native';
import { mix, mixColor, snapPoint } from 'react-native-redash';

type CardProps = {
  index: number;
  step: number;
  animatedIndex: Animated.SharedValue<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
};

const { width } = Dimensions.get('window');
const CardWidth = width * 0.8;
const CardHeight = width * (425 / 294);
const snapPoints = [-width, 0, width];

const borderRadius = 24;

export const Card = ({
  source,
  onSwipe,
  animatedIndex,
  index,
  step,
}: CardProps) => {
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const position = useDerivedValue(() => index * step - animatedIndex.value);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = event.translationX + ctx.x;
      translateY.value = event.translationY + ctx.y;
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateY.value = withSpring(0, {
        velocity: velocityY,
      });

      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: dest !== 0,
          restSpeedThreshold: dest === 0 ? 0.01 : 100,
          restDisplacementThreshold: dest === 0 ? 0.01 : 100,
        },
        () => {
          if (dest !== 0) {
            runOnJS(onSwipe)();
          }
        }
      );
    },
  });

  const cardStyle = useAnimatedStyle(() => {
    const transform = [
      { translateY: translateY.value },
      { translateX: translateX.value },
      { scale: mix(position.value, 1, 0.9) },
    ];

    return {
      transform,
      backgroundColor: mixColor(position.value, '#C9E9E7', '#74BCB8'),
      width: CardWidth,
      height: CardHeight,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius,
    };
  });

  const imageStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          position.value,
          [0, step],
          [1.1, 1],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  return (
    <Container>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={cardStyle}>
          <Animated.Image
            source={source}
            resizeMode='cover'
            style={[
              {
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
              },
              imageStyle,
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};

const Container = styled.View`
  ${AbsoluteFill}
  justify-content: center;
  align-items: center;
`;
