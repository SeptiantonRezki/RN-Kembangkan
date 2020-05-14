import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';





export const functionA = (input_nama, value_nama) => {
    return {type : "LOGIN", value_nama : value_nama, input_nama : input_nama};
}

export const registerUserAPI = ({email, password, nama, kontak}) => (dispatch) => {
    return new Promise((resolve, reject) => {
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                // const data = {
                //     uid : res.user.uid,
                //     nama : nama,
                //     kontak : kontak, 
                //     email : email,
                // }
                // dispatch({type : "CHANGE_DATAUMUM", value : data})
                alert('User account created & signed in!');
                
                resolve(true);
            })
            .catch(function(error) { 
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                    return;

                }
            
                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                    return;

                }
                if (error.code === 'auth/unknown') {
                    alert('Mohon Aktifkan koneksi Anda');
                    return;

                }
                if(error.code) {
                    alert("Masukkan data anda dengan benar");
                    return;
                }
                reject(false);
            })
    })
}

export const loginUserAPI = ({email, password}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                const userData = {
                    email : res.user.email,
                    emailVerified : res.user.emailVerified,
                    uid : res.user.uid,
                }
                dispatch({type : 'CHANGE_USER', value : userData})
                alert('berhasil login');
                resolve(userData);
            }).catch(function(error) {
                if (error.code === 'auth/user-not-found') {
                    alert('Anda belum register');
                    return;
                    

                }
                if (error.code === 'auth/wrong-password') {
                    alert('Password Anda Salah');
                    return;
                }
                if (error.code === 'auth/unknown') {
                    alert('Mohon Aktifkan koneksi Anda');
                    return;
                }
                // if (error.code === 'auth/invalid-email') {
                //     alert('That email address is invalid!');
                // }
                if(error.code) {
                    alert("Masukkan data anda dengan benar");
                    return;
                }
                
                reject(false);
            });
    })
}

export const userRegisterDataApi = ({uid, nama, kontak, email}) => (dispatch) => {
    return new Promise((resolve) => {
        database()
            .ref(`/`)
            .push({
                uid : uid
            })
            .ref(`/${uid}/`)
            .push({
                nama : nama,
                kontak : kontak,
                email : email,
            })
            .then(() => {
                const data = {
                    nama : nama,
                    kontak : kontak, 
                    email : email,
                }
                dispatch({type : 'CHANGE_DATAUMUM', value : data});
                resolve(true);
            });
    });
}
export const addDataAPI = ({harga, uid}) => (dispatch) => {
    var date = new Date();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();

    return new Promise((resolve) => {
        database()
            .ref(`/${uid}`)
            .push({
                harga : harga,
                tanggal : day,
                bulan : month,
                tahun : year 
            })
            .then(() => {
                resolve(true);
            });
    });
} 

export const readDataAPI = ({uid}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        database()
            .ref(`/${uid}/`)
            .once('value', snapshot => {
                const data = [];
                if(snapshot.val()){
                    Object.keys(snapshot.val()).map(key => {
                        
                        data.push({
                            id : key,
                            data : snapshot.val()[key]
                        })
                    })
                    dispatch({type : 'DATA_CHANGE', value : data});
                    resolve(snapshot.val());
                    return;
                }
                return;
            })
            
    });
} 