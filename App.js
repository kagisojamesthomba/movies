import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [asset] = useAssets(require('./food.jpg'));
  const [loaded] = Font.useFonts(Ionicons.font);

  if (!asset || !loaded) {
    return <AppLoading />;
  }
  return <Text>hello!</Text>;
}
