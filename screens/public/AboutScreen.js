import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const AboutScreen = (props) => {
  return (
    <ScrollView>
      <Card style={styles.container}>
        <Title>SHRI BAGAVATH</Title>
        <Paragraph style={styles.spaced}>
          He is not a saint who has renounced everything. Instead, he is a
          complete man who has accepted the whole. His holistic vision towards
          enlightenment is a final verdict for the inner seekers who stand at
          the verge of self realization.
        </Paragraph>
        <Paragraph style={styles.spaced}>
          'Shri Bagavath', who is affectionately called 'Ayya', is one who has
          shown the unswerving recognition of Awakening, which is flowing out
          afresh, anew every spur of the moment.
        </Paragraph>
        <Paragraph style={styles.spaced}>
          He unveils the mystery that the source of all misery is the desire for
          'Attaining' which has formed a psychological future and unending inner
          journey drags towards the idea of Moksha, liberation, Awakening or
          whatsoever its called..
        </Paragraph>
        <Paragraph style={styles.spaced}>
          Even though Ayya's revelation appears as a shock treatment for the
          seekers, rather its a healing for 'Enlightenment' without no side
          effects. His glimpse (Dharshan), divulges that the 'World' and 'Truth'
          are not two different entities, they are one and alike 'Waves' and
          'Ocean'. The very moment mind totally accepts its oscillations without
          any resistance; the inner flow becomes a perennial stream of flood,
        </Paragraph>
        <Paragraph style={styles.spaced}>
          Enlightenment is not an experience or accomplishment, the moment we
          end up all our internal efforts to hold or repel the feelings
          instantaneously there is freedom. Freedom indeed, free from all the
          images and metaphors of freedom. Subsequently there is no more
          enduring persona to counteract the emerges of thoughts or feelings. It
          can be called as an 'Essence of Upanishads'. Or 'Neo Upanishad'.
        </Paragraph>
        <Paragraph style={styles.spaced}>
          For the ages those who are longing for ‘Awakening’ had not so far
          faced such a relaxed, quiet, effortless storm of surge.
        </Paragraph>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 20,
    padding: 15,
    elevation: 5,
  },
  spaced: {
    marginBottom: 10,
  },
});

export default AboutScreen;
