import { firebase } from '../firebase/firebase';

const uploadToFirebase = (blob, fileName) => {
  return new Promise((resolve, reject) => {
    var storageRef = firebase.storage().ref();
    storageRef
      .child(`ebooks/${fileName}`)
      .put(blob, {
        contentType: 'application/pdf',
      })
      .then((snapshot) => {
        blob.close();
        resolve(snapshot);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default uploadToFirebase;
