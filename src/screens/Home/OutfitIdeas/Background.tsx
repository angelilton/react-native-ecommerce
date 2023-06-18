import { View, ImageBackground, StyleSheet } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const image = require('@assets/bk/3.png')

export const Background = () => {
  const { colors, border } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.lightBlue }}>
      <BoxTop flex={1/3} />
      <View style={{ flex:1/3 }}>
        <View style={{ flex: 1, backgroundColor: colors.background }} />
        <View style={{ flex: 1, backgroundColor: colors.secondary }} />
        <ImageBackground
          source={image}
          borderTopLeftRadius={border.nxl}
          borderBottomRightRadius={border.nxl}
          resizeMode='cover'
          style={{
            ...StyleSheet.absoluteFillObject,
            flex: 1,
          }}
        />
      </View>
      <BoxBottom flex={1/3} />
    </View>
  );
}


const BoxTop = styled.View<{ flex: number }>`
  flex: ${(props) => props.flex};
  border-bottom-right-radius: ${({ theme }) => theme.border.xl};
  background-color: ${({ theme }) => theme.colors.background};
`;

const BoxBottom = styled.View<{ flex: number }>`
  flex: ${props => props.flex};
  border-top-left-radius: ${({ theme }) => theme.border.xl};
  background-color: ${({ theme }) => theme.colors.secondary};
`;
