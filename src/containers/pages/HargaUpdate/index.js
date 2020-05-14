import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';
import TextTicker from 'react-native-text-ticker';

const HargaUpdate = () => {
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
                <Text style={{fontSize : 11, color : '#5AC3DE', height : 15}}>Tanggal - Otomatis di isi dengan tanggal sebelumnya</Text>

            </View>

            <TouchableOpacity style={{paddingHorizontal : 25, paddingVertical : 20, alignItems :'center'}}>
                <Text style={{paddingVertical: 10 , backgroundColor :'blue', paddingHorizontal : 20, borderRadius : 10, color: 'white'}}>
                    Update
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HargaUpdate;