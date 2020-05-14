import React, { useState, Fragment, useEffect } from 'react';
import { View, Text, TouchableOpacity,ScrollView, TextInput } from 'react-native';
import database from '@react-native-firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { readDataAPI } from '../../../redux/action';

const TestDatabase = ({navigation}) => {
    const {reducerRegister} = useSelector(state => state);4
    const {user_firebase} = reducerRegister;
    const {uid} = user_firebase;
    const reference = database().ref('/users/123');
    const dispatch = useDispatch();
    const readDataApi = (data) => dispatch(readDataAPI(data));

    const dataTampil = async () => {
        const readData = await readDataApi(user_firebase);
        if(readData){
            alert("berhasil");
            console.log(readData);
        }
    }

    const [data, setData]  = useState({
        userData : []
    });

    useEffect(()=>{
        dataTampil();
        return(()=> {
        dataTampil();

        })
    }, [data.userData])
    
    const handleClickTambah = () => {    
        database()
            .ref(`/${uid}`)
            .push({
                harga : '2000',
                tanggal : Date(),
            })
            .then(() => {
                console.log("berhasil menambahkan data")
                alert("berhasil menambahkan data")
            });
    }

    const handleClickUpdate = (id_click) => {    
        database()
            .ref(`/${uid}/${id_click}`)
            .set({
                harga : '2000',
                tanggal : Date(),
            })
            .then(() => {
                console.log("berhasil update data")
                alert("berhasil update data")
            });
    }
    // const dataUser = () => {
    //     database()
    //         .ref(`/${uid}/`)
    //         .on('value', snapshot => {
    //             // data.userData = Object.keys(snapshot.val());
    //             // data.userData.push(snapshot.val());
    //             Object.keys(snapshot.val()).map(key => {
    //                 data.userData.push({
    //                     id : key,
    //                     data : snapshot.val()[key]
    //                 })
    //             })
    //             // console.log('User data: ', snapshot.val());
    //         });
    // }
    const tampilkan = () => {
        console.log(data.userData);
    }


    if(user_firebase == null){
        navigation.navigate('Login');
    }else {
        return (
            <ScrollView>
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <TextInput placeholder="harga" style={{borderWidth: 0.2, width : '100%', marginVertical : 5}} />
                <TextInput placeholder="tanggal" style={{borderWidth: 0.2, width : '100%', marginVertical : 5}} />
                <TouchableOpacity style={{borderWidth: 1, paddingVertical : 10, paddingHorizontal : 20, marginVertical : 10, borderRadius : 5 }}>
                    <Text>
                        kirim
                    </Text>
                </TouchableOpacity>



                <TouchableOpacity  onPress={handleClickTambah} style={{borderWidth: 1, paddingVertical : 10, paddingHorizontal : 20, marginVertical : 10, borderRadius : 5 }}>
                    <Text style={{color:'green'}}>Tambah</Text>   
                </TouchableOpacity>
                {/* <TouchableOpacity  onPress={handleClickTambah} style={{borderWidth: 1, paddingVertical : 10, paddingHorizontal : 20, marginVertical : 10, borderRadius : 5 }}>
                    <Text style={{color:'green'}}>Update</Text>   
                </TouchableOpacity> */}

                {/* <TouchableOpacity  onPress={dataUser} style={{borderWidth: 1, paddingVertical : 10, paddingHorizontal : 20, marginVertical : 10, borderRadius : 5 }}>
                    <Text style={{color:'green'}}>Tampilkan</Text>   
                </TouchableOpacity> */}
                {/* <TouchableOpacity  onPress={tampilkan} style={{borderWidth: 1, paddingVertical : 10, paddingHorizontal : 20, marginVertical : 10, borderRadius : 5 }}>
                    <Text style={{color:'green'}}>Tampilkan</Text>   
                </TouchableOpacity> */}
                <View>
                    {
                        
                        // data.userData.length > 0 ? (
                            <Fragment>
                                {
                                    reducerRegister.data.map(data => {
                                        return (
                                            <View>
                                                <Text>{data.id}</Text>
                                                <Text>{data.data.tanggal}</Text>
                                                <Text>{data.data.harga}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </Fragment>
                        // ) : null
                    }
                </View>
                
            </View>
            </ScrollView>
            
        )
    }
}

export default TestDatabase;