import styled, { useTheme } from 'styled-components/native';
import { View } from 'react-native';
import { Text } from '@components/index';
import { DataPoint } from '@screens/Home/TransactionHistory';

function Transaction({ id, color, value, date }: DataPoint) {
  const { colors } = useTheme();
  return (
    <Container>
      <View>
        <Header>
          <View
            style={{
              backgroundColor: colors[color] || colors.info,
              width: 10,
              height: 10,
              borderRadius: 5,
              marginRight: 8,
            }}
          />
          <Text type='info'>{`#${id}`}</Text>
        </Header>
        <Text type='text'>
          {`$${value} - ${new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}`}
        </Text>
      </View>
      <View>
        <Text type='text'>See more</Text>
      </View>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.l};
  padding-horizontal: ${({ theme }) => theme.spacing.s};
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

export default Transaction;
