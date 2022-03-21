import React, { Component } from 'react';
import { View, Text,ImageBackground ,Image, Pressable, Platform} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class postView extends Component {
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
                <View style={{marginHorizontal:wp('4%'),marginTop:hp('3%')}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{}}>
                        <Image source={require('../assets/img/p1.png')} style={{borderRadius:60}}></Image>
                    </View>
                    <View style={{justifyContent:'center',marginHorizontal:wp('1%')}}>
                        <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Dr.plant</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1,alignItems:'center',marginEnd:wp('10%')}}>
                        <Text style={{color:'#fff',fontSize:14,maxWidth:30}}>2h ago</Text>
                    </View>
                    </View>
                    <View style={{marginHorizontal: Platform.isPad === true ? wp('3%') : wp('7%'),marginVertical:hp('1%')}}>
                        <Image source={require('../assets/img/Post1.png')} style={{borderRadius:10}}></Image>
                    </View>
                    <View style={{marginHorizontal:Platform.isPad === true ? wp('3%') : wp('7%'),marginVertical:hp('1%')}}>
                        <Text style={{color:'#fff',fontSize:16,maxWidth:300}}>Lorem ipsum doler sit amet, consetetur sadipscing elitr, sed diam</Text>
                    </View>
                    <View style={{marginHorizontal:Platform.isPad === true ? wp('3%') : wp('7%'),marginVertical:hp('1%'),flexDirection:'row',marginTop:'5%'}}>
                        <Image source={require('../assets/img/HeartFilled.png')} style={{marginHorizontal:'1%'}}></Image>
                        <Text style={{color:'#fff',fontSize:16,marginHorizontal:'2%'}}>24 People like this post</Text>
                    </View>
                    <View style={{marginHorizontal:Platform.isPad === true ? wp('3%') : wp('7%'),marginVertical:hp('1%'),flexDirection:'row',marginTop:'5%'}}>
                        <Text style={{color:'#fff',fontSize:16,marginHorizontal:'2%'}}>2 Comments :</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1,alignItems:'center'}}>
                            <Text style={{color:'#94D440',fontSize:16}}>All Comments</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:'10%'}}>
                        <Pressable onPress={() => this.props.navigation.navigate('comments')}>
                            <View style={{backgroundColor:'#7FBE56',height:35,width:120,borderRadius:8,borderWidth:1,borderColor:'#fff'}}>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',margin:'5%'}}>
                                    <Image source={require('../assets/img/Comments.png')} style={{marginHorizontal:'1%'}}></Image>
                                    <Text style={{color:'#fff',fontSize:16,marginHorizontal:'2%'}}>Comments</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
            
        </ImageBackground>
    );
  }
}
