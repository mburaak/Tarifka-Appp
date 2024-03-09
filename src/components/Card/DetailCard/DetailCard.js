import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'

const DetailCard = ({detail,onSelect}) => {
  
  return (
    <View style={styles.container}> 
      <Image style = {styles.image} source = {{ uri : detail.strMealThumb}}/>
      <Text style={styles.text}>{detail.strMeal}</Text>
      <Text style={styles.area}>{detail.strArea}</Text>
      <Text style={styles.desc}>{detail.strInstructions}</Text>
      <TouchableOpacity style = {styles.button} onPress={onSelect}>
        <Text style = {styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetailCard

const styles = StyleSheet.create({
  container : {
    flex : 1,
    borderColor : "black",
    borderWidth : 2,
    margin : 6,
    padding : 8,
    alignItems : "flex-start"

  },
  area : {
    fontSize : 22,
    fontWeight : "bold",
    color : "#A62C2C",
    alignItems : "flex-start",
    paddingLeft : 2,
  },
  image : {
    width : 400,
    height : 200,
    borderRadius : 10,
    position: 'relative',
  },
  text : {
    fontSize : 25,
    color : "#A62C2C",
    fontWeight : "bold",
    paddingLeft : 2
  },
  desc : {
    fontSize : 18,
    padding : 10,
    textAlign : "justify"

  },
  button : {
    backgroundColor : "red",
    height: 30, 
    width: 300,
    alignSelf: 'center',
    borderRadius : 20,
    justifyContent : "center",
  },
  button_text : {
    color : "white",
    fontSize : 20,
    textAlign : "center",
    fontWeight : "bold"
  }
})