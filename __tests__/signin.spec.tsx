/* eslint-disable @typescript-eslint/no-unused-vars */

import 'react-native';
import React, { ReactElement } from 'react';

// Note: test renderer must be required after react-native.
import * as eva from '@eva-design/eva';
import { render } from '@testing-library/react-native';
import customTheme from '../src/tiboulot-maurice-theme.json';
import TiBoulotAppProvider from '../src/components/appProvider';
import SignInScreen, { SignInScreenProps } from '../src/screens/signin';
import MockedNavigator from './__mocks__/app-navigator';

/* eslint-enable @typescript-eslint/no-unused-vars */

jest.useFakeTimers();

const RenderedScreen = (props: SignInScreenProps): ReactElement => {
  return (
    <TiBoulotAppProvider {...eva} theme={{ ...eva.light, ...customTheme }}>
      <MockedNavigator component={SignInScreen} {...props} />
    </TiBoulotAppProvider>
  );
};

describe('rendering of the sign in screen', () => {
  it('should render a sign in screen', async () => {
    const { getByLabelText, getByPlaceholderText, getByTestId, toJSON } =
      render(<RenderedScreen />);

    const backBtn = getByLabelText('backBtn');
    expect(backBtn).toBeTruthy();

    const welcomeTitle = getByTestId('title');
    expect(welcomeTitle.children).toContain('Sign In');

    const welcomeSubtitle = getByTestId('subtitle');
    expect(welcomeSubtitle.children).toContain(
      'Sign in to enjoy services delivered to your home'
    );

    const emailInput = getByPlaceholderText('Email');
    expect(emailInput).toBeTruthy();

    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput).toBeTruthy();

    const signInBtn = getByTestId('signInBtn');
    expect(signInBtn).toBeDefined();

    const forgotPasswordBtn = getByTestId('forgotPasswordBtn');
    expect(forgotPasswordBtn).toBeTruthy();

    const socialDivider = getByTestId('socialDivider');
    expect(socialDivider).toBeTruthy();

    const facebookBtn = getByTestId('facebookBtn');
    expect(facebookBtn).toBeTruthy();

    expect(toJSON()).toMatchSnapshot();
  });
});
