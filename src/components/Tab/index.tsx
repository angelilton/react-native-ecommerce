import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, { Easing, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { Text } from '@components/index';
import { mix, useTiming } from 'react-native-redash';

const { width: ScreenWidth } = Dimensions.get('window');

type TabNavbarProps = {
  id: string;
  title: string;
};

function TabNavbar({
  tabs,
  OnPressTab,
  translationX,
}: {
  tabs: TabNavbarProps[];
  OnPressTab: any;
  translationX: Animated.SharedValue<number>;
}) {
  const { colors, sizes } = useTheme();

  const dot = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: mix(
          translationX.value,
          ScreenWidth * 0.25,
          ScreenWidth * 0.72
        ),
      },
    ],
  }));

  return (
    <Container>
      {tabs.map((tab, i) => (
        <Box key={tab.id}>
          <RectButton
            onPress={(() => OnPressTab(i))}
            style={{ alignItems: 'center', padding: sizes.nMedium }}
          >
            <Text type='description'>{tab.title}</Text>
          </RectButton>
        </Box>
      ))}
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: 0,
            left: -5,
            backgroundColor: colors.primary,
            width: 10,
            height: 10,
            borderRadius: 5,
          },
          dot,
        ]}
      />
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
`;

const Box = styled.View`
  flex: 1;
  justify-content: space-between;
  /* padding: ${({ theme }) => theme.spacing.s}; */
`;

export default TabNavbar;
