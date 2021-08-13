/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { FC, ReactElement, useState } from 'react';
import {
  Button,
  ButtonProps,
  Icon,
  Input,
  InputProps,
  Layout,
  Text,
  useTheme,
} from '@ui-kitten/components';
import { Alert, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import firebase from 'firebase';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { auth } from '../../api/firebase';
import BaseStyles from '../../styles/base';
import BaseLayout from '../../components/layout/base';
import { AppNavigatorParamList } from '../../components/navigator/app-navigator';

/* eslint-enable @typescript-eslint/no-unused-vars */

type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  AppNavigatorParamList,
  'SignIn'
>;

type ForgotPasswordScreenProps = {
  navigation: ForgotPasswordScreenNavigationProp;
};

const EmailIcon: InputProps['accessoryLeft'] = (props): ReactElement => {
  return <Icon name="email-outline" {...props} />;
};

const BackIcon: ButtonProps['accessoryLeft'] = (props) => (
  <Icon {...props} name="arrow-back" />
);

const styles = StyleSheet.create({
  loginCard: {
    width: '100%',
    padding: 20,
    paddingTop: 30,
    borderRadius: 14,
    marginBottom: 20,
  },
  socialCtn: {
    width: '100%',
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
});

const { shadowBase } = BaseStyles;

const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = (
  props: ForgotPasswordScreenProps
) => {
  const { navigation } = props;
  const [email, setEmail] = useState<string>();

  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  const handleResetPassword = (): void => {
    if (email?.length) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert(
            'Reset password',
            `A reset password email was sent to the email provided. Please follow the instructions in the reset password email.`
          );
        })
        .catch((err: firebase.auth.Error) => {
          Alert.alert('Login error', err.message);
        });
    }
  };

  const handleChangeEmail = (value: string): void => {
    setEmail(value);
  };

  const navigateBack = (): void => {
    navigation.goBack();
  };

  return (
    <BaseLayout
      style={{
        col: {
          justifyContent: 'flex-start',
        },
      }}
    >
      <Layout
        style={{
          alignItems: 'flex-start',
          backgroundColor: theme['color-primary-default'],
          flex: 1,
          justifyContent: 'flex-start',
          maxHeight: 300,
          padding: 20,
          paddingTop: top,
          width: '100%',
        }}
      >
        <Button
          style={{
            width: 40,
            padding: 0,
            marginLeft: -10,
          }}
          size="large"
          accessoryLeft={BackIcon}
          onPress={navigateBack}
        />
        <Text
          appearance="alternative"
          style={{ marginBottom: 20 }}
          category="h4"
        >
          Forgotten Password?
        </Text>
        <Text appearance="alternative" category="p1">
          Please enter your email to recover your account.
        </Text>
      </Layout>
      <Layout
        style={{
          backgroundColor: 'transparent',
          padding: 20,
          width: '100%',
          position: 'absolute',
          top: '50%',
          transform: [{ translateY: -200 }],
        }}
      >
        <Layout style={[styles.loginCard, shadowBase]}>
          <Input
            accessoryLeft={EmailIcon}
            autoCapitalize="none"
            onChangeText={handleChangeEmail}
            placeholder="Email"
            size="large"
            status="basic"
            style={styles.input}
            textContentType="emailAddress"
            value={email}
          />
          <Button onPress={handleResetPassword}>Recover your account</Button>
        </Layout>
      </Layout>
    </BaseLayout>
  );
};

export default ForgotPasswordScreen;
