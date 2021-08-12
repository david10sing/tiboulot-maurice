/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Layout,
  Input,
  InputProps,
  Text,
  TextProps,
} from '@ui-kitten/components';
import React, { FC, ReactElement } from 'react';

/* eslint-enable @typescript-eslint/no-unused-vars */

type TiBoulotInputProps = Omit<InputProps, 'label'> & {
  required?: boolean;
  label: string;
};

const RequiredLabel = (props: TextProps): ReactElement => {
  const { children, style } = props;

  return (
    <Layout style={{ backgroundColor: 'none', flexDirection: 'row' }}>
      <Text style={[style, { marginRight: 4 }]}>{children}</Text>
      <Text style={[style, { color: 'red' }]}>*</Text>
    </Layout>
  );
};

const TiBoulotInput: FC<TiBoulotInputProps> = (props: TiBoulotInputProps) => {
  const { label, required, ...restprops } = props;

  return (
    <Input
      style={{
        marginBottom: 20,
        backgroundColor: '#FFF',
      }}
      label={
        required
          ? (textProps) => <RequiredLabel {...textProps}>{label}</RequiredLabel>
          : label
      }
      {...restprops}
    />
  );
};

export default TiBoulotInput;
