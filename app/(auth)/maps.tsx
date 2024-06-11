import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
const Maps = () => {

  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navegar hacia atrás
  };

  const onSaveUser = async () => {
    try {
      const result = "hola"
      console.log('🚀 ~ file: profile.tsx:16 ~ onSaveUser ~ result:', result);
    } catch (e) {
      console.log('🚀 ~ file: profile.tsx:18 ~ onSaveUser ~ e', JSON.stringify(e));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        ver mapaaa
      </Text>
      <Button title="Back" onPress={handleBack} />
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

export default Maps;
