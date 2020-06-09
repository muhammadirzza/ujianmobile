import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
// import TabNav from './bottomTab';
import Profile from '../screens/profile'
import Setting from '../screens/setting'
import { View, Text, Button } from 'react-native';

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
    return (
      <Drawer.Navigator
        drawerPosition='right'       
        screenOptions={({route})=>({   
          drawerLabel:({focused,color,size})=>{
            if (route.name === 'Profile') {
            } else if (route.name === 'Setting') {
            }
            return <Text style={{color:'#3DDC84'}}>{route.name}</Text>;
        },
        })}
        drawerContentOptions={{
          // activeBackgroundColor:'gray',
          // inactiveBackgroundColor:'transparent',
          activeTintColor:'#3DDC84',
          inactiveTintColor:'gray'
        }}
      >
        <Drawer.Screen name='Profile' component={Profile}/>
        <Drawer.Screen name='Setting' component={Setting} />
      </Drawer.Navigator>
    )
}


export default MyDrawer