import AsyncStorage from "@react-native-async-storage/async-storage";

const setLocalValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const setLocalData = async (key, data) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonData);
  } catch (e) {
    // saving error
  }
};

const getLocalValue = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    // error reading value
  }
};

const getLocalData = async (key) => {
  try {
    const jsonData = await AsyncStorage.getItem(key);
    return jsonData != null ? JSON.parse(jsonData) : null;
  } catch (e) {
    // error reading value
  }
};

export { setLocalValue, setLocalData, getLocalValue, getLocalData };
