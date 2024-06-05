import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Button,
  ButtonText
} from "@gluestack-ui/themed"
import { TouchableOpacity, View, StyleSheet, TextInput, Pressable, Text, Alert } from 'react-native';
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const [username, setUserame] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn, loading } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const token = await signIn(username, password);      
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', 'Email o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.inputField}
        placeholder="username"
        value={username}
        onChangeText={setUserame}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button size="sm">
        <ButtonText>Submit</ButtonText>
      </Button>
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <Link href="/reset" asChild>
          <Pressable style={styles.button}>
            <Text>Forgot password?</Text>
          </Pressable>
      </Link>
      <Link href="/register" asChild>
        <Pressable style={styles.button}>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#6c47ff',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    margin: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Login;
