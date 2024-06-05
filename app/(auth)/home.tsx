import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { removeToken } from '../../api/login';
import { Link } from 'expo-router';
import { Card } from '@/components/card';

const Home = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await removeToken();
    router.replace('/login');
    //router.replace('/baches/report');
    //router.push('/report');
  };

  return (
    <View style={styles.container}>
      <Text>Bienvenido!
        tener la opcion de mapa o de ir a las otras funciones
      </Text>
      
      <Link href="/report">Present modal</Link>
      {/* <Card /> */}
      <Button title="Cerrar sesión" onPress={handleLogout} />
      <Button title="Ir a otra pantalla" onPress={() => router.push('/other')} />
      <Text>Home Screen</Text>
      <Link href="/report">Present modal</Link>
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
