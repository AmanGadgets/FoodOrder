//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,ImageBackground } from 'react-native';




const data = [
  {
    id: 1,
    img: { uri: 'https://greenbowl2soul.com/wp-content/uploads/2019/11/veg-chowmein-500x375.jpg' },
    name: 'Veg Chowmein',
    price:'50'
  },
  {
    id: 2,
    img: { uri: 'https://i.ytimg.com/vi/b3dMfLZayt0/maxresdefault.jpg' },
    name: ' Chowmein',
    price:'89'
    
  },
  {
    id: 3,
    img: { uri: 'https://www.easycookingwithmolly.com/wp-content/uploads/2017/01/how-to-make-chicken-lo-mein-recipe.jpg' },
    name: ' Chowmein',
    price:'129'
  },
  {
    id: 4,
    img: { uri: 'https://simply-delicious-food.com/wp-content/uploads/2016/07/Easy-vegetable-chow-mein-4-480x270.jpg' },
    name: 'Chicken',
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
const Chowmein = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.75, backgroundColor: 'red' }}>
        <ImageBackground source={{ uri: 'https://media.istockphoto.com/photos/stir-fry-noodles-with-vegetables-and-beef-in-black-bowl-slate-close-picture-id1215178290?k=20&m=1215178290&s=612x612&w=0&h=toGJoOy1MgavBYUVLJbw8CEYL7X1yEUIdTV28HvJ72Q=' }} style={{ height: '100%', width: '100%',opacity:0.95,}} resizeMode='cover'>  
         
          
        </ImageBackground>
      </View>

      <View style={{ flex: 1.25,backgroundColor:'#DC1C13'}}>

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
    width: '100%', backgroundColor: '#FFFF', display: 'flex', alignItems: 'center',

  },

  card: {
    flexDirection: 'row', width: '90%', marginVertical: 10, shadowColor: 'black', 
    shadowOffset: { width: 10, height:10}, shadowOpacity: 0.30, elevation: 10, backgroundColor: '#EBA628',
    justifyContent: 'space-around', alignItems: 'center', borderRadius: 10,opacity:0.90
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
export default Chowmein;
