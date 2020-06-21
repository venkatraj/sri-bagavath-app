import React from 'react';
import {
  Dimensions,
  Button,
  View,
  ScrollView,
  StyleSheet,
  Linking,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Card, Title, Paragraph } from 'react-native-paper';

import getRegion from '../../utils/getRegion';

const ContactScreen = (props) => {
  const { height, width } = Dimensions.get('window');
  const latitude = 11.629732;
  const longitude = 78.253898;
  const latitudeDelta = 0.1;
  const longitudeDelta = latitudeDelta * (width / height);
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.cardItem}>
        <Card.Content>
          <Title>Our Office Location</Title>
          <Paragraph>
            31, Ramalingasamy Street, Ammapet, Salem - 636003, Tamil Nadu, India
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.cardItem}>
        <Card.Content>
          <Title>Contact Number</Title>
          <Paragraph>Jeevamani +91-9789165555</Paragraph>
          <Paragraph>V.A.P Saravanan +91- 99942-05880</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.cardItem}>
        <Card.Content>
          <Title>Email Address</Title>
          <Paragraph>sribagavathmission@gmail.com</Paragraph>
          <View style={styles.fixToText}>
            <Button
              onPress={() =>
                Linking.openURL('mailto:sribagavathmission@gmail.com')
              }
              title="Send Message"
            />
          </View>
        </Card.Content>
      </Card>
      <Card style={styles.cardItem}>
        <Card.Content>
          <Title>Map</Title>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta,
              longitudeDelta,
            }}
          >
            <Marker
              coordinate={{ latitude, longitude }}
              title="Sri Bagavath Bhavan"
              description="Where you get enlightenment"
            />
          </MapView>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  cardItem: {
    margin: 20,
    elevation: 5,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  map: {
    width: '100%',
    height: 250,
    marginBottom: 15,
  },
});

export default ContactScreen;
