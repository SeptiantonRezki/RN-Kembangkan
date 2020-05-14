import React, {useEffect, Fragment} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import TextTicker from 'react-native-text-ticker';

import { useDispatch, useSelector } from 'react-redux';
import { readDataAPI, userRegisterDataApi } from '../../../redux/action';

const Home = ({navigation}) => {
    const {reducerRegister} = useSelector(state => state);
    const {user_firebase} = reducerRegister;
    const {uid} = user_firebase;
    
    // const {dataUmum} = reducerRegister;
    const dispatch = useDispatch();
    const readDataApi = (data) => dispatch(readDataAPI(data));
    // const userRegisterApi = (data) => dispatch(userRegisterDataApi(data));
    // console.log(user_firebase);

    

    const dataTampil = async () => {

        const readData = await readDataApi(user_firebase);
        if(readData){
            // console.log(readData);
        }
        else {
            alert('data kosong');
        }
    }
    // const kirimDataUser = async () => {
    //     const resUser = await userRegisterApi(dataUmum);
    //     if(resUser){
    //         alert("ok");   
    //     }
    // }

    useEffect(()=>{
        dataTampil();

        // kirimDataUser();
        // console.log(reducerRegister);
    }, [reducerRegister.data]);


        return (
            <View style={{flex : 1}}>
                <Text style={{textAlign:'center', fontSize :20, fontWeight : 'bold', backgroundColor:'blue', color :'white', paddingVertical : 10}}>Dashboard</Text>

                <View style = {{flex : 0.5, justifyContent : 'center'}}>
                    <Text style={{textAlign: 'center', fontSize : 12}}>
                        PENDAPATAN
                    </Text>
                    <Text style={{textAlign: 'center', fontSize : 30, fontWeight : 'bold'}}>
                        Rp. 1.000.000
                    </Text>
                    {/* <Text style={{textAlign: 'center', fontSize : 10, paddingVertical : 20 , }}>Detail</Text> */}
                </View>
                <View style={{flex  : 2,}}>
                    
                    <View style={{justifyContent:'center', alignItems : 'center', backgroundColor : 'blue', paddingVertical : 5}}>
                        <TouchableOpacity 
                            onPress={()=> navigation.navigate('Harga Tambah')}
                            style={{justifyContent:'center', alignItems : 'center'}}>
                            <Image
                                source={require('../../../assets/icon/plus.png')}
                                style ={{width : 40, height : 40, backgroundColor : 'red', borderRadius : 100}}
                                />
                            <Text 
                                style={{textAlign : 'center', fontSize : 10, color: 'white'}}>Tambah data</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingHorizontal: 10, paddingTop :10}}>
                        <View style={{flexDirection : 'row', marginVertical : 5}}>
                            <View style={{width : '78%', borderBottomWidth : 1}}>
                                <TextTicker
                                    style={{ fontSize: 12, width : '80%', paddingVertical : 10}}
                                    duration={6000}
                                    loop
                                    bounce
                                    repeatSpacer={50}
                                    marqueeDelay={1000}
                                >Saat data kosong, dan dilakukan tambah data, dimohon untuk login kembali agar data bisa keluar</TextTicker>
                            </View>
                            <TouchableOpacity style={{width : '20%', justifyContent : 'center', backgroundColor : 'blue', borderRadius : 5, marginLeft : '2%'}}>
                                <Text style={{textAlign  : 'center'}} >lihat</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <ScrollView showsVerticalScrollIndicator ={false}>
                        
                        {reducerRegister.data.length > 0 ? (
                            
                            <Fragment>
                                    {
                                        reducerRegister.data.map(data => {
                                            console.log(data);
                                            return (
                                                <View style={{flexDirection : 'row', padding : 5, backgroundColor : 'green', marginVertical : 5}}>
                                                    <View style={{width : '20%', backgroundColor: 'red', paddingVertical : 3, paddingHorizontal : 15, borderRadius: 5}}>
                                                        <Text style={{fontWeight: 'bold', lineHeight: 13, fontSize: 12, textAlign : 'center'}}>{data.data.bulan}</Text>
                                                        <Text style={{fontWeight: 'bold', fontSize : 17, textAlign : 'center', lineHeight: 20}}>{data.data.tanggal}</Text>
                                                        <Text style={{fontSize: 10, lineHeight:12, textAlign : 'center'}}>{data.data.tahun}</Text>
                                                    </View>
                                                    <View style={{width : '60%',paddingHorizontal : 20, }}>
                                                        <Text style ={{fontSize : 11}}>Pendapatan</Text>
                                                        <Text style={{fontSize: 20, fontWeight : 'bold'}}>Rp. {data.data.harga}</Text>
                                                    </View>
                                                    <TouchableOpacity onPress={()=> navigation.navigate('Harga Update')} style={{width : '20%', paddingHorizontal : 10, alignItems :'center', justifyContent :'center'}}>
                                                        <Image
                                                        source={require('../../../assets/icon/update.png')}
                                                        style ={{width : 30, height : 30, backgroundColor : 'red', borderRadius : 100}}
                                                        />
                                                        <Text style={{fontSize: 11, lineHeight : 13}}>Edit</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                
                                                // <View>
                                                //     <Text>{data.id}</Text>
                                                //     <Text>{data.data.tanggal}</Text>
                                                //     <Text>{data.data.harga}</Text>
                                                // </View>
                                            )
                                        })
                                    }
                            </Fragment>
                            ) : 
                            <View>
                                <Text>Data Kosong</Text>    
                            </View>
                            }
                            <View style={{height: 300}}>

                            </View>
                        </ScrollView>
                        
                    </View>
                </View>
                <View style={{flexDirection : 'row', height : 60, backgroundColor : 'lightblue'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Profile')} style={{flex : 1, justifyContent: 'center', alignItems : 'center'}}>
                        <Image
                            source={require('../../../assets/icon/profile.png')}
                            style ={{width : 40, height : 40, backgroundColor : 'red', borderRadius : 5}}
                            />
                        <Text style={{fontSize : 10}}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{flex : 1, justifyContent: 'center', alignItems : 'center', position : 'relative' , top : -20}}>
                        <Image
                            source={require('../../../assets/icon/tabel.png')}
                            style ={{width : 40, height : 40, backgroundColor : 'red', borderRadius : 100}}
                            />
                        <Text style={{fontSize : 10}}>Tabel</Text>

                    </TouchableOpacity>
                    <View style={{flex : 1, justifyContent: 'center', alignItems : 'center'}}>
                        <Image
                            source={require('../../../assets/icon/signout.png')}
                            style ={{width : 40, height : 40, backgroundColor : 'red', borderRadius : 5}}
                            />
                        <Text style={{fontSize : 10}}>Keluar</Text>

                    </View>
                </View>

            </View>
        )
}

export default Home;
