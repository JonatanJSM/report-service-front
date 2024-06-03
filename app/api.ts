// app/api.ts
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = 'http://192.168.1.223:8000';

export const login = async (username: string, password: string): Promise<string> => {
  console.log('login', username, password);
  
  const response = await axios.post(`${API_URL}/api/sesion/login`,
    { username:username, password:password },
    { headers: { 'X-Frontend-Token': 'develop' } });    
  const { token } = response.data;
  await SecureStore.setItemAsync('userToken', token);
  return token;
};

export const getToken = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync('userToken');
};

export const removeToken = async (): Promise<void> => {
  console.log('removeToken---------');
  
  await SecureStore.deleteItemAsync('userToken');
};
