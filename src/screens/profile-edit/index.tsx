/* eslint-disable @typescript-eslint/no-unused-vars */

import { StackNavigationProp } from '@react-navigation/stack';
import {
  Button,
  Icon,
  Input,
  InputProps,
  Layout,
  Text,
  useTheme,
} from '@ui-kitten/components';
import React, { FC, ReactElement } from 'react';
import firebase from 'firebase';

import { GestureResponderEvent, Pressable, ScrollView } from 'react-native';
import { Formik, FormikConfig } from 'formik';
import * as yup from 'yup';
import TiBoulotAvatar from '../../components/avatar';
import TiBoulotInput from '../../components/input';
import BaseHomeLayout from '../../components/layout/base-home';
import { AppNavigatorParamList } from '../../components/navigator/app-navigator';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import { AuthState, updateProfile } from '../../redux/authSlice';

/* eslint-enable @typescript-eslint/no-unused-vars */

type WelcomeScreenNavigationProp = StackNavigationProp<
  AppNavigatorParamList,
  'Welcome'
>;

const emailVerificationIcon: InputProps['accessoryRight'] = (props) => {
  return <Icon {...props} name="checkmark-circle-outline" />;
};

const profileFormSchema = yup.object().shape({
  displayName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.number().required(),
});

type ProfileEditScreenProps = {
  navigation: WelcomeScreenNavigationProp;
};

export type ProfileFormValues = Pick<
  firebase.User,
  'displayName' | 'email' | 'phoneNumber'
>;

const ProfileEditScreen: FC<ProfileEditScreenProps> = (
  props: ProfileEditScreenProps
) => {
  const { navigation } = props;
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  if (!authState.user) {
    navigation.navigate('SignIn');
  }
  let emailStatus = 'danger';
  if (authState.user?.email && authState.user?.emailVerified) {
    emailStatus = 'success';
  }
  if (authState.user?.email && !authState.user.emailVerified) {
    emailStatus = 'warning';
  }

  const initialValues: ProfileFormValues = {
    displayName: authState.user?.displayName ?? '',
    email: authState.user?.email ?? '',
    phoneNumber: authState.user?.phoneNumber ?? '',
  };

  const handleChangeProfileImage = (): void => {
    console.log('change profile image');
  };

  const handleSaveProfile: FormikConfig<ProfileFormValues>['onSubmit'] = (
    values,
    action
  ): void => {
    dispatch(updateProfile(values));
  };

  return (
    <BaseHomeLayout>
      <ScrollView>
        <Layout
          style={{
            marginBottom: 20,
            backgroundColor: 'transparent',
          }}
        >
          <Pressable onPress={handleChangeProfileImage}>
            <TiBoulotAvatar
              style={{
                root: {
                  marginBottom: 10,
                },
              }}
              avatarProps={{ size: 'giant' }}
              uri={authState.user?.photoURL || ''}
            />
            <Text>Edit profile image</Text>
          </Pressable>
        </Layout>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSaveProfile}
          validateOnMount
          validationSchema={profileFormSchema}
        >
          {({
            dirty,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            values,
          }) => {
            return (
              <Layout style={{ flex: 1, backgroundColor: 'transparent' }}>
                <TiBoulotInput
                  label="Name"
                  required
                  onChangeText={handleChange('displayName')}
                  onBlur={handleBlur('displayName')}
                  value={values.displayName || ''}
                  status={errors.displayName ? 'danger' : 'success'}
                />
                <TiBoulotInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  accessoryRight={
                    authState.user?.emailVerified
                      ? emailVerificationIcon
                      : undefined
                  }
                  caption={
                    authState.user?.emailVerified
                      ? 'Email verified'
                      : 'Please verify your email'
                  }
                  label="Email"
                  required
                  textContentType="emailAddress"
                  value={values.email || ''}
                  status={errors.email ? 'danger' : emailStatus}
                />
                <Button
                  style={{
                    marginBottom: 20,
                  }}
                  status="info"
                >
                  Verify your email
                </Button>
                <TiBoulotInput
                  label="Mobile number"
                  onBlur={handleBlur('phoneNumber')}
                  onChangeText={handleChange('phoneNumber')}
                  required
                  status={errors.phoneNumber ? 'danger' : 'success'}
                  textContentType="telephoneNumber"
                  value={values.phoneNumber || ''}
                />
                <Button
                  disabled={!dirty || !isValid}
                  onPress={
                    handleSubmit as unknown as (
                      event: GestureResponderEvent
                    ) => void
                  }
                >
                  Save
                </Button>
              </Layout>
            );
          }}
        </Formik>
      </ScrollView>
    </BaseHomeLayout>
  );
};

export default ProfileEditScreen;
