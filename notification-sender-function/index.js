import { Expo } from "expo-server-sdk";

const expo = new Expo();
export const sendPushNotification = (req, res) => {
  const token = "ExponentPushToken[9rKWfpKNoxctQIn7jGRK5v]";

  try {
    expo.sendPushNotificationsAsync([
      {
        to: token,
        title: "expo notification test",
        body: "from node js server",
      },
    ]);
    res.status(200).send("Notification Sent!");
  } catch (error) {
    res.status(500).send("Error Sending Notification", error);
  }
};
