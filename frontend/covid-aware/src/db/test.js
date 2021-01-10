const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();
const snapshot = db.collection('Users').get();
// console.log(snapshot);
/*
snapshot.then(ss => {
  ss.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
});
*/

const {Firestore} = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore();

async function quickstart() {
  // Obtain a document reference.
  const document = firestore.doc('posts/intro-to-firestore');

  // Enter new data into the document.
  await document.set({
    title: 'Welcome to Firestore',
    body: 'Hello World',
  });
  console.log('Entered new data into the document');

  // Update an existing document.
  await document.update({
    body: 'My first Firestore app',
  });
  console.log('Updated an existing document');

  // Read the document.
  const doc = await document.get();
  console.log(doc);

}
quickstart();

