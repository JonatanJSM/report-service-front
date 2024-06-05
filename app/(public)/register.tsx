import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const Register = () => {
  
  return (
    <View style={styles.container}>
      <Stack.Screen/>
        <TextInput autoCapitalize="none" placeholder="simon@galaxies.dev"  style={styles.inputField} />
        <TextInput placeholder="password" secureTextEntry style={styles.inputField} />
        <Button  title="Sign up" color={'#6c47ff'}></Button>
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
});

export default Register;
