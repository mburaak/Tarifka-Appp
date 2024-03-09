import { View, Text, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch/useFetch';
import Config from '../../Config';
import MealCard from "../components/Card/MealCard/MealCard"


const Meal = ({navigation,route}) => {

  const {strCategory} = route.params
  const {data} = useFetch(Config.API_MEAL + strCategory)

  const handleMealSelect = idMeal => {
    navigation.navigate("Detail",{idMeal})
  }

  const renderMeal = ({item}) => <MealCard meal = {item} onSelect={() => handleMealSelect(item.idMeal)}/>






  return (
    <FlatList 
    data={data.meals}
    renderItem={renderMeal}
    />
  )
}

export default Meal