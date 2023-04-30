import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataDB = async (keyStorage = '@storage_Key', value = "") => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(keyStorage, jsonValue)
      } catch (e) {
        // saving error
        console.log(e)
      }
}