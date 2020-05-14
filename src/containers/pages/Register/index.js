import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../../components/atom';
import { registerUserAPI , } from '../../../redux';


const Register =({navigation}) => {
    
    const {reducerRegister} = useSelector(state => state);
    const {user_firebase} = reducerRegister;
    const {uid} = user_firebase;

    const dispatch = useDispatch();
    const registerApi = (data) => dispatch(registerUserAPI(data));
    // const userRegisterApi = (data) => dispatch(userRegisterDataApi(data));  

    const [user , setUser]= useState({
        uid : '',
        nama : '',
        kontak : '',
        email : '',
        password : '',
    });


    // function handle
    const handleChange = (input_name , input_value) => {
        setUser({
            ...user,
            [input_name] : input_value
        })
    }
    const handleClick = async () => { 
        if(user.email && user.password){
            const res = await registerApi(user);
            if(res) {
                 
            }
            navigation.navigate('Login');
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
                    <Text style={{textAlign: 'center', marginBottom : 20, fontSize: 20, fontWeight : 'bold'}}>Register</Text>
                    
                    <Text style={{fontSize : 11}}>Nama</Text>
                    <TextInput 
                        value={user.nama} 
                        onChangeText={(value) => handleChange('nama', value)}
                         
                        style={{width : '100%', borderBottomWidth : 1, paddingVertical : 5, marginBottom : 20, paddingHorizontal : 0}} 
                        placeholder='nama'/>

                    <Text style={{fontSize : 11}}>Kontak</Text>
                    <TextInput 
                        value={user.kontak} 
                        onChangeText={(value) => handleChange('kontak', value)}
                         
                        style={{width : '100%', borderBottomWidth : 1, paddingVertical : 5, marginBottom : 20, paddingHorizontal : 0}} 
                        placeholder='nama'
                        keyboardType='numeric'
                        />    
                    
                    <Text style={{fontSize : 11}}>Username</Text>
                    <TextInput 
                        keyboardType='email-address' 
                        value={user.email} 
                        onChangeText={(value) => handleChange('email', value)}
                        style={{width : '100%', borderBottomWidth : 1, paddingVertical : 5, marginBottom : 20, paddingHorizontal : 0}} 
                        placeholder='email'/>
                    
                    <Text style={{fontSize : 11}} >Password</Text>
                    <TextInput 
                        value={user.password} 
                        onChangeText={(value) => handleChange('password', value)}
                        secureTextEntry={true} style={{width : '100%', borderBottomWidth : 1, paddingVertical : 5, marginBottom : 10, paddingHorizontal : 0}} 
                        placeholder='password'
                        />
                    <Text style={{fontSize : 11}} >Panjang password minimal 6</Text>

                    
                    <TouchableOpacity onPress={handleClick} style={{marginTop: 20, backgroundColor : '#1F5BF3', padding : 15, borderRadius : 15, marginHorizontal : 50}}>
                        <Text style={{color: 'white', textAlign: 'center'}}>
                            Register
                        </Text>
                    </TouchableOpacity>
                    <Text onPress={() => {navigation.navigate('Login')}} style={{paddingVertical : 20 ,color: '#1F5BF3', fontSize : 11, textAlign: 'center', marginBottom : 20, fontWeight : 'bold', marginTop : 10}}>Login</Text>

                </View>
            </View>
        </View>
    )
}



export default Register;

