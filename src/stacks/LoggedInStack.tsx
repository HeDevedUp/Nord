import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotificationScreen from '../pages/Notification/NotificationScreen';
import PictureScreen from '../pages/Picture/PictureScreen';
import MessagingScreen from '../pages/Messaging/MessagingScreen';
import CalculatorScreen from '../pages/Calculator/CalculatorScreen';
import Icon from "react-native-vector-icons/Feather";

export interface BottomTabParamList {
  NotificationScreen: undefined
  PictureScreen: undefined
  MessagingScreen: undefined
  CalculatorScreen: undefined

  [key: string]: undefined | object
}


const Tab = createBottomTabNavigator<BottomTabParamList>();




const LoggedInStack = (): JSX.Element => {
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#0782F9" },
        }}
        sceneContainerStyle={{ backgroundColor: "#cccccc" }}
      >
        <Tab.Screen
          name="Notify"
          component={NotificationScreen}
          options={{
            tabBarShowLabel: true,
            tabBarIcon: ({ focused }) => (
              <Icon
                name="message-square"
                color={focused ? "#ffffff" : "#0e1529"}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Picture"
          component={PictureScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Icon
                name="upload"
                color={focused ? "#ffffff" : "#0e1529"}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Messaging"
          component={MessagingScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Icon
                name="message-circle"
                color={focused ? "#ffffff" : "#0e1529"}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Icon
                name="divide-circle"
                color={focused ? "#ffffff" : "#0e1529"}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
};


export default LoggedInStack;
