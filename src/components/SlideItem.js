import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const {width,height} = Dimensions.get('screen');

export default function SlideItem(props){

  return(
    <View style={styles.container}>
      <Image source={props.item.img} resizeMode={'contain'} style={styles.image}/>
      <View style={styles.content}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.description}>{props.item.description}</Text>
        <Text style={styles.price}>{props.item.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
  width:'70%',
  flex:0.6,
  },
  title:{
  fontSize:25,
    fontWeight:'bold',
    color:'black',
    flex:0.3
  },
  description:{
    fontSize:18,
    color:'black',
  },
  price:{
    fontSize:32,
    color:'black',
    fontWeight:'bold',
  },
  container:{
    width,
    height,
    alignItems:'center',
  },
  content:{
    alignItems:'center',
  }
})
