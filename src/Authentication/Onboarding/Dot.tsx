import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'

type DotProps = {
  dots: Array<string>;
  currentIndex: Animated.SharedValue<number>;
};

const Dot = ({ dots, currentIndex }: DotProps) => {
  
  return (
    <View style={styles.pagination}>
      {dots.map((_, index) => {
        const styleDot = useAnimatedStyle(() => {
          const opacity = interpolate(
            currentIndex.value,
            [index - 1, index, index + 1],
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
          );
          const scale = interpolate(
            currentIndex.value,
            [index - 1, index, index + 1],
            [1, 1.25, 1],
            Extrapolate.CLAMP
          );

          return {
            opacity,
            backgroundColor: 'rgba(12, 13, 52,0.5)',
            width: 8,
            height: 8,
            borderRadius: 4,
            margin: 4,
            transform: [{ scale }],
          };
        }, [index, currentIndex]);
        return <Animated.View style={styleDot} key={index} />;
      })}
    </View>
  );
};

export default Dot

const styles = StyleSheet.create({
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
