import React, { Component } from 'react';
import { View, Text, ImageBackground ,Image,TextInput, Pressable, Platform} from 'react-native';
import Swiper from 'react-native-swiper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        colorChange:false
    };
  }


  select = () => {
    if(this.state.colorChange === false){
        this.setState({
            colorChange:true
        })
    }else{
        this.setState({
            colorChange:false
        })
    }
  }

  render() {
    return (
      <ImageBackground source={require('../assets/img/garden2.png')} style={{flex:1}}>
            <KeyboardAwareScrollView>

        <Swiper style={{}} dotStyle={{height:15,width:15,borderRadius:8}} dotColor='#fff' activeDotStyle={{height:15,width:15,borderRadius:8}} activeDotColor='#94D440'>
            <View style={{marginHorizontal:'10%',marginTop:'10%',marginBottom:'5%'}}>
                <Text style={{color:'#EAFCD0',fontSize:20,fontWeight:'bold'}}>Profile</Text>
                <View style={{margin:'3%',alignItems:'center'}}>
                    <Image source={require('../assets/img/p4.png')}></Image>
                </View>
                <View style={{marginTop:'3%'}}>
                    <View style={{height: Platform.isPad === true ? hp('4%') : hp('5%'),width:wp('80%'),backgroundColor:'#EAFCD0',borderRadius:8}}>
                        {/* <Text style={{marginHorizontal:wp('4%'),fontSize: Platform.isPad === true ? 14 : 10,justifyContent:'center'}}>Name :</Text> */}
                        <TextInput style={{fontSize:Platform.isPad === true ? 20 : 16,color:"#000",marginHorizontal:wp('4%'),fontWeight:'bold',maxWidth:wp('65%'),height: Platform.isPad === true ? hp('4%') : hp('5%')}} placeholder="Enter Name..." placeholderTextColor="#000"></TextInput>
                    </View>
                </View>

                <View style={{marginTop:hp('3%')}}>
                    <View style={{height:Platform.isPad === true ? hp('4%') : hp('5%'),width:wp('80%'),backgroundColor:'#EAFCD0',borderRadius:8}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:Platform.isPad === true ? wp('75%') : wp('70%')}}>
                                {/* <Text style={{marginHorizontal:wp('4%'),fontSize:Platform.isPad === true ? 14 : 10,justifyContent:'center'}}>Country :</Text> */}
                                <TextInput style={{fontSize:Platform.isPad === true ? 20 : 16,color:"#000",marginHorizontal:wp('4%'),fontWeight:'bold',maxWidth:wp('65%'),height: Platform.isPad === true ? hp('4%') : hp('5%')}} placeholder="Enter Country..." placeholderTextColor="#000"></TextInput>
                            </View>
                            <View style={{justifyContent:'center',marginRight:'5%'}}>
                                <Image source={require('../assets/img/pencil.png')}></Image>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:hp('3%')}}>
                    <View style={{height: Platform.isPad === true ? hp('4%') : hp('5%'),width:wp('80%'),backgroundColor:'#EAFCD0',borderRadius:8}}>
                        {/* <Text style={{marginHorizontal:wp('4%'),fontSize:Platform.isPad === true ? 14 : 10,justifyContent:'center'}}>Email :</Text> */}
                        <TextInput style={{fontSize:Platform.isPad === true ? 20 : 16,color:"#000",marginHorizontal:wp('4%'),fontWeight:'bold',maxWidth:wp('65%'),height: Platform.isPad === true ? hp('4%') : hp('5%')}} placeholder="Enter Email..." placeholderTextColor="#000"></TextInput>
                    </View>
                </View>

                <View style={{marginTop:hp('3%')}}>
                    <View style={{height:Platform.isPad === true ? hp('4%') : hp('5%'),width:wp('80%'),backgroundColor:'#EAFCD0',borderRadius:8}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:Platform.isPad === true ? wp('75%') : wp('70%')}}>
                                {/* <Text style={{marginHorizontal:wp('4%'),fontSize:Platform.isPad === true ? 14 : 10,justifyContent:'center'}}>Contact No :</Text> */}
                                <TextInput keyboardType="number-pad" style={{fontSize:Platform.isPad === true ? 20 : 16,color:"#000",marginHorizontal:wp('4%'),fontWeight:'bold',maxWidth:wp('65%'),height: Platform.isPad === true ? hp('4%') : hp('5%')}} placeholder="Enter Number..." placeholderTextColor="#000"></TextInput>
                            </View>
                            <View style={{justifyContent:'center',marginRight:'5%'}}>
                                <Image source={require('../assets/img/pencil.png')}></Image>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:hp('3%')}}>
                    <View style={{height:Platform.isPad === true ? hp('4%') : hp('5%'),width:wp('80%'),backgroundColor:'#EAFCD0',borderRadius:8}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:Platform.isPad === true ? wp('75%') : wp('70%')}}>
                                {/* <Text style={{marginHorizontal:wp('4%'),fontSize:Platform.isPad === true ? 14 : 10,justifyContent:'center'}}>Password :</Text> */}
                                <TextInput secureTextEntry={true} style={{fontSize:Platform.isPad === true ? 20 : 16,color:"#000",marginHorizontal:wp('4%'),fontWeight:'bold',maxWidth:wp('65%'),height: Platform.isPad === true ? hp('4%') : hp('5%')}} placeholder="Enter Password..." placeholderTextColor="#000"></TextInput>
                            </View>
                            <View style={{justifyContent:'center',marginRight:'5%'}}>
                                <Image source={require('../assets/img/pencil.png')}></Image>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{marginHorizontal:'10%',marginTop:'10%',marginBottom:'5%'}}>
                <Text style={{color:'#EAFCD0',fontSize:20,fontWeight:'bold'}}>Profile</Text>
                <View style={{marginTop:hp('4%')}}>
                    <View style={{height:Platform.isPad === true ? hp('4%') : hp('5%'),width:wp('80%'),backgroundColor:'#EAFCD0',borderRadius:8}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:Platform.isPad === true ? wp('75%') : wp('70%')}}>
                                {/* <Text style={{marginHorizontal:wp('4%'),fontSize:Platform.isPad === true ? 14 : 10,justifyContent:'center'}}>Experience  :</Text> */}
                                <TextInput style={{fontSize:Platform.isPad === true ? 20 : 16,color:"#000",marginHorizontal:wp('4%'),fontWeight:'bold',maxWidth:wp('65%'),height: Platform.isPad === true ? hp('4%') : hp('5%')}} placeholder="Enter Experience..." placeholderTextColor="#000"></TextInput>
                            </View>
                            <View style={{justifyContent:'center',marginRight:'5%'}}>
                                <Image source={require('../assets/img/pencil.png')}></Image>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:hp('4%')}}>
                    <View style={{height:Platform.isPad === true ? hp('4%') : hp('5%'),width:wp('80%'),backgroundColor:'#EAFCD0',borderRadius:8}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:Platform.isPad === true ? wp('75%') : wp('70%')}}>
                                {/* <Text style={{marginHorizontal:wp('4%'),fontSize:Platform.isPad === true ? 14 : 10,justifyContent:'center'}}>No of Plants :</Text> */}
                                <TextInput style={{fontSize:Platform.isPad === true ? 20 : 16,color:"#000",marginHorizontal:wp('4%'),fontWeight:'bold',maxWidth:wp('65%'),height: Platform.isPad === true ? hp('4%') : hp('5%')}} placeholder="Enter Plants..." placeholderTextColor="#000"></TextInput>
                            </View>
                            <View style={{justifyContent:'center',marginRight:'5%'}}>
                                <Image source={require('../assets/img/pencil.png')}></Image>
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={{color:'#EAFCD0',fontSize:20,fontWeight:'bold',marginTop:'7%'}}>Plants of your interest</Text>

                <View style={{marginVertical:'5%'}}>
                    <View style={{flexDirection:'row',marginVertical: '5%',}}>
                        <View style={{flex:0.33,alignItems:'center'}}>
                            <Pressable onPress={() => this.select()}>
                                <Image source={require('../assets/img/f1.png')} style={{borderWidth:5,borderColor: this.state.colorChange === true ? '#94D440' : 'black'}}></Image>
                            </Pressable>
                        </View>
                        <View style={{flex:0.33,alignItems:'center'}}>
                            <Image source={require('../assets/img/f2.png')} style={{borderWidth:5,borderColor:'black'}}></Image>
                        </View>
                        <View style={{flex:0.33,alignItems:'center'}}>
                            <Image source={require('../assets/img/f3.png')} style={{borderWidth:5,borderColor:'black'}}></Image>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginVertical: '5%'}}>
                        <View style={{flex:0.33,alignItems:'center'}}>
                            <Image source={require('../assets/img/f4.png')} style={{borderWidth:5,borderColor:'black'}}></Image>
                        </View>
                        <View style={{flex:0.33,alignItems:'center'}}>
                            <Image source={require('../assets/img/f5.png')} style={{borderWidth:5,borderColor:'black'}}></Image>
                        </View>
                        <View style={{flex:0.33,alignItems:'center'}}>
                            <Image source={require('../assets/img/f6.png')} style={{borderWidth:5,borderColor:'black'}}></Image>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginVertical: '5%'}}>
                        <View style={{flex:0.33,alignItems:'center'}}>
                            <Image source={require('../assets/img/f7.png')} style={{borderWidth:5,borderColor:'black'}}></Image>
                        </View>
                        <View style={{flex:0.33,alignItems:'center'}}>
                            <Image source={require('../assets/img/f8.png')} style={{borderWidth:5,borderColor:'black'}}></Image>
                        </View>
                        <View style={{flex:0.33,alignItems:'center'}}>
                            <Image source={require('../assets/img/f9.png')} style={{borderWidth:5,borderColor:'black'}}></Image>
                        </View>
                    </View>
                </View>

            </View>
        
        </Swiper>
        <View style={{height:'10%'}}>
            <View style={{flexDirection:'row',marginHorizontal:'10%',alignItems:'center'}}>
                <View style={{height:50,width:'45%',justifyContent:'center',backgroundColor:'#7FBE56',borderRadius:12,borderColor:'#fff',borderWidth:1,alignItems:'center'}}>
                    <Pressable onPress={() => this.props.navigation.goBack()}>
                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Cancle</Text>
                    </Pressable>
                </View>
                <View style={{width:'10%'}}></View>
                <View style={{height:50,width:'45%',justifyContent:'center',backgroundColor:'#7FBE56',borderRadius:12,borderColor:'#fff',borderWidth:1,alignItems:'center'}}>
                    <Pressable onPress={() => this.props.navigation.goBack()}>
                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Update</Text>
                    </Pressable>
                </View>
            </View>
        </View>
        </KeyboardAwareScrollView>        
      </ImageBackground>
    );
  }
}
