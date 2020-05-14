import React, { Fragment, useState } from 'react';
import { Image, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';


const TestImage = () => {
    const [gambar, setGambar] = useState({
        namaGambar : null

    });

    
    const handleImage = () => {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
            
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            
                setGambar({
                    namaGambar: response,
                });
                console.log("hasil", gambar);
            }
        
        })
    }

    return (
        <Fragment>
            
            <View style={{flex : 1, alignItems : 'center', justifyContent :'center'}}>
                <Text style={{padding : 20, backgroundColor : 'blue'}} onPress={() => handleImage()}>Ambil</Text>
                <Text>ok</Text>
                {
                    gambar.namaGambar && (
                        <Image 
                            style={{height : 300,width : 300, backgroundColor : 'lightblue', padding : 20}} 
                            source={{uri : gambar.namaGambar.uri}}        
                        />
                    )
                    
                }
            </View>
        </Fragment>
    )
}

 export default TestImage;