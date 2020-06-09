import React from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const Profile = (props) => {        //props route ini didapat dari homestack.screen
    let image = useSelector(state => state.Auth.image)

    return (
        <View style={styles.container}>
            {
                image?
                <View>
                    <Image 
                    source={{
                        uri: image
                    }}
                    style={styles.image}
                    />
                </View>
                :
                <View>
                <Image 
                source={require('../assets/defaultpicture.jpg')}
                style={styles.image}
                />
                </View>
            }
            <Text>{props.Auth.username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    image: {
        borderWidth: 2,
        borderRadius: 150,
        width: 150,
        height: 150
    }
})

const MapStateToProps=(state)=>{
  return{
      Auth:state.Auth
  }
}

export default connect(MapStateToProps) (Profile)