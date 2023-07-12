import { useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components/native'
import { ScrollView } from 'react-native';
import OutfitItems from './OutfitItems';
import Animated, {
  FadeOut,
  Layout,
  ZoomInLeft,
  ZoomInRight,
} from 'react-native-reanimated';
import { Button } from '@components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const defaultOutfits = [
  { id: 0, color: '#BFEAF5', aspectRatio: 1, selected: false },
  { id: 1, color: '#BEECC4', aspectRatio: 200 / 145, selected: false },
  { id: 2, color: '#FFE4D9', aspectRatio: 180 / 145, selected: false },
  { id: 3, color: '#FFDDDD', aspectRatio: 180 / 145, selected: false },
  { id: 4, color: '#BFEAF5', aspectRatio: 1, selected: false },
  { id: 5, color: '#F3F0EF', aspectRatio: 120 / 145, selected: false },
  { id: 6, color: '#D5C3BB', aspectRatio: 210 / 145, selected: false },
  { id: 7, color: '#DEEFC4', aspectRatio: 160 / 145, selected: false },
];

export default function FavoriteOutfits() {
  const [outfits, setOutfits] = useState<typeof defaultOutfits>(defaultOutfits);
  const insets = useSafeAreaInsets();
  const { sizes } = useTheme();
  const gap = sizes.nMedium

   const initialMode = useRef(true);

   useEffect(() => {
     initialMode.current = false;
   }, []);
   
  const addFavorite = () => {
    setOutfits((prev) => prev.filter(({selected}) => selected === false));
  }
  
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: insets.top,
        }}
      >
        <BoxRow>
          <Animated.View
            entering={
              initialMode.current ? ZoomInLeft.delay(100 * 1) : ZoomInLeft
            }
            exiting={FadeOut}
            layout={Layout.delay(150)}
            style={{ flex: 1, gap }}
          >
            {outfits
              ?.filter((_, i) => i % 2 !== 0)
              .map((outfit) => (
                <OutfitItems
                  key={outfit?.id}
                  onSetOutfits={setOutfits}
                  {...outfit}
                />
              ))}
          </Animated.View>
          <Animated.View
            entering={
              initialMode.current ? ZoomInRight.delay(100 * 2) : ZoomInRight
            }
            exiting={FadeOut}
            layout={Layout.delay(100)}
            style={{ flex: 1, gap }}
          >
            {outfits
              ?.filter((_, i) => i % 2 === 0)
              ?.map((outfit) => (
                <OutfitItems
                  key={outfit?.id}
                  {...outfit}
                  onSetOutfits={setOutfits}
                />
              ))}
          </Animated.View>
        </BoxRow>
      </ScrollView>
      <FooterContainer>
        <TopCurve />
        <Button type='primary' label='Add to favorites' onPress={addFavorite} />
      </FooterContainer>
    </Container>
  );
}

const TopCurve = () => {
  const { border, colors } = useTheme();
  
  return (
    <Svg
      width={border.nxl}
      height={border.nxl}
      style={{
        position: 'absolute',
        top: -border.nxl,
        right: 0,
      }}
      viewBox='0 0 1 1'
    >
      <Path d='M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1' fill={colors.secondary} />
    </Svg>
  );
};


const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Box = styled(Animated.View)`
  flex:1;
  gap:${({ theme }) => theme.spacing.m};
`;

const BoxRow = styled(Box)`
  flex-direction: row;
`;


const FooterContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.l};
  border-top-left-radius: ${({ theme }) => theme.border.xl};
  align-items: center;
`;
