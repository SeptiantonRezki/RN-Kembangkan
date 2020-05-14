import React, { useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';
import TextTicker from 'react-native-text-ticker';

import { useDispatch, useSelector } from 'react-redux';
import { addDataAPI } from '../../../redux/action';

const HargaTambah = ({navigation}) => {
    const {reducerRegister} = useSelector(state => state);
    const {user_firebase} = reducerRegister;
    const {uid} = user_firebase;

    const dispatch = useDispatch();
    const addDataApi = (data) => dispatch(addDataAPI(data));
    
    const [data , setData] = useState({
        harga : ''
    })

    const handleChange = (input_name, input_value) => {
        setData({
            ...data,
            [input_name] : input_value
        })
    }
    const handleAdd = async () => {
        const dataKirim = {
            harga : data.harga,
            uid : uid,
        }
        if(data.harga){
            const res = await addDataApi(dataKirim);
            if(res) {
                // localStorage.setItem('userData', JSON.stringify(res));
                // this.setState({
                //     email : '',
                //     password : ''
                // })
                navigation.navigate('Home');
            }
        }
        else {
            alert('Mohon mengisi data dengan benar');
        }
    }
    return (
        <View style={{flex : 1}}>
            <View style={{paddingHorizontal : 25,marginBottom: 30, marginTop :20, paddingVertical : 20, alignItems :'center'}}>
                <Image
                    source={require('../../../assets/gambar/jeruk.jpg')}
                    style ={{width : 120, height : 120, backgroundColor : 'red', borderRadius : 100}}
                    />
                <Text style={{position:'absolute', top : 100}}>Sample foto</Text>    
            </View>
            <View style={{paddingHorizontal : 25, paddingVertical : 20}}>
                <View style={{marginBottom : 10, borderBottomWidth : 0.17}}>
                    <Text style={{fontSize : 11, color : '#5AC3DE', height : 15}}>Uang Masuk</Text>
                    <TextInput 
                        value={data.harga} 
                        onChangeText={(value) => handleChange('harga', value)}
                        
                        style={{fontSize : 20, paddingVertical :7, paddingHorizontal : 0}} 
                        placeholder='Harga' 
                        keyboardType='numeric'/>
                </View>
                
                <View style={{marginBottom : 10, borderBottomWidth : 0.17}}>
                    <Text style={{fontSize : 11, color : '#5AC3DE', height : 15}}>Tanggal</Text>
                    <TextInput 
                        editable = {false}
                        style={{fontSize : 20, paddingVertical :7, paddingHorizontal : 0}} 
                        placeholder='Otomatis'
                        
                        />
                </View>
                <Text style={{fontSize : 11, color : '#5AC3DE', height : 15}}>Tanggal - Otomatis di isi dengan tanggal sekarang</Text>

            </View>

            <TouchableOpacity onPress={handleAdd} style={{paddingHorizontal : 25, paddingVertical : 20, alignItems :'center'}}>
                <Text style={{paddingVertical: 10 , backgroundColor :'blue', paddingHorizontal : 20, borderRadius : 10, color: 'white'}}>
                    Tambah
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HargaTambah;