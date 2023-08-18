import styled from "styled-components/native";
import { Text } from "@components/Text"

const CartItem = () => (
        <Container>
            <ImageItem/>
            <Box>
                <Text type="header">Size M, L</Text>
                <Text type="text" >
                    Short Sleeve Organic Top
                </Text>
                <Text type="text" >
                    $29.99
                </Text>
            </Box>
            <Counter>
                <BoxRadius>
                    <Text type="info" style={{color: 'white'}} >
                        x2
                    </Text>
                </BoxRadius>
            </Counter>
        </Container>
    );

const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  padding-horizontal: ${({theme}) => theme.spacing.m};
  padding-vertical: ${({theme}) => theme.spacing.s};

`

const ImageItem = styled.View`
  width: 100px;
  height: 100px;
  border-radius: ${({theme}) => theme.spacing.m};
  background-color: #BFEAF5;
`;

const Box = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${({theme}) => theme.spacing.m};
`;

const Counter = styled.View`
  justify-content: center;
`;

const BoxRadius = styled.View`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export default CartItem;