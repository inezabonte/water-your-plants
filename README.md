# WaterYourPlantsTuesday Web Push example

Hey there, this is an example of a mini app that I created, to demonstrate
web push in Progressive web apps.

To get this app running there are several things you need to do;

1. clone this repo and run `yarn` to install packages.
2. copy the contents of the `.env.example` file and add them to your `.env.local` file.
3. Generate VAPID keys and add them to your `.env.local` file. With the [web-push](https://www.npmjs.com/package/web-push)
library installed globally, you can run the command below to generate keys from command line.

```bash
web-push generate-vapid-keys [--json]
```

4. Make sure to add the public vapid key to [this line](https://github.com/inezabonte/water-your-plants/blob/19b53d25f6c8e1ef129280cc5116d670a6a476a0/lib/subscribe.js#L37) in the function that subscribes the user to the Push API.
5. `yarn dev` should start the app on `localhost:3000`. Use [ngrok](https://ngrok.com) to help you run your app over secure protocol inorder to access Notification API.
6. If testing on iOS - The app has to be added to your home screen inorder to request for permission to send notifications.
7. Upon the user accepting to receive notifications the client's push subscription object will be logged in the terminal
8. Make a POST request to `localhost:3000/api/notify` with data received from the push subscription object and a custom message you'd like to send. The properties below are added to your request's body inorder to send a push notification to the subscribed user.

```json
{
    "subscription": {
        "endpoint": "",
  "expirationTime": null,
  "keys": {
    "p256dh": "",
    "auth": ""
  }
    },
    "dataToSend": {
        "title": "WaterYourPlantsTuesday®",
        "body": "A custom message to send"
    }
}
```

I have [published an article](https://ineza.codes/blog/notifications-in-pwas-with-webpush) with more explanation of what is happening in this example and how you can implement web-push in your own web app.
