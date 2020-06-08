import React from 'react';
import { Button, View, Text, StyleSheet, Linking } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ContactScreen = (props) => {
  return (
    <View>
      <Card style={styles.cardItem}>
        <Card.Content>
          <Title>Our Office Location</Title>
          <Paragraph>
            31, Ramalingasamy Street, Ammapat, Salem - 636003, Tamil Nadu, India
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
          <Paragraph>TODO</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    marginBottom: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});

export default ContactScreen;
