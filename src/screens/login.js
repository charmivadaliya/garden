import React from "react";
// import './login.css';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// import Home from '../screens/Home'
// import {images} from '../constants';

const { width : WIDTH } = Dimensions.get('window')

const Login = ({navigation}) => { 
  return(
    <ImageBackground source={require('../assets/img/garden2.png')} style={styles.backgroundContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'UserName'}
          placeholderTextColor={'#808080'}
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          maxLength={10}
          secureTextEntry={true}  
          placeholderTextColor={'#808080'}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.logintxt} onPress={() =>navigation.navigate('Home')}>Login</Text>
        </TouchableOpacity>
      </View>      
      <View style={styles.container2}>
        <Text style={styles.forgot}>Forgot password?</Text>
          <View style={styles.container3}>
            <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity ><Text style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text></TouchableOpacity>
          </View>         
      </View>  
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      marginTop: 200,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#00ffff',     
    },
    input: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 10,
      fontSize: 18,
      fontFamily: 'calibri-bold',
      paddingHorizontal: 16,
      backgroundColor: '#eafcd0',
      color: '#000000',
      marginVertical: 15,  
    },
    btnLogin: {
      width: WIDTH - 220,
      borderRadius: 10,
      backgroundColor: '#7fbe56',
      paddingVertical: 10,
      marginVertical: 15,
    },
    logintxt: {  
      fontSize: 16,
      // fontWeight: '500',
      textAlign: 'center',
      color: '#ffffff',
      fontFamily: 'calibri-bold',
    },
    container2: {
      flex: 1,
      width: WIDTH - 55,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      flexDirection: 'column',
      marginBottom: 40,
      // backgroundColor: '#00ff00',
    },
    forgot:{
      // flexGrow: 1,
      // justifyContent: 'center',
      // marginRight: 60,
      // marginBottom: 20,
      // alignItems: 'center',
      // justifyContent: 'center',
      color: '#ffffff',
      fontSize: 17,
    },
    signupText: {
      fontSize: 16,
      marginBottom: 8,
      justifyContent: 'center',
    },
    signupButton: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 8,
      color: '#ffffff'
    },
    container3: {
      flexDirection: 'row',
    },
    // container4: {
    //   display: flex,
    //   justifyContent: "center",
    // }
  });
  
  
export default Login;
