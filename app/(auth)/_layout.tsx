import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export const LogoutButton = () => {
  return (
    <Pressable style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color="#fff" />
    </Pressable>
  );
};

const TabsPage = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6c47ff',
        },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
          tabBarLabel: 'Profile',
          headerRight: () => <LogoutButton />,
        }}
      />
    </Tabs>
  );
};

export default TabsPage;
