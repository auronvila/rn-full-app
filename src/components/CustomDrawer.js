import {Dimensions, Image, ImageBackground, StyleSheet, View} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {COLORS, IMGS} from '../constants';

const width = Dimensions.get('screen').width;
export default function CustomDrawer(props) {
  // Calculate width here

  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMGS.bloxima} style={{height: 140, backgroundColor:'black'}}>
        <Image source={IMGS.auron} style={styles.userImg}/>
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
  },
  drawerListWrapper: {
    marginTop: 110 / 2 + 10
  }
});
