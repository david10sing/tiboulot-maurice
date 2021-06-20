/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { FC, ReactElement, useEffect, useState } from 'react';
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
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { auth } from '../../api/firebase';
import BaseStyles from '../../styles/base';
import FacebookButton from '../../components/facebook/facebook-button';
import SocialDivider from '../../components/social-divider';
import BaseLayout from '../../components/layout/base';
import { AppNavigatorParamList } from '../../components/navigator/app-navigator';

/* eslint-enable @typescript-eslint/no-unused-vars */

type SignInScreenNavigationProp = StackNavigationProp<
  AppNavigatorParamList,
  'SignIn'
>;

type SignInScreenRouteProp = RouteProp<AppNavigatorParamList, 'SignIn'>;

export type SignInScreenProps = {
  navigation?: SignInScreenNavigationProp;
  route?: SignInScreenRouteProp;
};

const EmailIcon: InputProps['accessoryLeft'] = (props): ReactElement => {
  return <Icon name="email-outline" {...props} />;
};

const PasswordIcon: InputProps['accessoryLeft'] = (props): ReactElement => {
  return <Icon name="lock" {...props} />;
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

const SignInScreen: FC<SignInScreenProps> = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const route = useRoute<SignInScreenRouteProp>();

  const [email, setEmail] = useState<string | undefined>(route.params?.email);
  const [password, setPassword] = useState<string | undefined>();

  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  const handleEmailSignIn = (): void => {
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential: firebase.auth.UserCredential) => {
          /** @todo persist the user credential across the app's state */
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

  const handleForgotPassword = (): void => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <BaseLayout
      style={{
        col: {
          justifyContent: 'flex-start',
        },
      }}
    >
      <StatusBar style="light" />
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
          accessibilityLabel="backBtn"
          testID="backBtn"
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
          testID="title"
          appearance="alternative"
          style={{ marginBottom: 20 }}
          category="h4"
        >
          Sign In
        </Text>
        <Text testID="subtitle" appearance="alternative" category="p1">
          Sign in to enjoy services delivered to your home
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
          <Input
            accessoryLeft={PasswordIcon}
            onChangeText={setPassword}
            placeholder="Password"
            size="large"
            status="basic"
            secureTextEntry
            style={styles.input}
            textContentType="password"
            value={password}
          />
          <Button testID="signInBtn" onPress={handleEmailSignIn}>
            Sign In
          </Button>
          <Button
            testID="forgotPasswordBtn"
            appearance="ghost"
            onPress={handleForgotPassword}
          >
            Forgot Password?
          </Button>
        </Layout>
        <SocialDivider />
        <Layout style={[styles.socialCtn]}>
          <FacebookButton />
        </Layout>
      </Layout>
    </BaseLayout>
  );
};

export default SignInScreen;
