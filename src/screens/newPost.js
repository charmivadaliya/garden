import React, { Component } from 'react';
import { View, Text,ImageBackground,Image, TextInput, Platform,Pressable } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const hasTags = ["#Annual", "#Bambo", "#Bonsai", "#Ferns", "#Flower", "#Fruits", "#Aquatic", "#Cactus", "#Herbs"]
export default class newPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground source={require('../assets/img/garden2.png')} style={{flex:1}}>
        
        <View style={{marginTop:hp('8%'),marginHorizontal:wp('3%')}}>
          <View style={{backgroundColor:'#EAFCD0',height:35,width:35,borderRadius:20,borderColor:'#EAFCD0',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
              <Pressable onPress={() => this.props.navigation.goBack()}>
                  <Image source={require('../assets/img/arrow.png')} style={{}}></Image>
              </Pressable>
          </View>
        </View>
        <KeyboardAwareScrollView
        extraScrollHeight={200}  
        // keyboardDismissMode='on-drag'
        // contentContainerStyle={{
        //     flexGrow:1,
        //     paddingHorizontal:10
        // }}
        >
        <View style={{flex:1,marginHorizontal:wp('10%'),marginTop: Platform.isPad === true ? hp('25%') : hp('20%')}}>
          <Image source={require('../assets/img/p3.png')} style={{borderRadius:60}}></Image>
          <Image source={require('../assets/img/Polygon.png')} style={{marginHorizontal:Platform.isPad === true ? wp('4%') : wp('8%')}}></Image>
          <View style={{backgroundColor:'#fff',height:hp('20%'),borderRadius:20,marginTop:-1}}>
            <View style={{margin:'3%',height:hp('12%')}}>
              <TextInput style={{fontSize:20,color:"#94D440"}} multiline numberOfLines={3} placeholder="Pen Down Your Thoughts...." placeholderTextColor="#94D440"></TextInput>
            </View>
            <View style={{margin:'3%',flexDirection:'row'}}>
              <Image source={require('../assets/img/Smile.png')} style={{marginHorizontal:'2%'}}></Image>
              <Image source={require('../assets/img/Camera.png')} style={{marginHorizontal:'2%'}}></Image>
              <Image source={require('../assets/img/InsertImage.png')} style={{marginHorizontal:'2%'}}></Image>
              <Image source={require('../assets/img/Hashtag.png')} style={{marginHorizontal:'2%'}}></Image>
              <SelectDropdown data={hasTags} buttonStyle={{height:20,width:120,borderRadius:5,backgroundColor:'#fff'}}
              defaultButtonText="select" buttonTextStyle={{color:'#94D440'}} dropdownStyle={{backgroundColor:'#fff'}}
              dropdownBackgroundColor="#fff" rowTextStyle={{color:'#94D440',fontSize:14}} onSelect={(selectedItem, index) => {}}>
              </SelectDropdown>
              <View style={{flexDirection:'row-reverse'}}>
                <Image source={require('../assets/img/PostArrow.png')} style={{marginHorizontal:'2%'}}></Image>
              </View>
            </View>

          </View>

        </View>
        </KeyboardAwareScrollView>

      </ImageBackground>
    );
  }
}
