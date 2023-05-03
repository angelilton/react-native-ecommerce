import { Controller, Control, FieldValues, FieldError } from 'react-hook-form';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { FormProps } from '@Authentication/Login';

type InputFiledProps = {
  name: keyof FormProps;
  icon: keyof typeof AntDesign.glyphMap;
  error?: FieldError;
  control: Control<FormProps>;
} & TextInputProps;

const InputFiled = ({
  icon,
  error,
  name,
  control,
  ...props
}: InputFiledProps) => {
  const { colors, sizes } = useTheme();

  // const color = error ? 'danger' : 'primary';
  // const themeColor = colors[color];

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange,onBlur, value },
        fieldState: { isTouched, invalid },
      }) => {
        const color = error ? 'danger' : !isTouched ? 'body' :  'primary';
        const themeColor = colors[color];

        return (
          <Container borderColor={themeColor}>
            <IconBox>
              <AntDesign name={icon} size={24} color={themeColor} />
            </IconBox>
            <TextInput
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              {...props}
              placeholderTextColor={themeColor}
              style={{
                flexGrow: 2,
                height: '100%',
                fontSize: sizes.nLarge,
              }}
            />
            <IconBox>
              {invalid &&
                (error ? (
                  <AntDesign
                    name='exclamationcircleo'
                    size={24}
                    color={colors.danger}
                  />
                ) : (
                  <AntDesign
                    name='checkcircle'
                    size={24}
                    color={colors.primary}
                  />
                ))}
            </IconBox>
          </Container>
        );
      }}
    />
  );
};

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
