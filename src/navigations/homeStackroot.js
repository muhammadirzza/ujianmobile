import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import Details from '../screens/detail';


const HomeStack = createStackNavigator()

const HomeStackRoot = ({navigation}) => {
    return (
        <HomeStack.Navigator
        headerMode='none'
        >
          <HomeStack.Screen name='Homescreen' component={HomeScreen}/>
          <HomeStack.Screen name='Detail' component={Details} initialParams={{name:'Detail User'}}/>
        </HomeStack.Navigator>
    )
}

export default HomeStackRoot