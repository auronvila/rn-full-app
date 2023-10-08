import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import {COLORS} from '../constants';


export default function Pagination(props) {
  return (
    <View style={styles.container}>
      {props.data.map((_, idx) => {
        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, idx === props.index && styles.dotActive]}
          />)
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.white,
  },
  container: {
    position: 'absolute',
    bottom: 260,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotActive: {
    backgroundColor: '#000',
    marginHorizontal: 4,
  }
})