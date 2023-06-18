import React, { useEffect, useState } from 'react';
import { Background } from './Background';
import { View } from 'react-native';
import { Card } from './Card';
import { useTiming } from 'react-native-redash';

const cards = [
  { index: 3, source: require('@assets/img/img-03.png') },
  { index: 2, source: require('@assets/img/img-04.png') },
  { index: 1, source: require('@assets/img/img-05.png') },
  { index: 0, source: require('@assets/img/img-06.png') },
];

const step = 1 / (cards.length - 1);

function OutfitIdeas() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedIndex = useTiming(currentIndex);

  return (
    <View style={{ flex: 1 }}>
      <Background />
      {cards.map(
        (props, index) =>
          currentIndex < props.index * step + step && (
            <Card
              key={`img_${index}`}
              index={index}
              step={step}
              animatedIndex={animatedIndex}
              onSwipe={() => setCurrentIndex((prev) => prev + step)}
              source={props.source}
            />
          )
      )}
    </View>
  );
}

export default OutfitIdeas;
