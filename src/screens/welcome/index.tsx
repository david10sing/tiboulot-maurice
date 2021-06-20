/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import isFunction from 'lodash/isFunction';
import BaseStyles from '../../styles/base';
import { AppNavigatorParamList } from '../../components/navigator/app-navigator';
import FacebookButton from '../../components/facebook/facebook-button';
import SocialDivider from '../../components/social-divider';
import BaseLayout from '../../components/layout/base';

/* eslint-enable @typescript-eslint/no-unused-vars */

type WelcomeScreenNavigationProp = StackNavigationProp<
  AppNavigatorParamList,
  'Welcome'
>;

export type WelcomeScreenProps = {
  navigation?: WelcomeScreenNavigationProp;
  onSignIn?: () => void;
  onSignUp?: () => void;
};

const { buttonBase, shadowBase, textAlignCenter } = BaseStyles;

const styles = StyleSheet.create({
  welcome: {
    width: '100%',
    borderRadius: 14,
    padding: 20,
  },
  welcomeTitle: {
    textAlign: 'center',
    lineHeight: 60,
  },
  welcomeSubtitle: {
    marginBottom: 40,
  },
});

const WelcomeScreen = (props: WelcomeScreenProps): ReactElement => {
  const { onSignIn, onSignUp } = props;
  const navigation = useNavigation();

  const handleSignIn = (): void => {
    if (isFunction(onSignIn)) {
      onSignIn();
    }
    navigation.navigate('SignIn');
  };

  const handleSignUp = (): void => {
    if (isFunction(onSignUp)) {
      onSignUp();
    }
    navigation.navigate('SignUp');
  };

  return (
    <BaseLayout
      style={{
        root: {
          padding: 20,
        },
      }}
    >
      <Layout style={[styles.welcome, shadowBase]}>
        <Layout>
          <Text testID="welcomeTitle" style={styles.welcomeTitle} category="h3">
            Welcome to TiBoulot
          </Text>
          <Text
            testID="welcomeSubtitle"
            style={[styles.welcomeSubtitle, textAlignCenter]}
            category="p1"
          >
            Multiple services right in your pocket
          </Text>
        </Layout>
        <Layout>
          <Button
            testID="signInBtn"
            style={[buttonBase]}
            onPress={handleSignIn}
          >
            Sign In
          </Button>
          <Button
            testID="signUpBtn"
            style={[buttonBase]}
            appearance="outline"
            onPress={handleSignUp}
          >
            Sign Up
          </Button>
        </Layout>
        <SocialDivider />
        <Layout>
          <FacebookButton />
        </Layout>
      </Layout>
    </BaseLayout>
  );
};

export default WelcomeScreen;
