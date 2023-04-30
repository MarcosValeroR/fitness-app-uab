import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataDB = async (keyStorage = '@storage_Key') => {
    try {
        const jsonValue = await AsyncStorage.getItem(keyStorage)
        console.log(jsonValue)
        return jsonValue != null ? jsonValue : null;
      } catch(e) {
        // error reading value
        console.log("Error",e)
      }
}