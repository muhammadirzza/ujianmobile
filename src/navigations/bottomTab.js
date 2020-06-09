import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homestackroot from '../navigations/homeStackroot';
import {Text} from 'react-native'
import Profile from '../screens/profile';
import Ionicons from 'react-native-vector-icons/FontAwesome';



const Tab = createBottomTabNavigator()    

export default () => {
    return(
        <Tab.Navigator                                    
            screenOptions={({route}) => ({                
            tabBarIcon: ({focused, color, size}) => {     
                let iconName;                             
                if(route.name === 'Home') {                          
                    iconName = focused
                    ? 'home'
                    : 'home'
                }else if(route.name === 'Profile') {
                iconName = focused ? 'user' : 'user'
                }
                return <Ionicons name={iconName} size={size} color={'#3DDC84'} />   
            },
            tabBarLabel:({color})=><Text style={{color:'#3DDC84'}}>{route.name}</Text>  
            })}
            tabBarOptions={{                  
                activeTintColor:'#3DDC84',
                inactiveTintColor:'gray',
                showLabel:true                 
            }}
            initialRouteName='Home'
        >
            
            <Tab.Screen name='Home' component={Homestackroot}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    )
}