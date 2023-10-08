import {Animated, FlatList, Text, View} from 'react-native';
import Slides from '../data'
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import {useRoute} from '@react-navigation/native';
import {useRef, useState} from 'react';

export default function Slider() {
  const [index, setIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;



  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index)
  }).current

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current


  return (
    <View>
      <FlatList
        data={Slides}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment={'center'}
        horizontal
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({item}) => <SlideItem item={item}/>}/>
      <Pagination index={index} scrollx={scrollX} data={Slides}/>
    </View>
  )
}