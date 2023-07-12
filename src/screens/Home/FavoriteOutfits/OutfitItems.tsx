import { useCallback, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import styled, { useTheme } from 'styled-components/native';

const { width: wWidth } = Dimensions.get('window');

type outfitItemsProps = {
  id: number;
  color: string;
  aspectRatio: number;
  selected: boolean;
  onSetOutfits: any
};

export default function OutfitItems({
  aspectRatio,
  color,
  selected,
  id,
  onSetOutfits,
}: outfitItemsProps) {
  const [isSelected, setSelected] = useState(selected);
  const { colors } = useTheme();

  const width = (wWidth - 16 * 3) / 2;
  
  const addFavorite = () => {
    setSelected(prev => !prev)
      onSetOutfits((props: any) => {
        props[id].selected= !isSelected
        return props
      })
   }

  return (
    <TouchableNativeFeedback onPress={addFavorite}>
      <View
        style={{
          borderRadius: 8,
          backgroundColor: color,
          width,
          height: width * aspectRatio,
          alignItems: 'flex-end',
        }}
      >
        {isSelected && (
          <IconBox>
            <AnimatedCheckbox
              checked={isSelected}
              highlightColor={colors.primary}
              checkmarkColor={colors.primary}
              boxOutlineColor={colors.primary}
            />
          </IconBox>
        )}
      </View>
    </TouchableNativeFeedback>
  );
}

const IconBox = styled.View`
  width: ${({ theme }) => theme.sizes.xLarge};
  height: ${({ theme }) => theme.sizes.xLarge};
  margin: ${({ theme }) => theme.spacing.s};
`;
