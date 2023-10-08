import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {COLORS, ROUTES} from '../../constants';

export default function CustomButton(props) {
  return (
    <View style={styles.loginBtnWrapper}>
      <LinearGradient
        colors={[COLORS.gradientForm, COLORS.bgColor2]}
        style={styles.linearGradient}
        start={{y: 0.0, x: 0.0}}
        end={{y: 1.0, x: 0.0}}>
        {/******************** LOGIN BUTTON *********************/}
        <TouchableOpacity activeOpacity={0.7}
                          style={styles.loginBtn}>
          <Text style={styles.loginText}>{props.text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}


const styles = StyleSheet.create({
  loginBtnWrapper: {
    height: 55,
    bottom: 170,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '80%',
    alignSelf:'center',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
})
