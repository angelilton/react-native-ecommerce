
import { Dimensions, ScrollView } from 'react-native'
import styled from 'styled-components/native';
import { Text } from '@components/Text';
import CheckboxGroup from '@components/CheckboxGroup';
import RoundCheckboxGroup from '@components/RoundCheckboxGroup';

const { width } = Dimensions.get('window');

const outfitTypes = [
  { value: 'men', label: 'For men' },
  { value: 'women', label: 'For women' },
  { value: 'both', label: 'Both' },
];
const sizes = ['s', 'm', 'l', 'xl', 'xxl'];
const colors = ['#0C0D34', '#FF0058', '#50B9DE', '#00D99A', '#FE5E33'];
const brands = [
  { value: 'adidas', label: 'Adidas' },
  { value: 'nike', label: 'Nike' },
  { value: 'le-coq-sportif', label: 'Le Coq Sportif' },
  { value: 'converse', label: 'Converse' },
  { value: 'tommy-hilfiger', label: 'Tommy Hilfiger' },
  { value: 'jordan', label: 'Jordan' },
  { value: 'billionaire-boys-club', label: 'Billionaire Boys Club' },
];

const Configuration = () => (
  <ScrollView>
    <Container>
      <Text type='info'>type of outfits do you:</Text>
      <CheckboxGroup options={outfitTypes} radio />

      <Text type='info'>your clothing size:</Text>
      <RoundCheckboxGroup options={sizes} />

      <Text type='info'>yours favorite colors:</Text>
      <RoundCheckboxGroup options={colors} valueIsColor />

      <Text type='info'>yours favorite brands:</Text>
      <CheckboxGroup options={brands} />
    </Container>
  </ScrollView>
);

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  width: ${width}px;
  gap: ${({ theme }) => theme.spacing.m};
  padding: ${({ theme }) => theme.spacing.m};
`;


export default Configuration

