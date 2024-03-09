import { StyleSheet, Text, View,TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react'

const CategoryCard = ({categories,onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.main_container}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: categories.strCategoryThumb}}/>
            <Text style={styles.text}>{categories.strCategory}</Text>
        </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoryCard 

const styles = StyleSheet.create({
    main_container : {
        backgroundColor : "orange"
    },
    container : {
        backgroundColor : "white",
        borderColor : "black",
        borderRadius : 36,
        margin : 6,
        padding : 8,
        borderBottomRightRadius : 15,
        borderTopRightRadius : 7,
        alignItems : "center",
        flexDirection : "row"
    },
    image : {
        width : 100,
        height : 100,
        borderRadius : 10,
        resizeMode : "contain",
    },
    text : {
        fontSize : 30,
        paddingLeft : 15
    }
})
