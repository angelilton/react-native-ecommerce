import { View } from 'react-native';
import { Text } from './Text';
import styled from 'styled-components/native';

const picture = require('@assets/img/img-06.png');

export const UserHeader = () => {
  return (
    <Container>
      <Avatar source={picture} />
      <View style={{ marginVertical: 10}}>
        <Text type='description'>Angelo Peter</Text>
        <Text type='text'>angelo@mail.com</Text>
      </View>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  height: 70px;
  top: -65px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.darkGrey50};
  border-radius: 50px;
  object-fit: cover;
`;
