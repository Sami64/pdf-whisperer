import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyDY2OV-OVFmx6dVBhG79q1xwoHlymqih60',
	authDomain: 'pdf-whisperer.firebaseapp.com',
	projectId: 'pdf-whisperer',
	storageBucket: 'pdf-whisperer.appspot.com',
	messagingSenderId: '723950275625',
	appId: '1:723950275625:web:b19096daad9a65c1e0e038',
	measurementId: 'G-KKJ559339M',
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
