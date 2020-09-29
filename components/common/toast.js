import { ToastAndroid } from "react-native";

export const showToast = (message,duration) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    duration,
    ToastAndroid.TOP,
    0,
    25
  );
};