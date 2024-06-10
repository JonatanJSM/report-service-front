// app/_layout.js
import React from 'react';
import { Tabs } from 'expo-router/tabs';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
 // Asegúrate de que la ruta sea correcta
export const LogoutButton = () => {
  return (
    <Pressable style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color="#fff" />
    </Pressable>
  );
};
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="options"
        options={{
          headerTitle: 'Options',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu" size={size} color={color} />,
          tabBarLabel: 'Options',
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          headerTitle: 'Activity',
          tabBarIcon: ({ color, size }) => <Ionicons name="bookmark" size={size} color={color} />,
          tabBarLabel: 'Activity',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
          tabBarLabel: 'Profile',
          headerRight: () => <LogoutButton />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          href: null
        }}
      />
    </Tabs>
  );
}
