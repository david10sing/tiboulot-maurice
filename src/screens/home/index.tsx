/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Button,
  ButtonProps,
  Icon,
  Input,
  Layout,
  Text,
} from '@ui-kitten/components';
import React, { ReactElement } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* eslint-enable @typescript-eslint/no-unused-vars */

const styles = StyleSheet.create({
  avatarCtn: {
    alignItems: 'center',
  },
  floatingPaper: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
  },
  floatingPaperInner: {
    elevation: 2,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 80,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '90%',
  },
  layout: {
    padding: 20,
    flex: 1,
    position: 'relative',
  },
  search: {
    borderRadius: 50,
  },
  servicesButton: {
    marginTop: 4,
  },
});

const TiBoulotAvatar: ButtonProps['accessoryLeft'] = (props) => {
  // return <Avatar />;
  return <Icon {...props} name="person-outline" />;
};

const HomeStackScreen = (): ReactElement => {
  const navigation = useNavigation();
  return (
    <Layout style={[styles.layout]}>
      <Grid>
        <Row>
          <Col size={4}>
            <Input
              placeholder="Search for services or products"
              style={[styles.search]}
            />
          </Col>
          <Col size={1} style={[styles.avatarCtn]}>
            <Button
              status="primary"
              style={{ borderRadius: 40, width: 40, height: 40 }}
              appearance="filled"
              accessoryLeft={TiBoulotAvatar}
              onPress={() => navigation.navigate('Profile')}
            />
          </Col>
        </Row>
      </Grid>
      <Grid style={[styles.floatingPaper]}>
        <Row style={[styles.floatingPaperInner]}>
          <Col style={{ alignItems: 'center' }}>
            <Button
              status="primary"
              style={{ borderRadius: 40, width: 40, height: 40 }}
              appearance="filled"
              accessoryLeft={TiBoulotAvatar}
              onPress={() => navigation.navigate('Profile')}
            />
            <Text appearance="hint" style={[styles.servicesButton]}>
              MoGaz
            </Text>
          </Col>
          <Col style={{ alignItems: 'center' }}>
            <Button
              status="primary"
              style={{ borderRadius: 40, width: 40, height: 40 }}
              appearance="filled"
              accessoryLeft={TiBoulotAvatar}
              onPress={() => navigation.navigate('Profile')}
            />
            <Text appearance="hint" style={[styles.servicesButton]}>
              MoEat
            </Text>
          </Col>
          <Col style={{ alignItems: 'center' }}>
            <Button
              status="primary"
              style={{ borderRadius: 40, width: 40, height: 40 }}
              appearance="filled"
              accessoryLeft={TiBoulotAvatar}
              onPress={() => navigation.navigate('Profile')}
            />
            <Text appearance="hint" style={[styles.servicesButton]}>
              MoPay
            </Text>
          </Col>
          <Col style={{ alignItems: 'center' }}>
            <Button
              status="primary"
              style={{ borderRadius: 40, width: 40, height: 40 }}
              appearance="filled"
              accessoryLeft={TiBoulotAvatar}
              onPress={() => navigation.navigate('Profile')}
            />
            <Text appearance="hint" style={[styles.servicesButton]}>
              MoFix
            </Text>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default HomeStackScreen;
