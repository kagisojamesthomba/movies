import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import { BLACK_COLOR, DARK_GREY, LIGHT_GREY, WHITE_COLOR } from '../colors';
import Movie from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isdark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isdark ? BLACK_COLOR : WHITE_COLOR,
        },
        tabBarActiveTintColor: isdark ? WHITE_COLOR : 'teal',
        tabBarInactiveTintColor: isdark ? LIGHT_GREY : 'grey',
        headerStyle: {
          backgroundColor: isdark ? BLACK_COLOR : WHITE_COLOR,
        },
        headerTitleStyle: {
          color: isdark ? WHITE_COLOR : BLACK_COLOR,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: -4,
          marginBottom: 2,
        },
      }}
    >
      <Tab.Screen
        name='Movies'
        component={Movie}
        options={{
          tabBarIcon: ({ color, size }) => {
            console.log(color, size);
            return <Ionicons name='film-outline' color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name='TV'
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => {
            console.log(color, size);
            return <Ionicons name='tv-outline' color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            console.log(color, size);
            return <Ionicons name='search-outline' color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
