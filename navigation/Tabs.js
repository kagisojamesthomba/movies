import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Movie from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name='Movies' component={Movie} />
    <Tab.Screen name='Tv' component={Tv} />
    <Tab.Screen name='Search' component={Search} />
  </Tab.Navigator>
);

export default Tabs;
