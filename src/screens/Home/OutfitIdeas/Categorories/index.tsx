import { View, ScrollView } from 'react-native';

import StoryCard from './StoryCard';

const categories = [
  {
    id: 'newIn',
    title: 'New In',
    color: '#FFDDDD',
  },
  {
    id: 'summer',
    title: 'Summer',
    color: '#BEECC4',
  },
  {
    id: 'activeWear',
    title: 'Active Wear',
    color: '#BFEAF5',
  },
  {
    id: 'outlet',
    title: 'Outlet',
    color: '#F1E0FF',
  },
  {
    id: 'accesories',
    title: 'Accesories',
    color: '#FFE8E9',
  },
  {
    id: 'newIn2',
    title: 'New In',
    color: '#FFDDDD',
  },
  {
    id: 'summer3',
    title: 'Summer',
    color: '#BEECC4',
  },
  {
    id: 'activeWear4',
    title: 'Active Wear',
    color: '#BFEAF5',
  },
  {
    id: 'outlet5',
    title: 'Outlet',
    color: '#F1E0FF',
  },
  {
    id: 'accesories6',
    title: 'Accesories',
    color: '#FFE8E9',
  },
];

export default function Categories() {
  
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map(category => <StoryCard key={category.id} {...category} />)}
      </ScrollView>
    </View>
  );
}
