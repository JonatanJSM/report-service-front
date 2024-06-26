import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';


const Profile = () => {


  const onSaveUser = async () => {
    try {
      // This is not working!
      const result = "hola"
      console.log('🚀 ~ file: profile.tsx:16 ~ onSaveUser ~ result:', result);
    } catch (e) {
      console.log('🚀 ~ file: profile.tsx:18 ~ onSaveUser ~ e', JSON.stringify(e));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        Good morning
      </Text>

      <TextInput placeholder="First Name" value={"hehe"}  style={styles.inputField} />
      <TextInput placeholder="Last Name" value={"hehe"}  style={styles.inputField} />
      <Button onPress={onSaveUser} title="Update account" color={'#6c47ff'}></Button>
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

export default Profile;