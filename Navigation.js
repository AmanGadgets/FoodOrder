//import liraries
import React, { Component } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Detail from './Detail';
import Login from './Login';
import Register from './Register';
import Item from './Item';
import Burger from  './Fooditem/Burger'
import Pizza from './Fooditem/Pizza';
import Chowmein from './Fooditem/Chowmein';
import Icecream from './Fooditem/Icecream';

const Stack=createStackNavigator();

// create a component
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Detail' component={Detail}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Register' component={Register}/>
                <Stack.Screen name='Item' component={Item}/>
                <Stack.Screen name='Burger' component={Burger}/>
                <Stack.Screen name='Pizza'  component={Pizza}/>
                <Stack.Screen name='Chowmein' component={Chowmein}/>
                <Stack.Screen name='Icecream' component={Icecream}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

// define your styles


//make this component available to the Navigation
export default Navigation;
