/* eslint-disable @typescript-eslint/no-unused-vars */

import 'react-native';
import React, { ReactElement } from 'react';

// Note: test renderer must be required after react-native.
import * as eva from '@eva-design/eva';
import { render, fireEvent } from '@testing-library/react-native';
import customTheme from '../src/tiboulot-maurice-theme.json';
import TiBoulotAppProvider from '../src/components/appProvider';
import WelcomeScreen, { WelcomeScreenProps } from '../src/screens/welcome';

/* eslint-enable @typescript-eslint/no-unused-vars */

jest.useFakeTimers();

const RenderedScreen = (props: WelcomeScreenProps): ReactElement => {
  return (
    <TiBoulotAppProvider {...eva} theme={{ ...eva.light, ...customTheme }}>
      <WelcomeScreen {...props} />
    </TiBoulotAppProvider>
  );
};

describe('rendering of the welcome screen', () => {
  it('should render a welcome screen', async () => {
    const { getByText, getByTestId, toJSON } = render(<RenderedScreen />);

    const welcomeTitle = getByText('Welcome to TiBoulot');
    expect(welcomeTitle).toBeTruthy();
    const welcomeSubtitle = getByText('Multiple services right in your pocket');
    expect(welcomeSubtitle).toBeTruthy();
    const signInBtn = getByText('Sign In');
    expect(signInBtn).toBeTruthy();
    const signUpBtn = getByText('Sign Up');
    expect(signUpBtn).toBeTruthy();
    const socialDivider = getByTestId('socialDivider');
    expect(socialDivider).toBeTruthy();
    const facebookBtn = getByTestId('facebookBtn');
    expect(facebookBtn).toBeTruthy();

    expect(toJSON()).toMatchSnapshot();
  });
});

describe('behaviours on the welcome screen', () => {
  it('should navigate to the sign in screen', () => {
    const onSignInMock = jest.fn();
    const { getByTestId } = render(<RenderedScreen onSignIn={onSignInMock} />);

    const signInBtn = getByTestId('signInBtn');
    fireEvent(signInBtn, 'onPress');
    expect(onSignInMock).toHaveBeenCalled();
  });

  it('should navigate to the sign in screen', () => {
    const onSignUpMock = jest.fn();
    const { getByTestId } = render(<RenderedScreen onSignUp={onSignUpMock} />);

    const signUpBtn = getByTestId('signUpBtn');
    fireEvent(signUpBtn, 'onPress');
    expect(onSignUpMock).toHaveBeenCalled();
  });
});
