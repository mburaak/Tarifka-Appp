import { StyleSheet, Text, View,TouchableNativeFeedback,Image } from 'react-native'
import React from 'react'

const MealCard = ({meal,onSelect}) => {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
        <View style={styles.container}>
        <Image style={styles.image} source={{ uri: meal.strMealThumb }}/>
        <View style={styles.overlay}>
            <Text style={styles.text}>{meal.strMeal}</Text>
        </View>
        </View>
    </TouchableNativeFeedback>
  )
}

export default MealCard

const styles = StyleSheet.create({
    container:{
      flex:1,
      margin:10,
      borderRadius:10,
        
    },
    image:{
        width:'100%',
        height:175,
        borderRadius : 10,
        position:'relative',
        
    },
    text:{
      textAlign:'right',
      fontSize:25,
      fontWeight:'bold',
      color:'white'
    },
    overlay : {
      flex:1,
      height:40,
      width:'100%',
      borderRadius:10,
      backgroundColor:'rgba(0,0,0,0.4)',
      position:'absolute',
      bottom:0,
      padding:3,
    }
});