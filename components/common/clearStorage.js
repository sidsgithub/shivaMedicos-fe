import AsyncStorage from "@react-native-community/async-storage";

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {}
};
