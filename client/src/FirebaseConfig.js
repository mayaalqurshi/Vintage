import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDBiB2F3CwESYxHeGH092vCG0TRRTfI0vM',
	authDomain: 'vintage-62bd8.firebaseapp.com',
	projectId: 'vintage-62bd8',
	storageBucket: 'vintage-62bd8.appspot.com',
	messagingSenderId: '594344255087',
	appId: '1:594344255087:web:df274f3bd6f5a43cb1779a',
	measurementId: 'G-1HDM5H8GQ9',
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
