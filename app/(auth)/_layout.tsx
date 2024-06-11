import React from 'react';
import { Tabs } from 'expo-router/tabs';
import { Ionicons } from '@expo/vector-icons';
import { LogoutButton } from '@/components/logoutButton';

export default function Layout() {
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
          headerRight: () => <LogoutButton />
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          href: null,
          tabBarStyle: { display: 'none' }
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          href: null
        }}
      />
    </Tabs>
  );
}
