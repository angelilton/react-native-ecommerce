import { Text } from '@components/index';
import {
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import styled, { useTheme } from 'styled-components/native';
import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form';

type checkboxProps = {
  label: string;
  name: string;
  control: Control<FieldValues>;
};

export const Checkbox = ({
  label,
  control,
  name,
}: UseControllerProps<checkboxProps>) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });
  
  const { colors } = useTheme();

  return (
    <TouchableWithoutFeedback
      onPress={() => onChange(!value)}
      style={{ flexDirection: 'row', gap: 6 }}
    >
      <Box>
        <AnimatedCheckbox
          checked={value}
          highlightColor={colors.primary}
          checkmarkColor={colors.primary}
          boxOutlineColor={colors.primary}
        />
      </Box>
      <Text type='description'>{label}</Text>
    </TouchableWithoutFeedback>
  );
};

const Box = styled.View`
  width:${({ theme }) => theme.sizes.large};
  height: ${({ theme }) => theme.sizes.large};
`;

