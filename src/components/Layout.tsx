import Constants from 'expo-constants';
import { ReactNode } from 'react';
import {
  View,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styled, { css, useTheme } from 'styled-components/native';

const assets = [
  require('@assets/bk/1.png'),
  require('@assets/bk/2.png'),
  require('@assets/bk/3.png'),
];

type LayoutProps = {
  children: ReactNode;
  footer: ReactNode;
};

const { height } = Dimensions.get('window');

export const Layout = ({ footer, children }: LayoutProps) => {
  const { border } = useTheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView bounces={false}>
        <Container>
          <ImgBox>
            <ImageCover source={assets[0]} resizeMode='cover' />
          </ImgBox>
          <View style={{ height: border.nxl }}>
            <ImageCover source={assets[2]} resizeMode='cover' left />
          </View>
          <MainBox>{children}</MainBox>
          <FooterBox>{footer}</FooterBox>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const DrawerLayout = ({ children }: Pick<LayoutProps, 'children'>) => {
  const { border, colors } = useTheme();
  
  return (
    <Container>
        <ImgBox>
          <View
            style={{
              height: '100%',
              backgroundColor: colors.secondary,
              borderBottomRightRadius: border.nxl,
            }}
          />
        </ImgBox>
        <View
          style={{
            height: border.nxl,
            backgroundColor: colors.secondary,
          }}
        />
      <MainDrawer>{children}</MainDrawer>
      <View
        style={{
          height: border.nxl,
          backgroundColor: colors.secondary,
        }}
      >
        <ImageDrawer source={assets[2]} resizeMode='cover' left />
      </View>
      <ImgBox>
        <ImageDrawer source={assets[0]} resizeMode='cover' left />
      </ImgBox>
    </Container>
  );
}

const AbsoluteFill = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ImageCover = styled.Image<{ left?: boolean }>`
  ${AbsoluteFill}
  width: undefined;
  height: undefined;
  border-bottom-left-radius: ${({ theme }) => theme.border.xl};
  border-top-left-radius: ${({ theme, left }) => (left ? theme.border.xl : 0)};
`;

const ImageDrawer = styled(ImageCover)`
  border-bottom-left-radius: 0;
`


const ImgBox = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  z-index: 2;
`;

const Container = styled.View`
  flex: 1;
  height: ${height +
  (Platform.OS === 'android' ? Constants.statusBarHeight : 0)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MainBox = styled.View`
  ${({ theme }) => css`
    z-index: 3;
    flex: 1;
    flex-grow: 4;
    margin-top: -${theme.border.xl};
    margin-bottom: -${theme.border.xl};
    border-bottom-left-radius: ${theme.border.xl};
    border-bottom-right-radius: ${theme.border.xl};
    border-top-right-radius: ${theme.border.xl};
    background-color: ${theme.colors.background};
  `}
`;

const MainDrawer = styled(MainBox)`
  ${({ theme }) => css`
    flex-grow: 4;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: ${theme.border.xl};
  `}
`;

const FooterBox = styled.View`
  ${({ theme }) => css`
    z-index: 1;
    flex-grow: 1.2;
    justify-content: center;
    padding-top: ${theme.spacing.l}
    background-color: ${theme.colors.secondary};
  `}
`;
