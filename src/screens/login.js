import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import {LoginUser, LoginFailed} from '../redux/actions/authactions';
import { connect } from 'react-redux'
// import * as Animatable from 'react-native-animatable';
import Asyncstorage from '@react-native-community/async-storage'

const Login = (props) => {
    
    const [username, setusername] = useState('')

    const onLogin = () => {
        if(username !== '') {
            Asyncstorage.setItem('username',username)
            .then(()=>{
                props.LoginUser(username)
                console.log(props.Auth)
            }).catch((err)=>{
                console.log(err)
            })
        }else{
            props.LoginFailed()
            // alert('lengkapi data')
        }
    }

    return(
        <View style={styles.container}>
            <View>
                <Icon name='android' size={180} color='#3DDC84'/>
            </View>
            <View style={styles.LoginputStyle}>
                <Input
                    placeholder='Username'
                    name='email'
                    value={username}
                    onChangeText={(text)=>setusername(text)}
                />
            </View>
            {
                props.Auth.errormes ?
                <Text style={{color:'red'}}>{props.Auth.errormes}</Text>
                :
                null
            }
            <Button
                    title="Login"
                    containerStyle={{ width: '25%', marginBottom: 10 }}
                    buttonStyle={{ backgroundColor: '#3DDC84' }}
                    // loading={Auth.loadingLogin}
                    onPress={onLogin}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        height:'100%'
    },
    LoginputStyle: {
        marginTop: 50,
        marginBottom:60,
        width: '100%'
    }
})

const MapStateToProps=(state)=>{
    return{
        Auth:state.Auth,
    }
}

export default connect(MapStateToProps, {LoginUser,LoginFailed}) (Login)