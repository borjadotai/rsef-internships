import admin from 'firebase-admin'
import 'firebase/analytics'

const serviceAccount = {
  type: 'service_account',
  project_id: 'rsef-c0e6d',
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zxp7c%40rsef-c0e6d.iam.gserviceaccount.com',
}

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://rsef-c0e6d.firebaseio.com/',
      apiKey: 'AIzaSyDhMCi9RzgQjOQ5jQXOWqYharwIqofBMAg',
      authDomain: 'rsef-c0e6d.firebaseapp.com',
      projectId: 'rsef-c0e6d',
      storageBucket: 'rsef-c0e6d.appspot.com',
      messagingSenderId: '802788541782',
      appId: '1:802788541782:web:5024215e6177292a8602f7',
      measurementId: 'G-VMQV52F439',
    })
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack)
  }
}

const db = admin.firestore()
const analytics = admin.analytics

export {db, analytics}
