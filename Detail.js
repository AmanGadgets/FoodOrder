//import liraries
import React, {} from 'react';
import { View, Text, StyleSheet,Dimensions,Image, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'




let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

// create a component
const App = () => {

    const navigation = useNavigation();

    return (

       <View style={styles.container}>

           <View style={styles.img}>
               <Image
               
                source={require('./assets/health.png')}
                style={{height:deviceHeight/1.95,width:deviceWidth/1,marginTop:40}}
               />
           </View>
       
           <View style={styles.buttons}>
               <Text style={{fontSize:35,fontWeight:'bold',textAlign:'center'}}>USER DETAILS</Text>
               <View style={styles.button}>
                   <TouchableOpacity style={styles.btn}
                     onPress={()=>navigation.navigate('Login')}
                   ><Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',marginTop:10,color:'white'}}>LOGIN</Text></TouchableOpacity>
                   <TouchableOpacity
                     onPress={()=>navigation.navigate('Register')}
                   style={styles.btn}><Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',marginTop:10,color:'white'}}>REGISTER</Text></TouchableOpacity>
               </View>
               
           </View>
           </View>  
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    btn:{
        
        width:deviceWidth/1.75,
        backgroundColor:'#F3AA43',
        alignSelf:'center',
        height:50,
        borderTopEndRadius:30,
        borderBottomLeftRadius:30,
        
        
    },
    
    button:{
        
        height:deviceHeight/5,
        display:'flex',
        justifyContent:'space-evenly',
        marginVertical:20
    },
    buttons:{
        flex:0.4,
        marginTop:20

    },
    img:{
       
        flex:0.6,
       
        height:deviceHeight/7
    }
    
   
});

//make this component available to the app
export default App;
