import styled, { css, useTheme } from 'styled-components/native'
import SocialLogin from '@components/SocialLogin'
import { Button, Text, Layout } from '@components/index';
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import InputFiled from '@components/form/InputFiled';
import { Dimensions } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Checkbox from '@components/form/Checkbox';

const ButtonForgotPass = () => {
  const navigation = useNavigation()
  const { colors } = useTheme()
  
  return (
    <BorderlessButton
      onPress={() => navigation.navigate('ForgotPassword')}
    >
      <Text
        type='description'
        style={{ color: colors.primary }}
      >
        Forgot Password
      </Text>
    </BorderlessButton>
  );
}

export type FormProps = {
  email: string;
  password: string;
  remember: boolean
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'onBlur',
    resolver: yupResolver(LoginSchema),
    defaultValues: { email: '', password: '', remember: false },
  });

  
  const onSubmit = (data:any) => { console.log(data);}
  
  return (
    <Layout footer={<SocialLogin />}>
      <Container>
        <Text type='header'>Welcome Back</Text>
        <Text type='description'>
          Use your credentials below and login to your account.
        </Text>
        <FormBox>
          <InputFiled
            control={control}
            name='email'
            icon={'mail'}
            error={errors?.email}
            autoCapitalize='none'
            placeholder='Enter your email'
          />
          <InputFiled
            control={control}
            name='password'
            icon={'lock1'}
            error={errors?.password}
            placeholder='Enter your password'
            autoCapitalize='none'
            secureTextEntry
          />
          <Box>
            <Checkbox
              name='remember'
              label='Remember me'
              control={control}
            />
            <ButtonForgotPass />
          </Box>
        </FormBox>
        <Button
          type='primary'
          label='Log into your account'
          onPress={handleSubmit(onSubmit)}
        />
      </Container>
    </Layout>
  );
}

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


export default Login
