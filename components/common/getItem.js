import AsyncStorage from "@react-native-community/async-storage";

export const getMyObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}
};

export const getMyStringValue = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {}
};
