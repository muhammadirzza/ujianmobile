import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login'

const Authstack = createStackNavigator()

export default () => {
    return(
        <Authstack.Navigator
            headerMode='none'
        >
            <Authstack.Screen name='login' component={Login} />
        </Authstack.Navigator>
    )
}