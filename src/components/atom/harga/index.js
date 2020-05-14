import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import TextTicker from 'react-native-text-ticker';

const KontenHarga = () => {
    return (
        <ScrollView style={{flex : 5, marginVertical : 10, paddingHorizontal : 20}} showsVerticalScrollIndicator={false}>
                <View style= {{flex : 1 , flexDirection :'row', flexWrap : 'wrap', backgroundColor : 'white', borderRadius : 5}}>

                    <View style={{width : '30%', alignItems :'center', justifyContent :'center', padding : 10, borderBottomWidth : 1}}>
                        <Text style={{color : 'black'}}>Bulan</Text> 
                    </View>
                    
                    <View style={{width : '40%', alignItems :'center', justifyContent :'center', padding : 10, borderBottomWidth : 1, borderRightWidth : 1, borderLeftWidth : 1, }}>
                        <Text style={{color : 'black'}}>Pemasukan</Text> 
                    </View>
                    <View style={{width : '30%',  padding : 5, alignItems :'center', justifyContent :'center', borderBottomWidth : 1,}}>
                        <Text style={{color : 'black'}}>Rincian</Text> 
                    </View>
                    
                    <DaftarListBulan />
                    
                    
                    <DaftarListBulan />
                    
                    <DaftarListBulan />
                    
                    <DaftarListBulan />
                    
                    <DaftarListBulan />
                    
                    
                    <DaftarListBulan />
                    
                    <DaftarListBulan />
                    
                    
                    <DaftarListBulan />
                    
                    <DaftarListBulan />
                    
                    
                    <DaftarListBulan />
                    
                    <DaftarListBulan />
                    
                    
                    <DaftarListBulan />
                    <View style={{flexDirection : 'row'}}>
                        <View style={{width : '30%',  alignItems :'center', justifyContent :'center', padding : 10,}}>
                        </View>
                        
                        <View style={{width : '40%',  padding : 10,  alignItems :'center', justifyContent :'center',}}>
                        </View>
                        <View style={{width : '30%',  padding : 5, alignItems :'center', justifyContent :'center',}}>

                        </View>
                    </View>

                </View>

        </ScrollView>
    )
}


const DaftarListBulan = () => {
    return (
        <View style={{flexDirection : 'row'}}>
            <View style={{width : '30%',  alignItems :'center', justifyContent :'center', padding : 10, borderBottomWidth : 1,}}>
                <Text style={{color : 'black'}}>Januari</Text> 
            </View>
            
            <View style={{width : '40%',  padding : 10, borderBottomWidth : 1, alignItems :'center', justifyContent :'center',}}>
                <Text style={{color : 'black'}}>1.200.000</Text> 
            </View>
            <View style={{width : '30%',  padding : 5, alignItems :'center', justifyContent :'center',borderBottomWidth : 1,}}>
                <TouchableOpacity style={{backgroundColor : 'green', padding : 10, borderRadius : 5}}>
                    <Text style={{color : 'white'}}>
                        RINCIAN
                    </Text> 
                </TouchableOpacity>                        
            </View>
        </View>
    )
}

export default KontenHarga;