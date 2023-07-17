import { useState } from 'react';
import { View,TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import {Text} from './index'

interface RoundCheckboxGroupProps {
  options: string[];
  valueIsColor?: boolean;
}

const BOX_RADIUS = 50;
const BORDER_RADIUS = 20;


const RoundCheckboxGroup = ({
  options,
  valueIsColor,
}: RoundCheckboxGroupProps) => {
  const { colors } = useTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      {options.map((option) => {
        const index = selectedValues.indexOf(option);
        const isSelected = index !== -1;
        const backgroundColor = isSelected ? colors.primary : colors.darkGrey50;
        const color = isSelected ? colors.white : colors.primary;

        return (
          <TouchableOpacity
            key={option}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(option);
              }
              setSelectedValues([...selectedValues]);
            }}
          >
            <View
              style={{
                width: BOX_RADIUS,
                height: BOX_RADIUS,
                borderRadius: BORDER_RADIUS + 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: isSelected ? 1 : 0,
                borderColor: colors.background2,
              }}
            >
              <View
                style={{
                  width: BOX_RADIUS - 10,
                  height: BOX_RADIUS - 10,
                  borderRadius: BORDER_RADIUS,
                  backgroundColor: valueIsColor ? option : backgroundColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {!valueIsColor && (
                  <Text type={'description'} style={{ color: color }}>
                    {option.toUpperCase()}
                  </Text>
                )}
                {valueIsColor && isSelected && (
                  <Icon color='white' name='check' size={16} />
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RoundCheckboxGroup;
