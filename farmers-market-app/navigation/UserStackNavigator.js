import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/LoginScreen';
import EventsScreen from '../screens/EventsScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import SignUpScreen from '../screens/SignUpScreen';

const UserStack = createStackNavigator();

function AppNavigator() {
  return (
      <UserStack.Navigator initialRouteName="User">
        <UserStack.Screen name="Login" component={LoginScreen} />
        <UserStack.Screen name="SignUp" component={SignUpScreen} />
        <UserStack.Screen name="User" component={UserScreen} />
        <UserStack.Screen name="Events" component={EventsScreen} />
        <UserStack.Screen name="Products" component={ProductsScreen} />
        <UserStack.Screen name="Reviews" component={ReviewsScreen} />
      </UserStack.Navigator>
  );
}

export default AppNavigator;
