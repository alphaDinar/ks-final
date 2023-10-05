import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKbmFG0NFdZvPyyBHVIuJitJJmdnehn4o",
  authDomain: "smarthotel-7d5d0.firebaseapp.com",
  projectId: "smarthotel-7d5d0",
  storageBucket: "smarthotel-7d5d0.appspot.com",
  messagingSenderId: "403532820903",
  appId: "1:403532820903:web:0f193e530b955473aa8682",
  measurementId: "G-VXJVCW70SD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app

