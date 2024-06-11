import { View, Text, StyleSheet } from 'react-native';

const Activity = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        Ver los reportes de sus baches
      </Text>
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

export default Activity;
