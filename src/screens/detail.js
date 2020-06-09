import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { imageAction } from '../redux/actions';
 
const Detail = ({navigation, route, imageAction}) => {
    // console.log(route.params.detail)

    const handleImage = () => {
            imageAction(route.params.detail.url)
            navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Image 
                source={{
                    uri: route.params.detail.url
                }}
                style={{width: '100%', height: 300, marginBottom:40}}
            />
            <Button 
                title="SET AS DISPLAY PICTURE?"
                containerStyle={{
                    alignItems: 'center'
                }}
                buttonStyle={{
                    backgroundColor: '#3DDC84',
                    width: '60%'
                }}
                onPress={handleImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '100%',
    }
})

export default connect(null,{imageAction}) (Detail);
