import styled, { DefaultTheme, css } from 'styled-components/native';

type TextProps = {
  type: 'hero' | 'header' | 'subtitle' | 'description' | 'text'
}

const textType = {
  hero: ({ colors, sizes }: DefaultTheme) => css`
    font-size: ${sizes.huge};
    line-height: ${sizes.huge};
    font-family: 'SFProText-Bold';
    font-weight: bold;
    color: ${colors.white};
    text-align: center;
    z-index: 100;
  `,
  header: ({ sizes, colors }: DefaultTheme) => css`
    font-family: 'SFProText-Semibold';
    text-transform: capitalize;
    font-size: ${sizes.xLarge};
    color: ${colors.secondary};
  `,
  subtitle: ({ sizes, colors }: DefaultTheme) => css`
    font-family: 'SFProText-Semibold';
    text-transform: capitalize;
    font-size: ${sizes.large};
    color: ${colors.secondary};
  `,
  description: ({ sizes, colors, spacing }: DefaultTheme) => css`
    font-family: 'SFProText-Regular';
    font-size: ${sizes.medium};
    line-height: ${spacing.l};
    text-align: center;
    color: ${colors.secondary};
  `,
  text: ({ sizes, colors, spacing }: DefaultTheme) => css`
    font-family: 'SFProText-Semibold';
    font-size: ${sizes.small};
    line-height: ${spacing.l};
    color: ${colors.secondary};
  `,
}

export const Text = styled.Text<TextProps>`
  ${(p) => textType[p.type](p.theme)}
`; 
