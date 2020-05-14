import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';

const Update = () => {
    const onChange = () => {
        alert("aku");
    }

    useEffect(() => {
        console.log("aku");
        
    
    });

    
    return (
        <ScrollView style={{flex : 1}}>
            <View style={{flex : 1, position : 'relative', marginVertical : 10}}>
                <View style={{justifyContent:'center', alignItems : 'center',width : 100, height : 100, borderWidth : 1, marginBottom : 10, marginHorizontal : 10}}>
                    <Text>
                        Gambar
                    </Text>
                </View>
                <View style= {{width : '100%', marginBottom : 10 ,flexDirection : 'row', borderTopWidth : 1, borderBottomWidth : 1}}>
                    <TextInput style={{flex: 5, paddingHorizontal : 10, paddingVertical : 5}} placeholder= "Nama Produk"/>
                    <View style={{flex :1, justifyContent: 'center', alignItems :'center', backgroundColor : 'green'}}>
                        <Text >100</Text>
                    </View>
                </View>
                <View style= {{width : '100%', marginBottom : 10 ,flexDirection : 'row', borderTopWidth : 1, borderBottomWidth : 1}}>
                    <TextInput style={{flex: 1, paddingHorizontal : 10, paddingVertical : 5, maxHeight : 100}} placeholder= "Deskripsi" multiline={true}/>
                </View>

                <View style={{width : '100%', flexDirection : 'row', paddingHorizontal : 10, paddingVertical : 15, backgroundColor : 'green', marginBottom : 10}}>
                    <View style={{flex : 1, justifyContent :'center',}}>
                        <Text>
                            icon
                        </Text> 
                    </View>
                    <View style={{flex : 4, justifyContent :'center', }}>
                        <Text>
                            Stock
                        </Text>
                    </View>
                    <View style={{flex : 2, justifyContent :'center',}}>
                        <TextInput style={{textAlign: 'right', padding : 0}} keyboardType='number-pad' placeholder='Atur Stok'/>

                    </View>
                </View>

                <View style={{width : '100%', flexDirection : 'row', paddingHorizontal : 10, paddingVertical : 15, backgroundColor : 'green', marginBottom : 10}}>
                    <View style={{flex : 1, justifyContent :'center',}}>
                        <Text>
                            icon
                        </Text> 
                    </View>
                    <View style={{flex : 4, justifyContent :'center',}}>
                        <Text>
                            Harga
                        </Text>
                    </View>
                    <View style={{flex : 1, justifyContent :'center',}}>
                        <TextInput style={{textAlign: 'right', padding : 0}} onChange={() => handleNilai('a')} keyboardType='number-pad' placeholder='Atur Harga'/>
                    </View>
                </View>

                <View style={{width : '100%', paddingHorizontal : 10}}>
                    <TouchableOpacity onPress={onChange} style={{paddingVertical : 15, backgroundColor : 'blue', borderRadius : 5}}>
                        <Text style={{textAlign:'center', color : 'white'}}>Simpan</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default Update;
