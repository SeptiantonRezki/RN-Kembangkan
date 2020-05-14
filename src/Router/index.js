import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { 
    HargaTambah, HargaUpdate,
    Profile , Add, Home , Login, Register, Update, ListBarang, ListHarian, ListTanggal ,ListBulanan, 

    TestHalaman, TestImage, TestReducer, TestFirebase, TestHalamanNotLogin, TestDatabase

} from '../containers/pages';
import {useSelector } from 'react-redux';



const Stack = createStackNavigator();
const Router = () => {
    const {reducerRegister} = useSelector(state => state);
    
    return (
        <Stack.Navigator>

            {reducerRegister.login ? (
            <>
                 <Stack.Screen name ='Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen 
                    name ='Harga Update' 
                    component={HargaUpdate} 
                    options={{
                        title: 'Harga Update',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                
                
                <Stack.Screen 
                    name ='Harga Tambah' 
                    component={HargaTambah} 
                    options={{
                        title: 'Harga Tambah',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                
                <Stack.Screen name ='Profile' component={Profile} options={{headerShown: false}}/>
                {/* halaman yang bisa di akses sebelum login */}
                {/* Komponen Test */}
                {/* <Stack.Screen name ='Home' component={Home} options={{headerShown: false}}/> */}
                <Stack.Screen name ='Test Halaman' component={TestHalaman} options={{headerShown: false}}/>
                <Stack.Screen name ='Test Firebase' component={TestFirebase}/>
                <Stack.Screen name ='Test Image' component={TestImage}/>
                <Stack.Screen name ='Test Reducer' component={TestReducer} options={{headerShown: false}}/>
                <Stack.Screen name ='Test Database' component={TestDatabase} options={{headerShown: false}}/>
                
                {/* Komponen Penyambut */}
                {/* <Stack.Screen name ='Profile' component={Profile} options={{headerShown: false}}/> */}

                {/* Produk */}
                <Stack.Screen name ='Tambah Produk' component={Add}/>
                <Stack.Screen name ='Ubah Produk' component={Update} options={{headerShown: false}}/>
                <Stack.Screen name ='List Barang' component={ListBarang}/>
                
                {/* Komponen List */}
                <Stack.Screen name ='List Bulanan' component={ListBulanan} options={{headerShown: false}}/>
                <Stack.Screen name ='List Tanggalan' component={ListTanggal} options={{headerShown: false}}/>
                <Stack.Screen name ='List Harian' component={ListHarian} options={{headerShown: false}}/></>
            ) : (
            <>
            {/* halaman yang bisa di akses sesudah login */}
                {/* <Stack.Screen name ='Test Halaman Sebelum Login' component={TestHalamanNotLogin}/> */}
               
                
                <Stack.Screen name ='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name ='Register' component={Register} options={{headerShown: false}}/>
            
            </>
            )
            }

            
        </Stack.Navigator>
    )
}

export default Router;
