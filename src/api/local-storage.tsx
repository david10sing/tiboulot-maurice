import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUnsafeData = async (
  key: string,
  value: unknown
): Promise<void> => {
  let transformedValue;
  switch (typeof value) {
    case 'string':
      transformedValue = value;
      break;
    case 'number':
      transformedValue = value.toString();
      break;
    case 'boolean':
    case 'object':
      transformedValue = JSON.stringify(value);
      break;
    default:
      transformedValue = '';
  }

  try {
    await AsyncStorage.setItem(key, transformedValue);
  } catch (e) {
    // saving error
  }
};

export const isFirstTimeUser = async (): Promise<boolean> => {
  try {
    const isFirstTimeUserValue = await AsyncStorage.getItem('isFirstTimeUser');
    if (isFirstTimeUserValue) {
      return JSON.parse(isFirstTimeUserValue);
    }
    return false;
  } catch (e) {
    // read error
    return false;
  }
};
