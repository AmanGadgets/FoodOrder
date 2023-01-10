//import liraries
import React, { Component,useState } from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions, TextInput,
    TouchableOpacity, Pressable
} from 'react-native';

import { useNavigation } from '@react-navigation/native' 




const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
// create a component
const Register = () => {

    const navigation = useNavigation();
     
    const [name,setName]=useState('');
    const [emai,setEmail]=useState('');
    const [mobile,setMobile]=useState();
    const [password,setPassword]=useState();

    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image

                    source={{ uri: 'https://thumbs.dreamstime.com/b/melting-pizza-logo-pizzeria-restaurant-cheese-icon-template-illustration-216647381.jpg' }}
                    style={{ height: deviceHeight / 3.5, }}


                />
            </View>

            <View style={styles.form}>

                <Text style={{ fontSize: 45, fontWeight: 'bold', textAlign: 'center', color: '#ffff' }}>Register</Text>

                <View style={styles.formData}>
                    <Text style={styles.formText}>Name</Text>
                    <TextInput
                        style={styles.formInput}
                        
                        keyboardType='ascii-capable'
                        value={name}
                        onChangeText={setName}
                    />

                    <Text style={styles.formText}>Email</Text>
                    <TextInput
                        style={styles.formInput}
                        
                        keyboardType='email-address'
                        value={emai}
                        onChangeText={setEmail}

                    />

                    <Text style={styles.formText}>MOBILE NO</Text>
                    <TextInput
                        style={styles.formInput}
                        
                        keyboardType='ascii-capable'
                        value={mobile}
                        onChangeText={setMobile}
                    />

                    <Text style={styles.formText}>password</Text>
                    <TextInput
                        style={styles.formInput}
                        value={password}
                        onChangeText={setPassword}
                        keyboardType='ascii-capable'
                    />

                    <TouchableOpacity style={{ marginTop: 40, borderWidth: 2, width: deviceWidth / 2.6, borderRadius: 5, backgroundColor: 'white', borderColor: '#ffff', height: 40 }} ><Text style={{ fontSize: 30, fontWeight: 'bold', color: '#F3AA43', textAlign: 'center' }}>Submit</Text></TouchableOpacity>

                    <View style={{display:'flex',flexDirection:'row',width:deviceWidth/1.5,justifyContent:'space-evenly',marginVertical:15}}>

                        <Text style={{marginTop:5,fontSize:17}}>Already have a account ?</Text>
                        <Pressable 
                         
                         onPress={()=>navigation.navigate('Login')}
                        
                        style={{borderBottomWidth:2,borderColor:'#ffff'}}><Text style={{fontSize:18,color:'brown'}}>Login here</Text></Pressable>
                    </View>
                </View>



            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    img: {
        flex: 0.3
    },
    form: {
        flex: 0.7,
        backgroundColor: '#F3AA43'
    },
    formData: {
        borderWidth: 3,
        height: deviceHeight / 1.75,
        width: deviceWidth / 1.1,
        alignSelf: 'center',
        marginVertical: 15,
        alignItems: 'center',
        borderColor: '#ffff',
        borderRadius: 15
    },
    formText: {
        marginVertical: 5,
        marginTop: 20,
        fontSize: 25,
        color:'brown'
    },
    formInput: {
        borderWidth: 1.75,
        width: deviceWidth / 1.75,
        textAlign: 'center',
        borderColor: '#ffff',
        borderRadius: 10,
        fontSize: 20,
        color: 'black'

    }

});

//make this component available to the app
export default Register;
