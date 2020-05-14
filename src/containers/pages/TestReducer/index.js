import React, { Fragment, useEffect, useState } from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { functionA } from '../../../redux';

// reducer, combine reducer, menggunakan dispatch (type : nama_action_dilakukan di reducer) 
const TestReducer = () => {
    const globalState = useSelector(state => state);
    const dispatch = useDispatch();


    const [input, setInput] = useState({
        nama : '',
    })
    function onChangeInput(namaInput, value){
        setInput({
            ...input,
            [namaInput] : value
        })
        console.log('a');
        alert('a');
    }
    function click(input_nama, value_nama ){
        alert("berhasil");
        // dispatch
        // dispatch({type : "nama_actionnya"})
        dispatch(functionA(input_nama, value_nama));
    }
    function cetak(){
        alert("aaaa");
    }
    return (
        <Fragment>
        <View>
            {console.log(globalState.reducerRegister.nama)}
            <TextInput onChangeText={value => onChangeInput('nama', value )}/>
            <Text>{input.nama}</Text><Text>harusnya disitu</Text>
            <TouchableOpacity onPress={() => console.log("kirim data")}>
                <Text>ini data</Text>
            </TouchableOpacity>

            <Text style ={{marginTop : 10}}>
                {globalState.reducerRegister.nama}
            </Text>
            <TouchableOpacity style ={{marginTop : 10}} onPress={() => click('nama' , 'diganti')}>
                <Text>ok</Text>
            </TouchableOpacity>
        </View>
        </Fragment>
    )
}

export default TestReducer;