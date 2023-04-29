import { Text, Button } from '@components/index';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled, { DefaultTheme, css } from 'styled-components/native'
import { SLIDE_HEIGHT } from './Onboarding/Slide';


const picture = require('@assets/img/img-06.png')

const { width } = Dimensions.get('window');

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <Container bkColor='background'>
      <ImageBox>
        <Cover source={picture} />
      </ImageBox>
      <Header bkColor='background2'>
        <BoxBorder />
        <TextContainer bkColor='background'>
          <Text type='subtitle'>Let's get started</Text>
          <Text type='description'>
            Login to your account below or sign-up for an amazing experience
          </Text>

          <Button
            type='primary'
            label='Have an account? Login'
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            type='default'
            label="Join us, it's Free"
            onPress={() => navigation.navigate('SignUp')}
          />
          <BorderlessButton
            onPress={() => navigation.navigate('Onboarding')}>
            <Text type='description'>Forgot password?</Text>
          </BorderlessButton>
        </TextContainer>
      </Header>
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


type containerProps = {
  bkColor?: keyof DefaultTheme['colors']
} 

const Container = styled.View<containerProps>`
  ${({ theme, bkColor }) => css`
    flex: 1;
    background-color: ${bkColor ? theme.colors[bkColor] : 'none'};
  `}
`;

const BoxBorder = styled.View`
  ${AbsoluteFill}
  background-color: ${(p) => p.theme.colors.background2};
`;

const Header = styled(Container)`
  border-top-left-radius: ${(p) => p.theme.border.xl};
`;

const TextContainer = styled(Container)`
  ${({ theme }) => css`
    border-top-left-radius: ${theme.border.xl};
    gap: ${theme.spacing.l};
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.xl};
`}
`
const ImageBox = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-start;
    background-color: ${theme.colors.background2};
    border-bottom-right-radius: ${theme.border.xl};
  `}
`;

const Cover = styled.Image`
  width: ${width}px;
  height: ${SLIDE_HEIGHT}px;
  object-fit: contain;
`;

