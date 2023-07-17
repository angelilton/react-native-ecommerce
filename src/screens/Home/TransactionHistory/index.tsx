import { Dimensions, ScrollView, View } from 'react-native';
import styled, { DefaultTheme, useTheme } from 'styled-components/native';
import { Text } from '@components/index';
import Transaction from '@components/Transaction';

export type DataPoint = {
  id: number;
  date: number;
  value: number;
  color: keyof DefaultTheme['colors'];
};

const graphData: DataPoint[] = [
  {
    id: 245674,
    date: new Date('2023-07-28').getTime(),
    value: 139.42,
    color: 'primary',
  },
  {
    id: 245675,
    date: new Date('2023-10-03').getTime(),
    value: 281.23,
    color: 'graph1',
  },
  {
    id: 245677,
    date: new Date('2023-10-19').getTime(),
    value: 198.54,
    color: 'graph2',
  },
  {
    id: 245615,
    date: new Date('2023-07-28').getTime(),
    value: 139.42,
    color: 'primary',
  },
  {
    id: 245671,
    date: new Date('2023-10-03').getTime(),
    value: 281.23,
    color: 'graph1',
  },
  {
    id: 245688,
    date: new Date('2023-10-19').getTime(),
    value: 198.54,
    color: 'graph2',
  },
  {
    id: 145674,
    date: new Date('2023-07-28').getTime(),
    value: 139.42,
    color: 'primary',
  },
  {
    id: 149674,
    date: new Date('2023-07-28').getTime(),
    value: 139.42,
    color: 'primary',
  },
];

const footerHeight = Dimensions.get('window').width / 5.5;

function TransactionHistory() {
  const { colors } = useTheme();
  return (
    <Container>
      <Box>
        <View>
          <Text type={'info'}>TOTAL SPENT</Text>
          <Text type={'header'} style={{ color: colors.darkPink }}>
            $619.19
          </Text>
        </View>
        <Bag>
          <Text type={'text'} style={{ color: colors.primary }}>
            All Time
          </Text>
        </Bag>
      </Box>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: footerHeight,
        }}
      >
        {graphData.map((item) => (
          <Transaction key={item.id} {...item} />
        ))}
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-horizontal: ${({ theme }) => theme.spacing.s};
`;

const Box = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  opacity: 0.8;
  padding: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.colors.darkGrey50};
  border-radius: ${({ theme }) => theme.border.m};
`;

const Bag = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.border.m};
  padding-horizontal: ${({ theme }) => theme.spacing.m};
  padding-vertical: ${({ theme }) => theme.border.s};
`;

export default TransactionHistory;
