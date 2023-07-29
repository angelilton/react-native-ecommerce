import { View } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '@components/Text';
import { Button } from '@components/Button';

function Checkout() {
  return (
    <Container>
      <BoxOrder>
        <Label type='info'>Delivery Address</Label>
        <Box>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              padding: 8,
            }}
          >
            <Text type='info'>1545 Blvd. Cote-Vertu Ouest</Text>
            <Text type='info'>Montreal, Quebec</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Label type='info'>Change</Label>
          </View>
        </Box>
        <Divider />
        <Box>
          <View
            style={{
              flex: 1,
              gap: 10,
            }}
          >
            <Label type='info'>Total Items (6)</Label>
            <Label type='info'>Standard Delivery</Label>
            <Label type='info'>Total Payment</Label>
          </View>
          <View
            style={{
              flex: 1,
              gap: 10,
              alignItems: 'flex-end',
            }}
          >
            <Text type='info'>$ 189.94</Text>
            <Text type='info'>$ 12.00</Text>
            <Text type='info'>$201.84</Text>
          </View>
        </Box>
      </BoxOrder>
      <ButtonBox>
        <Button label='purchaser' type='primary' onPress={() => true} />
      </ButtonBox>
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: space-between;
`;

const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.background};
`;

const Box = styled.View`
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.s};
`;

const ButtonBox = styled.View`
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;
const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #d2cdcd;
  margin-vertical: 8px;
`;

const BoxOrder = styled.View`
  margin-top: ${({ theme }) => theme.spacing.s};
  justify-content: space-between;
  align-items: flex-start;
`;

export default Checkout;
