/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Avatar,
  AvatarProps,
  Icon,
  Layout,
  LayoutProps,
  useTheme,
} from '@ui-kitten/components';
import React, { FC, useState, ReactElement } from 'react';

import { ImageProps } from 'react-native';

import BaseStyles from '../../styles/base';

/* eslint-enable @typescript-eslint/no-unused-vars */

type TiBoulotAvatarProps = {
  uri?: string;
  style?: {
    root?: LayoutProps['style'];
    Avatar?: ImageProps['style'];
  };
  avatarProps?: Omit<AvatarProps, 'source' | 'style'>;
};

const DefaultAvatar = (): ReactElement => {
  const theme = useTheme();
  const { center } = BaseStyles;
  return (
    <Layout
      style={[
        {
          borderRadius: 40,
          width: 40,
          height: 40,
          backgroundColor: theme['color-primary-default'],
        },
        center,
      ]}
    >
      <Icon
        style={{
          height: 20,
          marginHorizontal: 10,
          tintColor: '#FFFFFF',
          width: 20,
        }}
        name="person-outline"
      />
    </Layout>
  );
};

const TiBoulotAvatar: FC<TiBoulotAvatarProps> = (
  props: TiBoulotAvatarProps
) => {
  const { style, uri, avatarProps } = props;

  const [useIcon, setUseIcon] = useState(!uri);

  const handleOnError: ImageProps['onError'] = () => {
    setUseIcon(true);
  };

  return (
    <Layout style={[{ backgroundColor: 'transparent' }, style?.root]}>
      {useIcon ? (
        <Avatar
          {...avatarProps}
          style={[style?.Avatar]}
          ImageComponent={DefaultAvatar}
          onError={handleOnError}
        />
      ) : (
        <Avatar
          {...avatarProps}
          style={[style?.Avatar]}
          source={{ uri }}
          onError={handleOnError}
        />
      )}
    </Layout>
  );
};

export default TiBoulotAvatar;
