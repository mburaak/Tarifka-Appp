import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Linking } from 'react-native';
import React from 'react'
import useFetch from '../hooks/useFetch/useFetch';
import Config from '../../Config';
import DetailCard from "../components/Card/DetailCard/DetailCard"


const Detail = ({route}) => {
  const{idMeal} = route.params
  const{data} = useFetch(Config.API_DETAIL + idMeal);

  const renderDetail = ({item}) => <DetailCard detail = {item} onSelect={() => Linking.openURL(item.strYoutube)}/>



  return (
    <View>
      <FlatList 
      data={data.meals}
      renderItem={renderDetail}
      />
    </View>
  )
}

export default Detail

