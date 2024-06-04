import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { removeToken } from '../../api/login';
import { Card } from '@/components/card';
const Home = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await removeToken();
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text>Bienvenido!</Text>
      <Card />
      <Button title="Cerrar sesión" onPress={handleLogout} />
      <Button title="Ir a otra pantalla" onPress={() => router.push('/other')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;