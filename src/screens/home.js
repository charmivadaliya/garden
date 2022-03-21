import React, { Component } from 'react';
import { View, Text, ImageBackground,StatusBar, Image, TouchableOpacity, ScrollView, Pressable, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       <ImageBackground source={require('../assets/img/garden2.png')} style={{flex:1}}>
         <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
         <View style={{}}>
           <View style={{flexDirection:'row-reverse',marginTop:hp('10%'),marginHorizontal:'5%'}}>
             <Image source={require('../assets/img/NotificationBell.png')}></Image>
            </View>
           <View style={{borderWidth:2,marginTop:hp('2%'),borderColor:'#fff'}}/>
           <View style={{justifyContent:'center',alignItems:'center',marginTop: Platform.isPad === true ? '-3%' : '-7.5%'}}>
             <Pressable onPress={() => this.props.navigation.navigate('newPost')}>
              <Image source={require('../assets/img/plus.png')}></Image>
             </Pressable>
           </View>
         </View>
         <ScrollView style={{marginTop:hp('1%'),maxHeight:hp('70%')}}>
           <View style={{margin:hp('2%')}}>
             <Pressable onPress={() => this.props.navigation.navigate('postView')}>
             <View style={{flexDirection:'row',flex:1}}>
              <View style={{}}>
                <Image source={require('../assets/img/p1.png')} style={{borderRadius:60}}></Image>
              </View>
              <View style={{justifyContent:'center',marginHorizontal:wp('2%')}}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Dr.plant</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1,alignItems:'center',marginEnd:wp('15%')}}>
                <Text style={{color:'#fff',fontSize:14,maxWidth:30}}>2h ago</Text>
              </View>
            </View>
            <View style={{marginHorizontal:wp('7%'),marginVertical:hp('1%')}}>
              <Image source={require('../assets/img/Post1.png')} style={{borderRadius:10}}></Image>
            </View>
            <View style={{marginHorizontal:wp('7%'),marginVertical:hp('1%'),flexDirection:'row'}}>
              <Image source={require('../assets/img/like.png')} style={{marginHorizontal:wp('1%')}}></Image>
              <Text style={{color:'#fff',fontSize:14,marginHorizontal:wp('1%')}}>24</Text>
              <Image source={require('../assets/img/Comments.png')} style={{marginHorizontal:wp('1%')}}></Image>
              <Text style={{color:'#fff',fontSize:14,marginHorizontal:wp('1%')}}>2</Text>
            </View>
            <View style={{marginHorizontal:wp('7%'),marginVertical:hp('1%')}}>
              <Text style={{color:'#fff',fontSize:16,maxWidth:300}}>Lorem ipsum doler sit amet, consetetur sadipscing elitr, sed diam</Text>
            </View>
             </Pressable>
           </View>

           <View style={{margin:hp('2%')}}>
            <View style={{flexDirection:'row',flex:1}}>
              <View style={{}}>
                <Image source={require('../assets/img/p2.png')} style={{borderRadius:60}}></Image>
              </View>
              <View style={{justifyContent:'center',marginHorizontal:wp('2%')}}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Plant_LOVER</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1,alignItems:'center',marginEnd:wp('15%')}}>
                <Text style={{color:'#fff',fontSize:14,maxWidth:30}}>4h ago</Text>
              </View>
            </View>
            <View style={{marginHorizontal:wp('7%'),marginVertical:hp('1%')}}>
              <Image source={require('../assets/img/Post2.png')} style={{borderRadius:10}}></Image>
            </View>
            <View style={{marginHorizontal:wp('7%'),marginVertical:hp('1%'),flexDirection:'row'}}>
              <Image source={require('../assets/img/like.png')} style={{marginHorizontal:wp('1%')}}></Image>
              <Text style={{color:'#fff',fontSize:14,marginHorizontal:wp('1%')}}>24</Text>
              <Image source={require('../assets/img/Comments.png')} style={{marginHorizontal:wp('1%')}}></Image>
              <Text style={{color:'#fff',fontSize:14,marginHorizontal:wp('1%')}}>2</Text>
            </View>
            <View style={{marginHorizontal:wp('7%'),marginVertical:hp('1%')}}>
              <Text style={{color:'#fff',fontSize:16,maxWidth:300}}>Lorem ipsum doler sit amet, consetetur sadipscing elitr, sed diam</Text>
            </View>
           </View>

           <View style={{margin:hp('2%')}}>
             <Pressable onPress={() => this.props.navigation.navigate('postView')}>
             <View style={{flexDirection:'row',flex:1}}>
              <View style={{}}>
                <Image source={require('../assets/img/p1.png')} style={{borderRadius:60}}></Image>
              </View>
              <View style={{justifyContent:'center',marginHorizontal:wp('2%')}}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Dr.plant</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1,alignItems:'center',marginEnd:wp('15%')}}>
                <Text style={{color:'#fff',fontSize:14,maxWidth:30}}>2h ago</Text>
              </View>
            </View>
            <View style={{marginHorizontal:wp('7%'),marginVertical:hp('1%')}}>
              <Image source={require('../assets/img/Post1.png')} style={{borderRadius:10}}></Image>
            </View>
            <View style={{marginHorizontal:wp('7%'),marginVertical:hp('1%'),flexDirection:'row'}}>
              <Image source={require('../assets/img/like.png')} style={{marginHorizontal:wp('1%')}}></Image>
              <Text style={{color:'#fff',fontSize:14,marginHorizontal:wp('1%')}}>24</Text>
              <Image source={require('../assets/img/Comments.png')} style={{marginHorizontal:wp('1%')}}></Image>
              <Text style={{color:'#fff',fontSize:14,marginHorizontal:wp('1%')}}>2</Text>
            </View>
            <View style={{marginHorizontal:wp('7%'),marginVertical:hp('1%')}}>
              <Text style={{color:'#fff',fontSize:16,maxWidth:300}}>Lorem ipsum doler sit amet, consetetur sadipscing elitr, sed diam</Text>
            </View>
             </Pressable>
           </View>  
            
         </ScrollView>
       </ImageBackground>
       
    );
  }
}
