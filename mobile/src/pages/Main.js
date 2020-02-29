import React, {useEffect} from 'react'; //Para fazer uma ação uma úica vez
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'; //Localização do usuário


function Main() {
    useEffect(() => {
        async function loadInitialPosition(){
            const {granted} = await requestPermissionsAsync(); //Opções para permissão

            if(granted){
                const location = await getCurrentPositionAsync({
                    enableHighAccuracy: true, //Se o celular estiver com gps desligado. Passar false
                });
            }
        }
        loadInitialPosition();
    }, []);

    return <MapView style={styles.map}/>
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
})

export default Main;