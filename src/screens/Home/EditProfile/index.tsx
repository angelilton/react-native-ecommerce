import { useRef } from 'react';
import styled from 'styled-components/native';
import TabNavbar from '@components/Tab';
import { Dimensions } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Configuration from './Configuration';
import PersonalInfo from './PersonalInfo';

const { width } = Dimensions.get('window');

const tabs = [
  {
    id: 'config',
    title: 'Configuration',
    children: Configuration,
  },
  {
    id: 'info',
    title: 'Personal Info',
    children: PersonalInfo,
  },
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
        renderItem={({ item }) => <item.children />}
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


