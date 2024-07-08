import { useRouter } from 'expo-router';
import { removeToken } from '../api/login';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await removeToken();
    router.replace('/login');
  };
  
  return (
    <Pressable style={{ marginRight: 10 }} onPress={handleLogout}>
      <Ionicons name="log-out-outline" size={24} color="#fff" />
    </Pressable>
  );
};