import React from 'react';
import { Text, View } from 'react-native';
import {Button} from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import {Logout} from '../redux/actions'
import { connect } from 'react-redux';

const Setting = (props) => {       
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Button
            title="Logout"
            containerStyle={{ width: '25%', marginBottom: 10 }}
            buttonStyle={{ backgroundColor: '#3DDC84' }}
            // loading={Auth.loadingLogin}
            onPress={() => {
              AsyncStorage.removeItem('username')
              .then((res)=>{
                props.Logout()
                props.navigation.navigate('Profile',{screen:'Home'})
              })
              .catch((err)=>{
                console.log(err)
              })
            }}
        />
      </View>
    )
}

export default connect(null,{Logout}) (Setting)