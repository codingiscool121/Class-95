import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config.js'
const weather = require('weather-js')
export default class Entertain extends React.Component{
    constructor(props){
        super(props)
    
    }
    componentDidMount(){
        this.get()
    }
     get(){
    weather.find({search: "South Windsor", degreeType: 'C'},function(err,result){
        if(error) return message.channel.send(error);
        if(result === undefined || result.length === 0) return console.log("NADA")
        var current = result[0].current;
        var location = result[0].location;
        console.log(result)
    })
    }
    render(){
        return(
   <Text>Ab nothing</Text>
            )
    }
}