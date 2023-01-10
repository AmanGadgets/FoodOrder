//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'



const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

// create a component
const Item = () => {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>

            <View style={{marginVertical:5}}><Text style={{fontSize:60,marginTop:20,fontWeight:'bold',textAlign:'center',color:'#ffff'}}>OUR MENU</Text></View>
            <View style={styles.button}>

             <TouchableOpacity
              style={styles.btn}
             onPress={()=>navigation.navigate('Burger')}>
                 <Image source={{uri:'https://media.istockphoto.com/vectors/delicious-hot-burgers-vector-logo-with-lettering-fast-food-vector-vector-id881571926?k=20&m=881571926&s=170667a&w=0&h=NrsjzLPKIUSCg3ZQDDaR5kQvjIoQlwAZYT36ksAXv9Y='}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>Burger</Text>
             </TouchableOpacity>

             <TouchableOpacity
              style={styles.btn}
              onPress={()=>navigation.navigate('Pizza')}
             >
                 <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOcfA-QoRASbVrgMDmmdJTiE-6KL1peBJ6JWrCX4qs7xWPdFGMP1LI65-J_qs8ZZpaO4&usqp=CAU'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                 <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>Pizza</Text>
             </TouchableOpacity>

             <TouchableOpacity
              style={styles.btn}
              onPress={()=>navigation.navigate('Chowmein')}
             >
                 <Image source={{uri:'https://image.shutterstock.com/image-photo/eating-chinese-chicken-chow-mein-260nw-1526700560.jpg'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>Chowmein</Text>
             </TouchableOpacity>

             <TouchableOpacity
              style={styles.btn}
              onPress={()=>navigation.navigate('Icecream')}
             >
                 <Image source={{uri:'https://c4.wallpaperflare.com/wallpaper/335/21/262/ball-cream-food-ice-wallpaper-preview.jpg'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>Ice cream</Text>
             </TouchableOpacity>

             <TouchableOpacity
              style={styles.btn}
             >
                 <Image source={{uri:'https://topchop.in/storage/products/September2021/eDYGXINUYNqLvaMBHC2L.jpg'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>Momos</Text>
             </TouchableOpacity>

             <TouchableOpacity
              style={styles.btn}
             >
                 <Image source={{uri:'https://images.news18.com/ibnkhabar/uploads/2021/06/chilli-potato.jpg'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>chili potato</Text>
             </TouchableOpacity>


             <TouchableOpacity
              style={styles.btn}
             >
                 <Image source={{uri:'https://nishkitchen.com/wp-content/uploads/2018/11/Chicken-Lollipop-3B.jpg'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>chicken lolipop</Text>
             </TouchableOpacity>


             <TouchableOpacity
              style={styles.btn}
             >
                 <Image source={{uri:'https://www.thestatesman.com/wp-content/uploads/2019/11/gravy.jpg'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>Soya chap</Text>
             </TouchableOpacity>


             <TouchableOpacity
              style={styles.btn}
             >
                 <Image source={{uri:'https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375.jpg'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>Mancurian</Text>
             </TouchableOpacity>


             <TouchableOpacity
              style={styles.btn}
             >
                 <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-YVem8B_mo-ta740cNyXjXN6M41unRSnLQ&usqp=CAU'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>Fried rice</Text>
             </TouchableOpacity>

             <TouchableOpacity
              style={styles.btn}
             >
                 <Image source={{uri:'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>Butter Chicken</Text>
             </TouchableOpacity>

             <TouchableOpacity
              style={styles.btn}
             >
                 <Image source={{uri:'https://www.oliviascuisine.com/wp-content/uploads/2016/08/tiramisu-milkshake-hero-735x1103.jpg'}}
                 style={{height:100,width:110,borderRadius:50}}
                 />
                  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15}}>Milk Shakes</Text>
             </TouchableOpacity>


              
             

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F3AA43'
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:15,
        flexWrap:'wrap'
    },
    btn:{
        marginVertical:15
    }
   
});

//make this component available to the app
export default Item;
