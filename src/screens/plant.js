import React, { Component } from 'react';
import { View, Text, ImageBackground,Pressable,Image,Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class plant extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground source={require('../assets/img/garden2.png')} style={{flex:1}}>
        <View style={{}}>
          <View style={{flexDirection:'row-reverse',marginTop:hp('10%'),marginHorizontal:'5%'}}>
            <Image source={require('../assets/img/NotificationBell.png')}></Image>
          </View>
          <View style={{borderWidth:2,marginTop:hp('2%'),borderColor:'#fff'}}/>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:Platform.isPad === true ? '-3%' : '-7.5%'}}>
            <Pressable >
            <Image source={require('../assets/img/plus.png')}></Image>
            </Pressable>
          </View>
        </View>
        <View style={{marginHorizontal:'10%',marginVertical:'10%'}}>
          <View style={{flexDirection:'row'}}>
            <View style={{marginRight:'5%'}}>
              <Image source={require('../assets/img/BarrelCactus.png')}></Image>
            </View>
            <View>
              <Text style={{fontSize:18,fontWeight:'bold',maxWidth:70,color:'#EAFCD0',marginHorizontal:'5%'}}>Barrel Cactus</Text>
              <Text style={{fontSize:14,maxWidth:70,color:'#fff',marginHorizontal:'5%'}}>#Cactus added 1 week ago</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
