import { useRef } from 'react';
import styled, { css } from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  interpolateColor,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  useDerivedValue,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import Slide from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

export const BORDER_RADIUS = 75

const Onboarding = () => {
  const translationX = useSharedValue(0);
  const scroll = useRef<Animated.ScrollView>(null);
  const navigation = useNavigation();
  const currentIndex = useDerivedValue(() => translationX.value / width);

  const bgColors = mockSlide.map(({ color }) => color)

  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      translationX.value,
      [0, width, width * 2, width * 3],
      bgColors
    ))

  // return a ({contentOffset}) =>
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });


  const slideBody = useAnimatedStyle(() => ({
    height: SLIDE_HEIGHT,
    borderBottomEndRadius: BORDER_RADIUS,
    backgroundColor: backgroundColor.value,
  }));

  const slideBorder = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value
  }));

  const animatedSubSlide = useAnimatedStyle(() => ({
    transform: [{ translateX: translationX.value * -1 }],
    flex: 1,
    flexDirection: 'row',
    width: width * mockSlide.length
  }));

  
  return (
    <Container>
      <Animated.View style={[slideBody]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
        >
          {mockSlide.map(({ label, picture }, index) => {
            const stylesCover = useAnimatedStyle(() => {
              const opacity = interpolate(
                translationX.value,
                [(index - 0.5) * width, index * width, (index + 0.5) * width],
                [0.7, 0.8, 0.7],
                Extrapolate.CLAMP
              );
              const scale = interpolate(
                currentIndex.value,
                [index - 1, index, index + 1],
                [0.5, 1, 0.5],
                Extrapolate.CLAMP
              );

              return {
                opacity,
                transform: [{ scale }],
              };
            }, [index, currentIndex, translationX]);

            return (
              <Slide
                key={index}
                right={!!(index % 2)}
                {...{ label, picture, stylesCover }}
              />
            );
          })}
        </Animated.ScrollView>
      </Animated.View>
      <Footer>
        <Animated.View
          style={[{ ...StyleSheet.absoluteFillObject }, slideBorder]}
        />
        <FooterContainer>
          <Dot dots={Object.keys(mockSlide)} currentIndex={currentIndex} />
          <Animated.View style={animatedSubSlide}>
            {mockSlide.map(({ subtitle, description }, index) => {
              const last = index === mockSlide.length - 1;
              const handleOnPress = () => {
                if (last) {
                     navigation.navigate('Welcome');
                } else {
                  scroll.current?.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  })
                }
              }
              return (
                <SubSlide
                  key={index}
                  onPress={handleOnPress}
                  isLast={index === mockSlide.length - 1}
                  {...{ subtitle, description }}
                />
              )})}
          </Animated.View>
        </FooterContainer>
      </Footer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Footer = styled.View`
  flex: 1;
`;

const FooterContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    border-top-left-radius: ${theme.border.xl};
  `}
`;



const mockSlide = [
  {
    label: 'Relaxed',
    color:'#BFEAF5', 
    subtitle: 'Find Your Outfits',
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi,',
    picture: require('@assets/img/img-01.png'),
  },
  {
    label: 'Playful',
    color: '#BEECC4', 
    subtitle: 'hear it first, wear it first',
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi,',
    picture: require('@assets/img/img-02.png'),
  },
  {
    label: 'Eccentric',
    color: '#FFE4D9',
    subtitle: 'your style, your way',
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi,',
    picture: require('@assets/img/img-03.png'),
  },
  {
    label: 'Funky',
    color:  '#FFDDDD',
    subtitle: 'look good, feel good',
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi,',
    picture: require('@assets/img/img-05.png'),
  },
];

export default Onboarding;

