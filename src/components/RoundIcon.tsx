import styled, { css, DefaultTheme } from 'styled-components/native';
import { Feather as Icon } from '@expo/vector-icons';

export type RoundIconProps = {
  bkColor?: keyof DefaultTheme['colors'];
  name: keyof typeof Icon.glyphMap;
  dank?: boolean
};

export const RoundIcon = ({ name, bkColor, dank=false }: RoundIconProps) => {
  const iconColor = dank ? '#0C0D34' : '#FFFFFF';

  return (
    <Box bkColor={bkColor}>
      <Icon name={name} color={iconColor} size={22} />
    </Box>
  );
};

const Box = styled.View<Pick<RoundIconProps, 'bkColor'>>`
  ${({ theme, bkColor }) => css`
    background-color: ${bkColor
      ? theme.colors[bkColor]
      : theme.colors.background};
    width: ${theme.border.nl * 1.5}px;
    height: ${theme.border.nl * 1.5}px;
    border-radius: ${theme.border.l};
    justify-content: center;
    align-items: center;
  `}
`;
