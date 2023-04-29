import { RectButton } from 'react-native-gesture-handler';
import styled, { css, useTheme } from 'styled-components/native';
import { Text } from './Text';

type ButtonType = {
  type: 'default' | 'primary';
};

type ButtonProps = {
  label: string;
  onPress: () => void;
} & ButtonType;

export const Button = ({ label, type, onPress }: ButtonProps) => {
const { colors } = useTheme();
  
  const color = type === 'primary' ? colors.white : colors.primary;

  return (
    <ButtonWhapper
      type={type}
      {...{ onPress }}
    >
      <Text type={'description'} style={{ color }}>{label}</Text>
    </ButtonWhapper>
  );
};

const ButtonWhapper = styled(RectButton)<ButtonType>`
  ${({ theme, type }) => css`
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    height: 50px;
    width: 245px;
    background-color: ${type === 'primary'
      ? theme.colors.primary
      : theme.colors.darkGrey50};
  `}
`;
