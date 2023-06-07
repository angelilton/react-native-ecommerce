import styled, { css, useTheme } from 'styled-components/native';
import SocialLogin from '@components/SocialLogin';
import { Button, Text, Layout, InputFiled, Checkbox } from '@components/index';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export type FormProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .equals([Yup.ref('password')], "Passwords don't match")
    .required('Required'),
});

const SignUp = () => {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'onBlur',
    resolver: yupResolver(LoginSchema),
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Layout footer={<SocialLogin type='signUp' />}>
      <Container>
        <Text type='header'>Create account</Text>
        <Text type='description'>Let us know your email and password.</Text>
        <FormBox>
          <InputFiled
            control={control}
            name='email'
            icon={'mail'}
            error={errors?.email}
            autoCapitalize='none'
            placeholder='Enter your email'
            returnKeyType='go'
            returnKeyLabel='go'
            onSubmitEditing={setFocus('password')}
          />
          <InputFiled
            control={control}
            name='password'
            icon={'lock1'}
            error={errors?.password}
            placeholder='Enter your password'
            autoCapitalize='none'
            secureTextEntry
            returnKeyType='send'
            returnKeyLabel='send'
            onSubmitEditing={setFocus('confirmPassword')}
          />

          <InputFiled
            control={control}
            name='confirmPassword'
            icon={'lock1'}
            error={errors?.password}
            placeholder='Enter your password'
            autoCapitalize='none'
            secureTextEntry
            returnKeyType='send'
            returnKeyLabel='send'
            onSubmitEditing={handleSubmit(onSubmit)}
          />
          
        </FormBox>
        <Button
          type='primary'
          label='Create your account'
          onPress={handleSubmit(onSubmit)}
        />
      </Container>
    </Layout>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.l};
  padding: ${({ theme }) => theme.spacing.l};
`;

const FormBox = styled.View`
  ${({ theme }) => css`
    width: 100%;
    gap: ${theme.spacing.m};
    padding-left: ${theme.spacing.m};
    padding-right: ${theme.spacing.m};
  `}
`;

const Box = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default SignUp;
