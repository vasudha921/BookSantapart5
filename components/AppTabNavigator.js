import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        navigationOptions:{
            
            tabBarLabel: "Donate Books",
         }
    },
    BookRequest:{
        screen:BookRequestScreen,
        navigationOptions:{
            
            tabBarLabel: "Book Request",
        }
    }
})