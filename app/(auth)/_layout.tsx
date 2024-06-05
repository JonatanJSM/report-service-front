import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Profile  from './profile';
import Home from './home';
import Activity from './activity';
import Options from './options';

export const LogoutButton = () => {
  return (
    <Pressable style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color="#fff" />
    </Pressable>
  );
};

const Tab = createBottomTabNavigator();

const TabsPage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="options"
        component={Options}
        options={{
          headerTitle: 'Options',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu" size={size} color={color} />,
          tabBarLabel: 'Options',
        }}
      />
      <Tab.Screen
        name="activity"
        component={Activity}
        options={{
          headerTitle: 'Activity',
          tabBarIcon: ({ color, size }) => <Ionicons name="bookmark" size={size} color={color} />,
          tabBarLabel: 'Activity',
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerTitle: 'Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
          tabBarLabel: 'Profile',
          headerRight: () => <LogoutButton />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsPage;
