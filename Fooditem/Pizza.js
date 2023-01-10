//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,ImageBackground } from 'react-native';




const data = [
  {
    id: 1,
    img: { uri: 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/bew7n0ulnbnvbbsoz8hi' },
    name: 'Veg Pizza',
    price:'50'
  },
  {
    id: 2,
    img: { uri: 'https://marketu.app/wp-content/uploads/2021/04/Roasted-Red-Pepper-and-Red-Onion-Pizza-8.jpg' },
    name: 'Onion Pizza',
    price:'89'
    
  },
  {
    id: 3,
    img: { uri: 'https://img.taste.com.au/4ioiniTx/taste/2016/11/easy-cheesy-salami-and-mushroom-pizza-97042-1.jpeg' },
    name: 'Mashrom Pizza',
    price:'129'
  },
  {
    id: 4,
    img: { uri: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg' },
    name: 'Chicken Pizza',
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
const Pizza = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.75, backgroundColor: 'red' }}>
        <ImageBackground source={{ uri: 'https://media.istockphoto.com/photos/delicious-italian-pizza-picture-id1031362212?k=20&m=1031362212&s=612x612&w=0&h=8AeA3Zbb8e7IEVdinEZUQo8hZqu9-ti6gW-qbs5fP64=' }} style={{ height: '100%', width: '100%',opacity:0.80,}} resizeMode='cover'>  
          {/* <View style={{display:'flex',justifyContent:'flex-end',flex:1}}>
            <Text style={{color:'white',fontSize:50,fontWeight:'bold',textAlign:'center',marginBottom:50,}}>BOOK YOUR ORDER</Text>
          </View> */}

          <View style={{flex:1,justifyContent:'flex-end'}}><Text style={{color:'white',fontSize:30,fontWeight:'bold',marginBottom:18}}>A pizza a day makes you go hooray!</Text></View>
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
    shadowOffset: { width: 10, height:10}, shadowOpacity: 0.30, elevation: 10, backgroundColor: '#7D4935',
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
export default Pizza;
