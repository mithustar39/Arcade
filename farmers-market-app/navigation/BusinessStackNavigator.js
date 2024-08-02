import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BusinessLoginScreen from '../screens/BusinessLoginScreen';
import BusinessSignupScreen from '../screens/BusinessSignupScreen';
import BusinessHomeScreen from '../screens/BusinessHomeScreen';
import ManageSchedulesScreen from '../screens/ManageSchedulesScreen';
import ManageOrdersScreen from '../screens/ManageOrdersScreen';
import ManageProductsScreen from '../screens/ManageProductsScreen';
import ManageReviewsScreen from '../screens/ManageReviewsScreen';

const BusinessStack = createStackNavigator();

const BusinessStackNavigator = () => {
  return (
    <BusinessStack.Navigator initialRouteName="BusinessLogin">
      <BusinessStack.Screen name="BusinessLogin" component={BusinessLoginScreen} />
      <BusinessStack.Screen name="BusinessSignup" component={BusinessSignupScreen} />
      <BusinessStack.Screen name="BusinessHome" component={BusinessHomeScreen} />
      <BusinessStack.Screen name="ManageSchedules" component={ManageSchedulesScreen} />
      <BusinessStack.Screen name="ManageOrders" component={ManageOrdersScreen} />
      <BusinessStack.Screen name="ManageProducts" component={ManageProductsScreen} />
      <BusinessStack.Screen name="ManageReviews" component={ManageReviewsScreen} />
    </BusinessStack.Navigator>
  );
};

export default BusinessStackNavigator;
