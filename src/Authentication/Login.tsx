import { useTheme } from 'styled-components/native'
import SocialLogin from '@components/SocialLogin'
import { Button, Text, Layout } from '@components/index';
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

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

const Login = () => {
  const handleSubmit = () => { }
  
  return (
    <Layout footer={<SocialLogin />}>
      <Text type='header'>
        Welcome Back
      </Text>
      <Text type='description'>
        Use your credentials below and login to your account.
      </Text>
      <ButtonForgotPass />
      <Button
        type='primary'
        label='Log into your account'
        onPress={handleSubmit}
      />
    </Layout>
  );
}


export default Login
