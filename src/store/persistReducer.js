import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const persistConfig = {
    key: 'guruths',
    version: 1,
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};
