import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import TextTicker from 'react-native-text-ticker';

const Profile = ({navigation}) => {
    
    return (
        <View style={{flex : 1}}>
                <Text style={{textAlign:'center', fontSize :20, fontWeight : 'bold', backgroundColor:'blue', color :'white', paddingVertical : 10}}>Profile</Text>
                <View style = {{flex : 1, justifyContent : 'center', borderBottomWidth : 0.2}}>
                    <View style={{flex : 1, justifyContent: 'center', alignItems : 'center'}}>
                        <Image
                            source={require('../../../assets/icon/account.png')}
                            style ={{width : 120, height : 120,  borderRadius : 100}}
                            />
                        <Text style={{fontSize : 10}}>Sample Foto</Text>
                    </View>

                </View>
                <View style={{flex  : 2, paddingHorizontal : 25, paddingVertical : 20}}>
                    <View style={{marginBottom : 10}}>
                        <Text style={{fontSize : 11}}>Email</Text>
                        <Text style={{fontSize : 20, paddingVertical :5}}>Saeanton398@gmail.com</Text>
                    </View>
                    <View style={{marginBottom : 10}}>
                        <Text style={{fontSize : 11, height : 15}}>Deskripsi</Text>
                        <Text style={{fontSize : 20, paddingVertical :5}}>Suka membaca</Text>
                    </View>

                    <View style={{marginBottom : 10, borderBottomWidth : 0.17}}>
                        <Text style={{fontSize : 11, color : '#5AC3DE', height : 15}}>Nama</Text>
                        <Text style={{fontSize : 20, paddingVertical :7}}>Septianton Rezki Rahmatulloh</Text>
                        <Text style={{fontSize : 20, paddingVertical :7}}>Aji Irvansyah</Text>
                    </View>
                    <View style={{marginBottom : 10, borderBottomWidth : 0.17}}>
                        <Text style={{fontSize : 11, color : '#5AC3DE', height : 15}}>Kontak</Text>
                        <Text style={{fontSize : 20, paddingVertical :7}}>089666341353</Text>
                    </View>
                    
                </View>


                <View style={{flexDirection : 'row', height : 60, backgroundColor : 'lightblue'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Profile')} style={{flex : 1, justifyContent: 'center', alignItems : 'center', position : 'relative' , top : -20}}>
                        <Image
                            source={require('../../../assets/icon/profile.png')}
                            style ={{width : 40, height : 40, backgroundColor : 'red', borderRadius : 5}}
                            />
                        <Text style={{fontSize : 10}}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{flex : 1, justifyContent: 'center', alignItems : 'center', }}>
                        <Image
                            source={require('../../../assets/icon/tabel.png')}
                            style ={{width : 40, height : 40, backgroundColor : 'red', borderRadius : 100}}
                            />
                        <Text style={{fontSize : 10}}>Tabel</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{flex : 1, justifyContent: 'center', alignItems : 'center'}}>
                        <Image
                            source={require('../../../assets/icon/signout.png')}
                            style ={{width : 40, height : 40, backgroundColor : 'red', borderRadius : 5}}
                            />
                        <Text style={{fontSize : 10}}>Keluar</Text>

                    </TouchableOpacity>
                </View>

            </View>
    )
}

export default Profile;
