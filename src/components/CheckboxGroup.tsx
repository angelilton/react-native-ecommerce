import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Button } from './Button';

interface CheckboxGroupProps {
  options: { value: string; label: string }[];
  radio?: boolean;
}

const CheckboxGroup = ({ options, radio }: CheckboxGroupProps) => {
  const { spacing } = useTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <Box>
      {options.map(({ value, label }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        return (
          <Button
            key={value}
            type={isSelected ? 'primary' : 'default'}
            onPress={() => {
              if (radio) {
                setSelectedValues([value]);
              } else {
                if (isSelected) {
                  selectedValues.splice(index, 1);
                } else {
                  selectedValues.push(value);
                }
                setSelectedValues([...selectedValues]);
              }
            }}
            label={label}
            style={{
              width: 'auto',
              height: 'auto',
              borderRadius: 18,
              paddingVertical: 7,
              paddingHorizontal: 16
            }}
          />
        );
      })}
    </Box>
  );
};

const Box = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.s};
`;

export default CheckboxGroup;
