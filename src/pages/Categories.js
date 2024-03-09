import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from "axios";
import Config from "../../Config"
import CategoryCard from "../components/Card/CategoryCard/CategoryCard"
import useFetch from "../hooks/useFetch/useFetch"



const Categories = ({navigation}) => {
    const{data} = useFetch(Config.API_URL)

    const handleSelect = strCategory => {
        navigation.navigate("Meal",{strCategory})
    }

    const renderProduct = ({item}) => <CategoryCard categories = {item} onSelect={() => handleSelect(item.strCategory)}/>

  return (
    <View>
    <FlatList
    data={data.categories}
    renderItem={renderProduct}
    />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})