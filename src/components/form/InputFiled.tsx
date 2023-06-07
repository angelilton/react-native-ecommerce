import {
  Control,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

type InputFiledProps = {
  name: string;
  icon: keyof typeof AntDesign.glyphMap;
  error?: FieldError;
  control: Control<FieldValues>;
} & TextInputProps;

const InputFiled = ({
  icon,
  error,
  name,
  control,
  ...props
}: UseControllerProps<InputFiledProps>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { isTouched, invalid },
  } = useController({
    name,
    control,
  });
  
  const { colors, sizes } = useTheme();
  const color = error ? 'danger' : !isTouched ? 'body' : 'primary';
  const themeColor = colors[color];

  return (
    <Container borderColor={themeColor}>
      <IconBox>
        <AntDesign name={icon} size={24} color={themeColor} />
      </IconBox>
      <View style={{ flex: 1 }}>
        <TextInput
          ref={ref}
          value={value}
          onBlur={onBlur}
          onChangeText={onChange}
          {...props}
          placeholderTextColor={themeColor}
          underlineColorAndroid={'transparent'}
          style={{
            fontSize: sizes.nMedium,
          }}
        />
      </View>
      <IconBox>
        {invalid &&
          (error ? (
            <AntDesign
              name='exclamationcircleo'
              size={24}
              color={colors.danger}
            />
          ) : (
            <AntDesign name='checkcircle' size={24} color={colors.primary} />
          ))}
      </IconBox>
    </Container>
  );
 }

const Container = styled.View<{ borderColor: string }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing.xxl};
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${(p) => p.borderColor};
`;

const IconBox = styled.View`
  margin-left: ${({ theme }) => theme.border.s};
  margin-right: ${({ theme }) => theme.border.s};
`;

export default InputFiled;
