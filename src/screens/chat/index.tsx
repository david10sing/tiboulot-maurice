/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Layout } from '@ui-kitten/components';
import React, { FC } from 'react';

/* eslint-enable @typescript-eslint/no-unused-vars */

type ChatScreenProps = null;

const ChatScreen: FC<ChatScreenProps> = (props: ChatScreenProps) => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button>Chat</Button>
    </Layout>
  );
};

export default ChatScreen;
