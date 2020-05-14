import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


export const ButtonAction = ({keterangan, onPress}) => {
    return (
        <TouchableOpacity style={styles.buttonAction} onPress={onPress}>
            <Text style={styles.Text}>{keterangan}</Text>
        </TouchableOpacity>
    )
}

export const ButtonNavigation = ({navigation, keterangan, onPress}) => {
    return (
        <TouchableOpacity style={styles.buttonNavigation} onPress={onPress}>
            <Text style={styles.Text}>{keterangan}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonAction : { 
        backgroundColor:'#555111', 
        justifyContent : 'center', 
        alignItems : 'center',
        paddingHorizontal : 20,
        height : 40,
        marginTop : 10, 
        borderRadius : 5
    },

    buttonNavigation : { 
        backgroundColor:'#555111', 
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
        paddingHorizontal : 20
    },

    Text : {
        textAlign : 'center',
        color : 'white'
    }, 

});
  
