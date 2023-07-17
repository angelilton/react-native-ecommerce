import TabNavbar from '@components/Tab';
import { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions } from 'react-native'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const renderChildren = ({ title }) => (
  <View style={{ width }}>
    <Text>{title}</Text>
  </View>
);

const tabs = [
  {
    id: 'config',
    title: 'Configuration',
    children: renderChildren,
  },
  {
    id: 'info',
    title: 'Personal Info',
    children: renderChildren,
  },
];

function EditProfile() {
   const scrollX = useRef<Animated.ScrollView>(null);
  const translationX = useSharedValue(0);
  const [tabIndex, setIndex] = useState(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  const OnPressTab = (index: number) => {
    if (index > tabIndex) {
    
      scrollX.current?.scrollTo({
        x: width * index ,
        animated: true,
      });
    }

    if (index < tabIndex) {
      scrollX.current?.scrollTo({
        x: -width * (index + 1),
        animated: true,
      });
    }

     setIndex(index);
  };

  
  return (
    <Container>
      <TabNavbar tabs={tabs} OnPressTab={OnPressTab} tabIndex={tabIndex} />
      <Animated.ScrollView
        ref={scrollX}
        horizontal
        snapToInterval={width}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >
        {tabs.map((tab, index) => (
          <tab.children key={index} title={tab.title} />
        ))}
      </Animated.ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-horizontal: ${({ theme }) => theme.spacing.s};
`;

export default EditProfile;


