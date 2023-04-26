export type ProductNavigationProps = {
  id?: string;
};

export type OrderNavigationProps = {
  id: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Authentication: undefined;
      Home: undefined;
      Onboarding: undefined;
      Welcome: undefined;
      Login: undefined;
      SignUp: undefined;
      ForgotPassword: undefined;
      PasswordChanged: undefined;
    }
  }
}
