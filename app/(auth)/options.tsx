import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        Aquí va a poder crear sus reportes de baches o si tiene vulcanizadora registrarla
        ver cómo está en uber
      </Text>
      <Link href="/report">Present modal</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
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
});

export default Options;
