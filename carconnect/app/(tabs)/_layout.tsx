import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const Layout = () => {
  return <Tabs screenOptions={{ tabBarActiveTintColor: Colors.primary }}>
<Tabs.Screen
name="page" 
options={{tabBarLabel: 'Home',
          tabBarIcon: ({color, size }) => <Ionicons name="home" size={size} color={color} />}}
/>
<Tabs.Screen
name="explore" 
options={{tabBarLabel: 'Search',
          tabBarIcon: ({color, size }) => <Ionicons name="search" size={size} color={color} />}}
/>
<Tabs.Screen
name="wishlist" 
options={{tabBarLabel: 'Wishlist',
          tabBarIcon: ({color, size }) => <Ionicons name="heart-outline" size={size} color={color} />}}
/>
<Tabs.Screen
name="profile" 
options={{tabBarLabel: 'profile',
          tabBarIcon: ({color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />}}
/>






</Tabs>





}

export default Layout