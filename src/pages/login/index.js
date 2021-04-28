import React, {useState} from 'react';
import {Main, Spacing} from './styles';
import {Text} from 'react-native';
import Input from '../../components/input';

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <Main>
      <Input
        placeholder="Digite seu usuário"
        value={username}
        onChangeText={ev => setUsername(ev.target.value)}
      />
      <Spacing />
      <Input
        placeholder="Digite sua senha"
        value={password}
        onChangeText={ev => setPassword(ev.target.value)}
      />
    </Main>
  );
};

export default Login;
