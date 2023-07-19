import styled from 'styled-components/native';
import { useForm } from 'react-hook-form';
import { Dimensions, ScrollView } from 'react-native';
import { Text, InputFiled } from '@components/index';
import CheckboxGroup from '@components/CheckboxGroup';


export type FormProps = {
  name: string;
  password: string;
  address: string;
};


const genders = [
  { value: 'male', label: 'Male' },
  { value: 'outros', label: 'LGBTQIA+' },
  { value: 'female', label: 'Female' },
];

const { width } = Dimensions.get('window');

function PersonalInfo() {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'onBlur',
    defaultValues: { name: 'Angelo Peter', password: '1234567', address: 'street N 09 center city' },
  });

  return (
    <ScrollView>
      <Container>
        <Text type='info'>Account Information</Text>
        <Box>
          <InputFiled
            control={control}
            icon='user'
            name='name'
            placeholder='Name'
            autoCapitalize='none'
            autoCompleteType='name'
          />
          <InputFiled
            control={control}
            name='password'
            icon='lock'
            placeholder='Enter your password'
            autoCompleteType='password'
            autoCapitalize='none'
            secureTextEntry
          />

          <InputFiled
            control={control}
            name='address'
            icon='home'
            placeholder='Address'
            autoCapitalize='none'
            autoCompleteType='street-address'
          />
        </Box>
        <Text type='info'>your gender:</Text>
        <CheckboxGroup options={genders} radio />
      </Container>
    </ScrollView>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
  width: ${width}px;
  gap: ${({ theme }) => theme.spacing.m};
  padding: ${({ theme }) => theme.spacing.m};
`;

const Box = styled.View`
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.s};
`;

export default PersonalInfo;
