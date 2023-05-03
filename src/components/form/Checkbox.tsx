import { Text } from '@components/index';
import { BorderlessButton } from 'react-native-gesture-handler';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import styled, { useTheme } from 'styled-components/native';
import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form';

type checkboxProps = {
  label: string;
  name: string;
  control: Control<FieldValues>;
};

const Checkbox = ({
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
    <BorderlessButton
      onPress={() => onChange(!value)}
      style={{ flexDirection: 'row', gap: 6 }}
    >
      <Box>
        <AnimatedCheckbox
          checked={value}
          highlightColor={colors.primary}
          checkmarkColor={colors.background}
          boxOutlineColor={colors.primary}
        />
      </Box>
      <Text type='description'>{label}</Text>
    </BorderlessButton>
  );
};

const Box = styled.View`
  width:${({ theme }) => theme.sizes.large};
  height: ${({ theme }) => theme.sizes.large};
`;

export default Checkbox
