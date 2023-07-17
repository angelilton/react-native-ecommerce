import TabNavbar from '@components/Tab';
import { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions } from 'react-native'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const RenderChildren = ({title}) => (
  <View style={{ width }}>
    <Text>{title}</Text>
  </View>
);

const tabs = [
  {
    id: 'config',
    title: 'Configuration',
  },
  {
    id: 'info',
    title: 'Personal Info',
  }
];

function EditProfile() {
   const scrollX = useRef<any>(null);
  const translationX = useSharedValue(0);

   const scrollHandler = useAnimatedScrollHandler((event) => {
     translationX.value = Math.round(event.contentOffset.x / width);
   });

  const press = (index:number) => {
    scrollX?.current.scrollToIndex({ animated: true, index: index });
    translationX.value =index;
  };

  
  return (
    <Container>
      <TabNavbar
        tabs={tabs}
        OnPressTab={press}
        translationX={translationX}
      />
      <Animated.FlatList
        ref={scrollX}
        horizontal
        data={tabs}
        renderItem={({ item }) => <RenderChildren title={item.title} />}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={width}
        decelerationRate={'fast'}
        onScroll={scrollHandler}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-horizontal: ${({ theme }) => theme.spacing.s};
`;

export default EditProfile;


