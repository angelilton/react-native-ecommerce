import { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  interpolateColor,
  useAnimatedStyle,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
} from 'react-native-reanimated';

import Slide, { SLIDE_HEIGHT } from './Slide';
import SubSlide, { subSlideProps } from './SubSlide';
import Dot from './Dot';
import {  Asset } from 'expo-asset';

const { width } = Dimensions.get('window');

export const BORDER_RADIUS = 75

const Onboarding = () => {
  const translationX = useSharedValue(0);
  const scroll = useRef<Animated.ScrollView>(null);
  const currentIndex = useDerivedValue(() => translationX.value / width);

  const backgroundColor = mockSlide.map(({ color }) => color)
  

  // return a ({contentOffset}) =>
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });


  const slideColors = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translationX.value,
        [0, width, width * 2, width * 3],
        backgroundColor
      ),
    };
  });

  const animatedSubSlide = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationX.value * -1 }],
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
          {mockSlide.map(({ label, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ label, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
            },
            slideColors,
          ]}
        />
        <View style={styles.footerContainer}>
          <Dot dots={Object.keys(mockSlide)} currentIndex={currentIndex} />
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
                width: width * mockSlide.length,
              },
              animatedSubSlide,
            ]}
          >
            {mockSlide.map(({ subtitle, description }, index) => (
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
                isLast={index === mockSlide.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </View>
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
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});


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

