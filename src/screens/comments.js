import React, { Component } from 'react'
import { Text, View ,ImageBackground,Image, Pressable,TextInput} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class componentName extends Component {
  render() {
    return (
        <ImageBackground source={require('../assets/img/garden2.png')} style={{flex:1}}>
             <View style={{marginTop:'20%',marginHorizontal:'5%'}}>
                <View style={{backgroundColor:'#EAFCD0',height:35,width:35,borderRadius:20,borderColor:'#EAFCD0',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                    <Pressable onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../assets/img/arrow.png')} style={{}}></Image>
                    </Pressable>
                </View>
                <View style={{marginHorizontal:'3%',marginTop:'5%'}}>
                    <Text style={{marginHorizontal:'5%',fontWeight:'bold',fontSize:20,color:'#94D440'}}>Comments</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{margin:'4%'}}>
                            <Image source={require('../assets/img/p2.png')} style={{}}></Image>
                        </View>
                        <View style={{marginVertical:'4%',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',maxWidth:140}}>Mr. Environment</Text>
                            <Text style={{fontWeight:'bold',fontSize:14,color:'#EAFCD0',maxWidth:30,marginVertical:'2%'}}>2h ago</Text>
                            <Text style={{fontSize:14,color:'#fff',marginVertical:'2%'}}>That's Awesome!!!</Text>
                            <View style={{marginVertical:'1%',flexDirection:'row',marginTop:'5%'}}>
                                <Image source={require('../assets/img/heart.png')} style={{marginHorizontal:'1%'}}></Image>
                                <Text style={{color:'#94D440',fontSize:12,marginHorizontal:'8%'}}>Reply</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View style={{margin:'4%'}}>
                            <Image source={require('../assets/img/p1.png')} style={{}}></Image>
                        </View>
                        <View style={{marginVertical:'4%',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',maxWidth:140}}>James Rush</Text>
                            <Text style={{fontWeight:'bold',fontSize:14,color:'#EAFCD0',maxWidth:30,marginVertical:'2%'}}>1h ago</Text>
                            <Text style={{fontSize:14,color:'#fff',marginVertical:'2%'}}>Good Job:)</Text>
                            <View style={{marginVertical:'1%',flexDirection:'row',marginTop:'5%'}}>
                                <Image source={require('../assets/img/heart.png')} style={{marginHorizontal:'1%'}}></Image>
                                <Text style={{color:'#94D440',fontSize:12,marginHorizontal:'8%'}}>Reply</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{justifyContent:'flex-end',flex:1,marginBottom:'12%',marginHorizontal:'5%'}}>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image source={require('../assets/img/p2.png')} style={{marginHorizontal:'1%'}}></Image>
                    </View>
                    <View style={{height:40,width:'70%',backgroundColor:'#EAFCD0',borderRadius:12,justifyContent:'center'}}>
                        <TextInput style={{fontSize:16,color:"#94D440",marginHorizontal:'5%'}} placeholder="Add a comment.." placeholderTextColor="#94D440"></TextInput>
                    </View>
                    <View style={{height:40,width:40,backgroundColor:'#EAFCD0',borderRadius:8,justifyContent:'center',marginHorizontal:'3%',alignItems:'center'}}>
                        <Image source={require('../assets/img/PostArrow.png')} style={{marginHorizontal:'1%',height:20,width:20}}></Image>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
  }
}