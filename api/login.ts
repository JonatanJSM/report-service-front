import axios from 'axios';
import { httpClient } from './http';
import * as SecureStore from 'expo-secure-store';

const API_URL = 'http://192.168.1.223:8000';

export const login = async (username: string, password: string): Promise<string> => {  
  const response = await httpClient.post('/api/sesion/login', {
    username: username,
    password: password,
  }, {
    headers: { 'X-Frontend-Token': 'develop' }
  });
     
  const { token } = response.data;
  await SecureStore.setItemAsync('userToken', token);
  return token;
};

export const getToken = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync('userToken');
};

export const removeToken = async (): Promise<void> => {  
  await SecureStore.deleteItemAsync('userToken');
};
