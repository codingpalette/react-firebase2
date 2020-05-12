import * as firebase from 'firebase/app';
import firebaseConfig from './firebase.config.js';

import 'firebase/auth';
import 'firebase/firebase-database';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);
