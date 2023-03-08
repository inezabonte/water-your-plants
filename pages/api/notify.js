import webpush from "web-push";

const vapidKeys = {
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
};

webpush.setVapidDetails(
  "mailto:ineza@example.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

export default function handler(req, res) {
  if (req.method === "POST") {
    const { subscription, dataToSend } = req.body;
    return webpush
      .sendNotification(subscription, JSON.stringify(dataToSend))
      .then(() => {
        return res.status(200).json({ message: "Notification sent!" });
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  }

  return res.status(401).json({ message: "Method not allowed" });
}
