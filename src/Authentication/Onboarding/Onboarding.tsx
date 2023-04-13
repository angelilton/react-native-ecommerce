import { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  interpolateColor,
  useAnimatedStyle,
  useAnimatedRef,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import Slide, { SLIDE_HEIGHT } from './Slide';
import SubSlide, { subSlideProps } from './SubSlide';

const { width } = Dimensions.get('window');

export const BORDER_RADIUS = 75

const Onboarding = () => {
  const translationX = useSharedValue(0);
  const scroll = useRef<Animated.ScrollView>(null);
  
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  const slideColors = useAnimatedStyle(() => {
    return {
      border: '1px solid red',
      backgroundColor: interpolateColor(
        translationX.value,
        [0, width, width * 2, width * 3],
        ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD']
      ),
    };
  });

  const animatedSubSlide = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationX.value * (-1) }],
    };
  });




  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, slideColors]}>
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
          <Slide label='Relaxed' />
          <Slide label='Playful' right />
          <Slide label='Excentric' />
          <Slide label='Funky' right />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[{ ...StyleSheet.absoluteFillObject }, slideColors]}
        />
        <Animated.View
          style={[
            styles.footerContainer,
            {
              flex: 1,
              width: width * subSlideMock.length,
            },
            animatedSubSlide,
          ]}
        >
          {subSlideMock.map(({ subtitle, description }, index) => (
            <SubSlide
              key={index}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
              isLast={index === subSlideMock.length - 1}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomEndRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    zIndex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});


const subSlideMock = [
  {
    subtitle: 'Find Your Outfits',
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi,',
  },
  {
    subtitle: 'hear it first, wear it first',
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi,',
  },
  {
    subtitle: 'your style, your way',
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi,',
  },
  {
    subtitle: 'look good, feel good',
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi,',
  },
];

export default Onboarding;

