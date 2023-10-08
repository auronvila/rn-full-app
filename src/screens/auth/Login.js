import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, KeyboardAvoidingView, Platform,
} from 'react-native';
import {COLORS, ROUTES} from '../../constants';
import {LinearGradient} from 'expo-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('UserName is required'),
    // .email('Please enter a valid email'),
  password: Yup.string().required('Password is required'),
});

const Login = (props) => {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleLogin = (values,{resetForm}) => {
    console.log('Submitted:', values);
    resetForm();
    props.navigation.navigate(ROUTES.HOME);
  };

  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={'padding'}
      keyboardVerticalOffset={
        Platform.OS === 'android' ? -250 : 30
      }
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {(formikProps) => (
          <View style={styles.container}>
            <View style={styles.wFull}>
              <View style={styles.row}>
                {/*<Logo width={55} height={55} style={styles.mr7} />*/}
                <Text style={styles.brandName}>Auron</Text>
              </View>
              <Text style={styles.loginContinueTxt}>
                Login in to continue
              </Text>

              <TextInput
                value={formikProps.values.username}
                onChangeText={formikProps.handleChange('username')}
                style={styles.input}
                placeholder="Email"
              />
              {formikProps.touched.username &&
              formikProps.errors.username ? (
                <Text style={styles.errorText}>
                  {formikProps.errors.username}
                </Text>
              ) : (
                ''
              )}

              <TextInput
                value={formikProps.values.password}
                onChangeText={formikProps.handleChange('password')}
                style={styles.input}
                textContentType={'password'}
                secureTextEntry
                placeholder="Password"
              />
              {formikProps.touched.password &&
              formikProps.errors.password ? (
                <Text style={styles.errorText}>
                  {formikProps.errors.password}
                </Text>
              ) : (
                ''
              )}

              <View style={styles.loginBtnWrapper}>
                <LinearGradient
                  colors={[COLORS.gradientForm, COLORS.primary]}
                  style={styles.linearGradient}
                  start={{y: 0.0, x: 0.0}}
                  end={{y: 1.0, x: 0.0}}
                >
                  {/***************** LOGIN BUTTON ******************/}
                  <TouchableOpacity
                    onPress={formikProps.handleSubmit}
                    activeOpacity={0.7}
                    style={styles.loginBtn}
                  >
                    <Text style={styles.loginText}>Log In</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>

              {/***************** FORGOT PASSWORD BUTTON *****************/}
              <TouchableOpacity style={styles.forgotPassBtn}>
                <Text
                  onPress={() =>
                    props.navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                      userId: 'AURON ID',
                    })
                  }
                  style={styles.forgotPassText}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Don't have an account?{' '}
              </Text>
              {/***************** REGISTER BUTTON *****************/}
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate(ROUTES.REGISTER, {
                    userId: 'AURON ID',
                  })
                }
              >
                <Text style={styles.signupBtn}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};


export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 16,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
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
    width: '100%',
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
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 35,
  },
  // footer
  footer: {
    bottom: 42,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  }
});
