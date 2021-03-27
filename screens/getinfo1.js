import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput, Alert, Image} from 'react-native';

export default class Info extends React.Component{
    constructor(props){
        super(props)
     this.state={
         weather:"",
         weatherlink: ""
     }
    }
    componentDidMount(){
    this.getWeather()
    }
     getWeather=async()=>{
    const response1=  await fetch("https://fcc-weather-api.glitch.me/api/current?lat=41.826832&lon=-72.553261")
    const response2= await response1.json()
    console.log(response2)
           this.setState({
              weather: response2
          })
            if(!this.state.weather.weather[0].icon){
            this.setState({
                weatherlink:"https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
            })
            }else{
                this.setState({
                    weatherlink: this.state.weather.weather[0].icon
                })
            }
    }

    render(){
        if(this.state.weather === ""){
            return(       
            <Text>Getting data...</Text>
           )
        }else{
            console.log(this.state.weather.main)
            console.log(this.state.weather.weather[0].icon)
          
            return(
                <View style={styles.container}>
                    <View style={{marginTop:10,alignItems:'center'}}>
                    <Image style={{width:200, height: 200}} source={{uri:this.state.weatherlink}}></Image>
                    </View>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.text}>{`Place Name: ${this.state.weather.name}`}</Text>
                    <Text style={styles.text}>{`Quick Description: ${this.state.weather.weather[0].description}`}</Text>
                    <Text style={styles.text}>{"Temperature: " + parseFloat((this.state.weather.main.temp*9/5)+32) + "° Farenheit"}</Text>
                    <Text style={styles.text}>{`Wind Speed: ${this.state.weather.wind.speed}`}</Text>
                    </View>
                </View>
           )
        }
      
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: '#add8e6'
},
text:{
fontSize: 30,
fontFamily: "Times New Roman",
fontWeight:'bold'
}
})