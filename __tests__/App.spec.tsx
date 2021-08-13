import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

// Note: test renderer must be required after react-native.

jest.useFakeTimers();

it('renders correctly', () => {
  render(<App />);
});
