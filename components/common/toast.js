import { ToastAndroid } from "react-native";

export const showToast = (message,duration) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    duration,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};