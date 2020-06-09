import { TouchableOpacity } from 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/actions'
import { FlatList, View, Image } from 'react-native';


function HomeScreen({ route, navigation }) {            
    let dataKucing = useSelector(state => state.Auth.dataKucing);
    let dispatch = useDispatch();
    console.log(dataKucing)

    useEffect(() =>{
        dispatch(getData())
    }, [dispatch])

    return (
        <View style={{backgroundColor: 'whitesmoke', flex:1}}>
            <FlatList 
                keyExtractor={(item, index) => index.toString()}
                data={dataKucing}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', {detail: item})}
                        style={{backgroundColor: 'whitesmoke', flex:1}}
                    >
                        <Image
                        style={{width: 200, height: 200}}
                        source={{
                            uri: item.url
                        }}
                    />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}



export default HomeScreen