import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';
import {signInSuccess, signFailure, signOut} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;
    const response = yield call(api.post, '/session', {
      email,
      password,
    });

    const {token} = response.data;

    const user = {
      id: response.data.id,
      email: response.data.email,
      name: response.data.name,
      phone: response.data.phone,
    };

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    console.log('err ->>>>', err);
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seu email/senha',
    );
    yield put(signOut());
  }
}

export function setToken({payload}) {
  if (!payload) return;
  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
