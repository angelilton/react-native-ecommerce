import {ReactNode} from 'react';
import {Dimensions, View,StyleSheet} from "react-native";
import {PanGestureHandler, PanGestureHandlerGestureEvent, PanGestureHandlerProps} from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue, withSpring,
} from 'react-native-reanimated';
import {FontAwesome5} from "@expo/vector-icons";
import styled from "styled-components/native";

type SwipeProps = {
    children: ReactNode
    onDelete: () => void;
} & Pick<PanGestureHandlerProps, 'simultaneousHandlers'>

const { width } = Dimensions.get("window");
const aspectRatio = width / 374;
const LIST_ITEM_HEIGHT = 70;


const SwiperRow = ({children, onDelete, simultaneousHandlers}: SwipeProps) => {
    const translateX = useSharedValue(0)
    const onGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        {
            x: number;
            y: number
        }
    >({
        onStart: (_, ctx) => {
            ctx.x = translateX.value;
        },
        onActive: ({translationX}, ctx) => {
            translateX.value = ctx.x + translationX;
        },
        onEnd: ({ velocityX }) => {
            translateX.value = withSpring(0, {
                overshootClamping: true,
            },)
        }
    })

    console.log('SCREEM', width, width % 50)

    const childItem = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    return (
        <View style={{ backgroundColor: 'blue'}}>
            <Animated.View style={StyleSheet.absoluteFill}>
                <Box>
                <FontAwesome5
                    name={'trash-alt'}
                    size={LIST_ITEM_HEIGHT * 0.4}
                    color={'red'}
                />
                </Box>
            </Animated.View>
            <PanGestureHandler simultaneousHandlers={simultaneousHandlers} onGestureEvent={onGestureEvent}>
                <Animated.View style={[{backgroundColor: 'white'},childItem]}>{children}</Animated.View>
            </PanGestureHandler>
        </View>

    );
}

const Box = styled.View`
  flex:1;
  width: ${LIST_ITEM_HEIGHT * 2}px;
  justify-content: space-evenly;
  align-items: center;
  background-color: yellow;
`;
export default SwiperRow;