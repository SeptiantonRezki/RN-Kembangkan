import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';


const ListBarang = ({navigation}) => {


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style= {{flexDirection : 'row', flexWrap : 'wrap',  backgroundColor: '#E0E0E0', justifyContent : 'center'}}>
            <View style={{width : '100%', height : 300, backgroundColor : '#add8e6', paddingHorizontal : 15, paddingTop : 15}}>
                <Text style={{color : 'white', lineHeight : 20, marginVertical : 5}}>Nama Toko</Text>
                <Text style={{color : 'white', borderRadius : 5, marginVertical : 5, padding : 10, backgroundColor : '#90ee90', lineHeight : 20, textAlign : 'justify'}}>Second Peace</Text>
                <Text style={{color : 'white', lineHeight : 20, marginVertical : 5}}>Deskripsi Toko</Text>
                <Text style={{color : 'white', borderRadius : 5, marginVertical : 5, padding : 10, backgroundColor : '#90ee90', lineHeight : 20, textAlign : 'justify'}}>Ini toko untuk melayani kafe agar bisa menjadi lebih mudah dan dapat dengan cepat mengakses informasi</Text>
                <TouchableOpacity style={{justifyContent : 'center', paddingVertical : 5, borderRadius : 5, backgroundColor : '#ff6961', marginHorizontal : 10, marginTop : 20}}>
                    <Text style={{textAlign: 'center'}}>Update</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: '#add8e6', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </TouchableOpacity> 

            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: '#add8e6', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View> 

            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: '#add8e6', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View>

            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: '#add8e6', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View>
            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: '#add8e6', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View>
            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: '#add8e6', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View>
            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: '#add8e6', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View>
            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: '#add8e6', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View>
            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: '#add8e6', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View>
            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: '#add8e6', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View>
             

        </View>
        </ScrollView>
    )
}

export default ListBarang;

const styles = StyleSheet.create({
    
    
});