import React, { useState } from 'react';
import {View, StyleSheet, Image, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {ButtonNavigation, ButtonAction, Input} from '../../../components/atom';
import { loginUserAPI } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';


const Login = ({navigation}) => {
    const userFirebase = useSelector(state => state);
    const dispatch = useDispatch();
    const loginApi = (data) => dispatch(loginUserAPI(data));


    const [user , setUser] = useState({
        email : '',
        password : ''
    })

    const handleChange = (input_name, input_value) => {
        setUser({
            ...user,
            [input_name] : input_value
        })
    }

    const handleLogin = async () => {
        if(user.email && user.password){
            const res = await loginApi(user);
            if(res) {
                // localStorage.setItem('userData', JSON.stringify(res));
                // this.setState({
                //     email : '',
                //     password : ''
                // })
                dispatch({type : 'CHANGE_LOGIN', value : true});
                navigation.navigate('Home');
            }
        }
        else {
            alert('Mohon mengisi data dengan benar');
        }
    }


    return (
        <View style={{flex: 1}}>
            <View style={{flex :1, backgroundColor : '#0947E8', borderBottomRightRadius : 15, borderBottomLeftRadius : 15, justifyContent: 'center'}}>
                <Text style={{textAlign : 'center', color : 'white', fontSize : 20}}>
                    SECOND PEACE
                </Text>
            </View>
            <View style={{flex :3, }}>
                <View style={{
                    marginHorizontal : 10,
                    backgroundColor : 'white',
                    borderRadius : 15,
                    position : 'relative',
                    top : -20,
                    paddingHorizontal : 30,
                    paddingTop : 20,
                    paddingBottom : 10,

                    shadowColor: 'black',
                    shadowOffset : { width: 10, height: 5 },
                    shadowOpacity: 1,
                    shadowRadius: 5,  
                    elevation: 5
                }}>
                    <Text style={{textAlign: 'center', marginBottom : 20, fontSize: 20, fontWeight : 'bold'}}>LOGIN</Text>
                    
                    <Text style={{fontSize : 11}}>Username</Text>
                    <TextInput 
                        value={user.email} 
                        onChangeText={(value) => handleChange('email', value)}
                        style={{width : '100%', borderBottomWidth : 1, paddingVertical : 5, marginBottom : 20, paddingHorizontal : 0}} 
                        placeholder='email'
                        keyboardType='email-address'
                    />
                    
                    <Text style={{fontSize : 11}} >Password</Text>
                    <TextInput
                        value={user.password}
                        onChangeText={(value) => handleChange('password', value)} 
                        style={{width : '100%', borderBottomWidth : 1, paddingVertical : 5, marginBottom : 20, paddingHorizontal : 0}} 
                        placeholder='password'
                        secureTextEntry={true}
                    />
                    
                    <TouchableOpacity onPress={handleLogin} style={{marginTop: 20, backgroundColor : '#1F5BF3', padding : 15, borderRadius : 15, marginHorizontal : 50}}>
                        <Text style={{color: 'white', textAlign: 'center'}}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                    
                    <Text onPress={() => {navigation.navigate('Register')}} style={{paddingVertical : 20 , color: '#1F5BF3',fontSize : 11, textAlign: 'center', marginBottom : 20, fontWeight : 'bold', marginTop : 10}}>Register</Text>

                </View>
            </View>
        </View>
    )
}
export default Login;
