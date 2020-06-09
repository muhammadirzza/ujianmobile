import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Loading = () => {
    
    return(
        <View>
            Loading...
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#01877c'
    },
    logo:{
        fontSize:80,
        color:'white'
    }
})

export default Loading