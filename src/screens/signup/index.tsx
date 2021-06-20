/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { FC, ReactElement, useEffect, useState } from 'react';
import {
  Button,
  ButtonProps,
  Card,
  Divider,
  Icon,
  Input,
  InputProps,
  Layout,
  Text,
  useTheme,
} from '@ui-kitten/components';
import { Col, Grid } from 'react-native-easy-grid';
import {
  Alert,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import firebase from 'firebase';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { auth } from '../../api/firebase';
import BaseStyles from '../../styles/base';
import FacebookButton from '../../components/facebook/facebook-button';
import SocialDivider from '../../components/social-divider';
import BaseLayout from '../../components/layout/base';
import { AppNavigatorParamList } from '../../components/navigator/app-navigator';

/* eslint-enable @typescript-eslint/no-unused-vars */

type SignUpScreenNavigationProp = StackNavigationProp<
  AppNavigatorParamList,
  'SignUp'
>;

type SignUpScreenProps = {
  navigation: SignUpScreenNavigationProp;
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

const ProfileIcon: ButtonProps['accessoryLeft'] = (props) => (
  <Icon {...props} name="person" />
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

const SignUpScreen: FC<SignUpScreenProps> = (props: SignUpScreenProps) => {
  const { navigation } = props;
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [fullName, setFullName] = useState<string>();

  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  const handleEmailSignUp = (): void => {
    if (email && password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          userCredential.user?.updateProfile({
            displayName: fullName,
          });
        })

        .catch((err: firebase.auth.Error) => {
          Alert.alert('Sign Up Error', err.message, [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Sign In',
              onPress: () => navigation.navigate('SignIn', { email }),
            },
          ]);
        });
    }
  };

  const handleChangeEmail = (value: string): void => {
    setEmail(value);
  };

  const handleChangeFullName = (value: string): void => {
    setFullName(value);
  };

  const navigateBack = (): void => {
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
            Sign Up
          </Text>
          <Text appearance="alternative" category="p1">
            Sign up to enjoy services delivered to your home
          </Text>
        </Layout>
        <Layout
          style={{
            backgroundColor: 'transparent',
            padding: 20,
            width: '100%',
            position: 'absolute',
            top: '25%',
          }}
        >
          <Layout style={[styles.loginCard, shadowBase]}>
            <Input
              accessoryLeft={ProfileIcon}
              onChangeText={handleChangeFullName}
              placeholder="Full name"
              size="large"
              status="basic"
              style={styles.input}
              value={fullName}
            />
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
              secureTextEntry
              size="large"
              status="basic"
              style={styles.input}
              textContentType="password"
              value={password}
            />
            <Button onPress={handleEmailSignUp}>Sign Up</Button>
          </Layout>
          <SocialDivider />
          <Layout style={[styles.socialCtn]}>
            <FacebookButton />
          </Layout>
        </Layout>
      </BaseLayout>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
