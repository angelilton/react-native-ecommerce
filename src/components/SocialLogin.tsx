import { useNavigation } from '@react-navigation/native';
import styled, { css, useTheme } from 'styled-components/native';
import Svg, { Circle, Path } from 'react-native-svg';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons'; 
import { Text } from './Text';

const Facebook = () => (
  <Svg
    viewBox='0 0 512 512'
    fillRule='evenodd'
    clipRule='evenodd'
    strokeMiterlimit={2}
  >
    <Path
      d='M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 127.777 93.616 233.685 216 252.89V330h-65v-74h65v-56.4c0-64.16 38.219-99.6 96.695-99.6 28.009 0 57.305 5 57.305 5v63h-32.281C305.918 168 296 187.733 296 207.978V256h71l-11.35 74H296v178.89C418.385 489.685 512 383.777 512 256z'
      fill='#1877f2'
    />
    <Path
      d='M355.65 330L367 256h-71v-48.022c0-20.245 9.917-39.978 41.719-39.978H370v-63s-29.297-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.89a257.912 257.912 0 0040 3.11c13.608 0 26.966-1.065 40-3.11V330h59.65z'
      fill='#fff'
    />
  </Svg>
);

const Google = () => (
  <Svg viewBox='0 0 150 150'>
    <Path
      d='M120 76.1c0-3.1-.3-6.3-.8-9.3H75.9v17.7h24.8c-1 5.7-4.3 10.7-9.2 13.9l14.8 11.5C115 101.8 120 90 120 76.1z'
      fill='#4280ef'
    />
    <Path
      d='M75.9 120.9c12.4 0 22.8-4.1 30.4-11.1L91.5 98.4c-4.1 2.8-9.4 4.4-15.6 4.4-12 0-22.1-8.1-25.8-18.9L34.9 95.6c7.8 15.5 23.6 25.3 41 25.3z'
      fill='#34a353'
    />
    <Path
      d='M50.1 83.8c-1.9-5.7-1.9-11.9 0-17.6L34.9 54.4c-6.5 13-6.5 28.3 0 41.2l15.2-11.8z'
      fill='#f6b704'
    />
    <Path
      d='M75.9 47.3c6.5-.1 12.9 2.4 17.6 6.9L106.6 41c-8.3-7.8-19.3-12-30.7-11.9-17.4 0-33.2 9.8-41 25.3l15.2 11.8c3.7-10.9 13.8-18.9 25.8-18.9z'
      fill='#e54335'
    />
  </Svg>
);

const SocialLogin = () => {
  const { colors, spacing } = useTheme();
  const navigation = useNavigation();

  return (
    <Whapper>
      <Text type='description' style={{ color: colors.background }}>
        you can login via
      </Text>
      <Container>
        <Box>
          <Facebook />
        </Box>
        <Box>
          <Google />
        </Box>
        <Box>
          <Ionicons name='logo-apple' size={42} color='black' />
        </Box>
      </Container>
      <BorderlessButton
        style={{marginTop: 8}}
        onPress={() => navigation.navigate('SignUp')}>
        <BoxText>
        <Text type='description' style={{ color: colors.background }}>
          Don't have an account?
        </Text>
        <Text type='description' style={{ color: colors.primary }}>
          Sign Up here
        </Text>
        </BoxText>
      </BorderlessButton>
    </Whapper>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing.l};
`;

const Whapper = styled(Container)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
`;

const BoxText = styled(Container)`
  gap: ${({ theme }) => theme.spacing.s};
`;


const Box = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    width: ${theme.border.nl * 2}px;
    height: ${theme.border.nl * 2}px;
    border-radius: ${theme.border.l};
    justify-content: center;
    align-items: center;
  `}
`;

export default SocialLogin;
