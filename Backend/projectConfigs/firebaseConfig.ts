import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkE8QlpkKQo1xbhZckIkIdKiujtG7sah0",
  authDomain: "musical-dd417.firebaseapp.com",
  projectId: "musical-dd417",
  storageBucket: "musical-dd417.appspot.com",
  messagingSenderId: "756831569896",
  appId: "1:756831569896:web:bb886111585736f9b2465d",
  measurementId: "G-RZPKX6KPDR",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
