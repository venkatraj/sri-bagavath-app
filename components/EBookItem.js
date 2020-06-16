import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph, Snackbar } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import defaultStyles from '../theme/defaultStyles';

const EBookItem = (props) => {
  const onDownload = props.onDownload;
  const { title, fileName, downloadUrl, description } = props.ebookData;

  const downloadEBook = async () => {
    try {
      const { status, uri } = await FileSystem.downloadAsync(
        downloadUrl,
        FileSystem.documentDirectory + `${fileName}` // `${fileName}.pdf`
      );
      if (status === 200) {
        let permission = await MediaLibrary.getPermissionsAsync();
        if (!permission.granted) {
          permission = await MediaLibrary.requestPermissionsAsync();
        }
        if (permission.granted) {
          const asset = await MediaLibrary.createAssetAsync(uri);
          const album = await MediaLibrary.createAlbumAsync(
            'Sri Bagavath',
            asset
          );
          onDownload('downloaded!');
        } else {
          onDownload('not downloaded!');
        }
      } else {
        throw Error('File download not successful');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Title style={defaultStyles.centeredText}>{title}</Title>
        <Paragraph style={defaultStyles.centeredText}>{description}</Paragraph>
        <Card.Actions style={defaultStyles.centered}>
          <Button onPress={downloadEBook}>Download</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default EBookItem;
