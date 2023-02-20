import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDERID,
  APP_ID,
  VAPID_KEY,
} = process.env;

const firebaseConfig = {
  apiKey: "AIzaSyDqCADrNU06RRILZtH3_qqTwqW-SiKyR_U",
  authDomain: "wateryourplantstuesday.firebaseapp.com",
  projectId: "wateryourplantstuesday",
  storageBucket: "wateryourplantstuesday.appspot.com",
  messagingSenderId: "506352816568",
  appId: "1:506352816568:web:ad38a74eead8a1f0867f4d",
};

export function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Permission granted");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BAKwUiCzQv6B88s2OJsPi6ySWtI53o_uM1142t0JbnHnXMAbXqhAu_MO-q_0sIoo9uyqwdJyStbC2ROPpJHodVc",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken:", currentToken);
        } else {
          console.log("Can't get token");
        }
      });
    } else {
      console.log("Permission denied!");
    }
  });
}
