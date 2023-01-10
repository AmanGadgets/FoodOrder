//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,TextInput
       ,Image,Dimensions,TouchableOpacity,Pressable,KeyboardAvoidingView } from 'react-native';
 import { useNavigation } from '@react-navigation/native' 


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


// create a component
const Login = () => {

    const navigation = useNavigation();

    const [name, onChangeName] = React.useState("");
  const [password, onChangePassword] = React.useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image
                 
                 source={require('./assets/pizza.png')}
                 style={{height:deviceHeight/2.5,width:deviceWidth/1,marginTop:deviceHeight/90}}
                 resizeMode='contain'
                 
                
                
                />
            </View>
            <View style={styles.heding}>
                <Text style={styles.txt}>LOGIN</Text>
            </View>
            <View style={styles.box}>
                 <Text style={styles.text}>USER NAME</Text>
                 <KeyboardAvoidingView style={{toLocaleString}}>
                 <TextInput
                    style={{borderWidth:1,width:deviceWidth/1.2,padding:5,textAlign:'center',borderRadius:15}}
                   placeholder='NAME'
                   value={name}
                   onChangeText={onChangeName}
                 />
                 <Text style={styles.text}>PASSWORD</Text>
                 <TextInput
                   style={{borderWidth:1,width:deviceWidth/1.2,padding:5,textAlign:'center',borderRadius:15}}
                  placeholder='password'
                  value={password}
                  secureTextEntry
                  onChangeText={onChangePassword}
                 />
                 </KeyboardAvoidingView>

                 <View style={{marginVertical:50}}>
                    <TouchableOpacity 
                     onPress={()=>navigation.navigate('Item')}
                    style={styles.button}><Text style={{fontSize:30,fontWeight:'bold'}}>Login</Text></TouchableOpacity>
                 </View>

                 <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:deviceWidth/2.2}}>
                     <Text>Do not have an account ?</Text>
                     <Pressable
                     onPress={()=>navigation.navigate('Register')}
                     style={{borderBottomWidth:1}}><Text style={{color:'red'}}>Register</Text></Pressable>
                 </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F3AA43',
        
        
    },
    txt:{
        fontSize:deviceHeight/15,
        fontWeight:'bold',
        color:'white',
        marginVertical:1
        
    },
    heding:{
       display:'flex',
       alignItems:'center',
      
       

    },
    box:{
        // borderWidth:2,
        height:deviceHeight/2.05,
        borderTopEndRadius:30,
        backgroundColor:'white',
        borderTopStartRadius:30,
        width:deviceWidth/1.04,
        marginLeft:8,
        display:'flex',
        alignItems:'center',
        marginTop:10,
        borderRadius:30

        
    },
    text:{
       marginVertical:15,
       fontSize:30,
       fontWeight:'bold',
       textAlign:'center'
    },
    input:{
        borderWidth:1
    },
    img:{
        
        height:deviceHeight/2.9
    },
    button:{
        borderWidth:2,
        height:55,
        width:deviceWidth/1.7,
        backgroundColor:'#FFD54A',
        borderRadius:20,
        borderColor:'orange',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    }

});

//make this component available to the app
export default Login;
