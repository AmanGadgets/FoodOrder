//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,ImageBackground } from 'react-native';




const data = [
  {
    id: 1,
    img: { uri: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/burger-recipe-3.jpg' },
    name: 'Veg Burger',
    price:'50'
  },
  {
    id: 2,
    img: { uri: 'https://www.boldsky.com/img/2014/05/19-eggburger.jpg' },
    name: 'Egg Burger',
    price:'89'
    
  },
  {
    id: 3,
    img: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPfkPZjoYP4ExdjDR_n2IAWDKBJUn-8-OMg&usqp=CAU' },
    name: 'Chicken burger',
    price:'129'
  },
  {
    id: 4,
    img: { uri: 'https://aubreyskitchen.com/wp-content/uploads/2021/01/frozen-french-fries-in-air-fryer-500x500.jpg' },
    name: 'French friess',
    price:'50'
  },
  {
    id: 5,
    img: { uri: 'https://mcdonaldsblog.in/wp-content/uploads/2017/07/Coke.jpg' },
    name: 'Cock',
    price:'40'
  }
];

// create a component
const Burger = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.75, backgroundColor: 'red' }}>
        <ImageBackground source={{ uri: 'https://consumerist.com/consumermediallc.files.wordpress.com/2014/10/10606272_1545757252306390_3143762249963573524_n.jpg' }} style={{ height: '100%', width: '100%',opacity:0.90,}} resizeMode='cover'>  
          {/* <View style={{display:'flex',justifyContent:'flex-end',flex:1}}>
            <Text style={{color:'white',fontSize:50,fontWeight:'bold',textAlign:'center',marginBottom:50,}}>BOOK YOUR ORDER</Text>
          </View> */}
        </ImageBackground>
      </View>

      <View style={{ flex: 1.25,backgroundColor:'#F6AB2C'}}>

        <FlatList data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>    
             <View style={styles.card}>
                <Image source={item.img} style={{ height: 100, width: 100 }} />
                <View style={styles.textButton}>
                  <Text style={{fontSize:25,fontWeight:'bold',color:'#FFFF'}}>{item.name}</Text>
                  <Text style={{fontSize:20,fontWeight:'normal'}}>₹{item.price}</Text>
                  <TouchableOpacity style={styles.button}><Text style={{fontSize:15}}>Add Cart</Text></TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        >

        </FlatList>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  cardContainer:{
    width: '100%', backgroundColor: '#F6C74C', display: 'flex', alignItems: 'center'

  },

  card: {
    flexDirection: 'row', width: '90%', marginVertical: 10, shadowColor: 'grey', 
    shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.90, elevation: 9, backgroundColor: '#F6B34C',
    justifyContent: 'space-around', alignItems: 'center', borderRadius: 10
  },

  button:{
    
    height:30,
    width:80,
    borderRadius:10,
    display:'flex', justifyContent:'center',alignItems:'center',
    backgroundColor:'white'
  },
  textButton:{
    display:'flex',
    
    height:80,
    width:150,justifyContent:'center',
    alignItems:'center',
    
  }


});

//make this component available to the app
export default Burger;
