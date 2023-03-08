import axios from "axios";

export function requestPermission() {
  return new Promise((resolve, reject) => {
    const permissionResult = Notification.requestPermission((result) => {
      resolve(result);
    });
    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  }).then((permissionResult) => {
    if (permissionResult !== "granted") {
      throw new Error("Permission denied");
    }

    subscribeUserToPush();
  });
}

export function registerServiceWorker() {
  return navigator.serviceWorker
    .register("/worker.js")
    .then(function (registration) {
      console.log("Service worker successfully registered.");
      return registration;
    })
    .catch(function (err) {
      console.error("Unable to register service worker.", err);
    });
}

async function subscribeUserToPush() {
  const registration = await registerServiceWorker();

  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: "Add public vapid key here",
  };

  const pushSubscription = await registration.pushManager.subscribe(
    subscribeOptions
  );

  axios
    .post("/api/subscription", pushSubscription)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
  return pushSubscription;
}
