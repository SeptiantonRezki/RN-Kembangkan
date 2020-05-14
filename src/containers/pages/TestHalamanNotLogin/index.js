import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

const TestHalamanNotLogin = ({navigation}) => {


    const globalState = useSelector(state => state);
    const handlePress = (halaman) => {
        navigation.navigate(halaman);
    }

    return (
        <View style={{flex : 1, alignItems : 'center', justifyContent :'center', marginHorizontal : 20,}}>
            
         
            <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Login')}>
                <Text style ={{textAlign : 'center'}}>Halaman Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Register')}>
                <Text style ={{textAlign : 'center'}}>Halaman Register</Text>
            </TouchableOpacity>

           
        </View>
    )
}

export default TestHalamanNotLogin;
