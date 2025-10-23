// App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CartProvider } from './context/CartContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screen/HomeScreen';
import CartScreen from './screen/CartScreen';
import AccountScreen from './screen/AccountScreen';
import ProductDetailScreen from './screen/ProductDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ color, size }) => {
                let iconName = '';
                if (route.name === 'Products') iconName = 'cube-outline';
                else if (route.name === 'Cart') iconName = 'cart-outline';
                else if (route.name === 'Account') iconName = 'person-outline';
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#0A4D68',
              tabBarInactiveTintColor: '#888',
            })}
          >
            <Tab.Screen name="Products" component={HomeStack} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </CartProvider>
  );
}
