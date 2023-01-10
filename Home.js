//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions,TouchableOpacity ,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native'


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


// create a component
const Home = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={{}}
            >

           <ImageBackground
             source={{uri:'https://images-platform.99static.com//VoV6v-j5sWLP8KD541NQpYr__7I=/0x0:1890x1890/fit-in/500x500/99designs-contests-attachments/90/90624/attachment_90624725'}}
             style={{height:deviceHeight,width:'100%',flex:1,justifyContent:'flex-end',marginVertical:-70}}
             resizeMode='contain'
           >
               <View style={{justifyContent:'center',alignSelf:'center',width:deviceWidth,backgroundColor:'white',height:deviceHeight/4,marginBottom:80}}>
               <TouchableOpacity onPress={()=>navigation.navigate('Detail')}
                style={{height:50,width:deviceWidth/2,backgroundColor:'#F3AA43',alignSelf:'center',borderRadius:20,borderColor:'red',justifyContent:'center'}}
               >
                   <Text style={{textAlign:'center',fontSize:deviceHeight/35,fontWeight:'bold',color:'white'}} >ORDER NOW</Text>
               </TouchableOpacity>
               </View>
               </ImageBackground> 
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
        backgroundColor:'#ffff'
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the Home
export default Home;
