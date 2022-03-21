import React from "react";
import {
    View,
    Image,
    Text,
    TextInput,
    ImageBackground,
    StyleSheet,
    Dimensions,
} from 'react-native';
// import { Component } from "react/cjs/react.production.min";
import { SafeAreaView } from "react-native-safe-area-context"
// import { images } from '../constants';
import { ProgressSteps, ProgressStep } from "react-native-progress-steps" 
import { FlatList } from "react-native-gesture-handler" 
// import ReactRoundedImage from "react-rounded-image";
import p1 from "../assets/img/p1.png"
import p2 from "../assets/img/p2.png"
import p3 from "../assets/img/p3.png"
import p4 from "../assets/img/p4.png"
const { width : WIDTH } = Dimensions.get('window')

const SignUp = ({navigation}) =>{

    const [newPlants, setNewPlants] = React.useState([
       {
          id: 0,
          name: "Plant 1",
          img: p1,
          favourite: false
       },
       {
          id: 1,
          name: "Plant 2",
          img: p2,
          favourite: false
       },
       {
        id: 2,
        name: "Bamboo",
        img: p3,
        favourite: false
      },
      {
        id: 3,
        name: "Cactus",
        img: p4,
        favourite: false
      },
    //   {
    //     id: 4,
    //     name: "Fairy Duster",
    //     img: images.fairyDuster,
    //     favourite: false
    //   },
    //   {
    //     id: 5,
    //     name: "Orchid",
    //     img: images.orchid,
    //     favourite: false
    //   },
    //   {
    //     id: 6,
    //     name: "Philodendron",
    //     img: images.philodendron,
    //     favourite: false
    //   },
    //   {
    //     id: 7,
    //     name: "Snake Plant",
    //     img: images.snakePlant,
    //     favourite: false
    //   },
    ])

    //render
    function renderNewPlants(item, index) {
        return(
            <View style={styles.imageContainer}>  
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 10,
                    }}
                />
                <Text 
                    source={item.name}
                    resizeMode="cover"
                    style={{
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: '#000000'
                    }}
                >{item.name}</Text>
            </View>
        )
    }
    return(
            <ImageBackground source={require('../assets/img/garden2.png')} style={styles.backgroundContainer}>
                <SafeAreaView style={{flex:1}}>
                    <ProgressSteps>
                        <ProgressStep nextBtnTextStyle={styles.text} nextBtnStyle={styles.button}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.regText}>Registration</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder={'Email'}
                                    placeholderTextColor={'#808080'}
                                    underlineColorAndroid='transparent'
                                /> 
                                <TextInput 
                                    style={styles.input}
                                    placeholder={'Mobile no'}
                                    placeholderTextColor={'#808080'}
                                    underlineColorAndroid='transparent'
                                /> 
                                <TextInput 
                                    style={styles.input}
                                    placeholder={'Password'}
                                    placeholderTextColor={'#808080'}
                                    underlineColorAndroid='transparent'
                                /> 
                                <TextInput 
                                    style={styles.input}
                                    placeholder={'Confirm Password'}
                                    placeholderTextColor={'#808080'}
                                    underlineColorAndroid='transparent'
                                /> 
                            </View>
                        </ProgressStep>
                        <ProgressStep previousBtnTextStyle={styles.text} previousBtnStyle={styles.button} nextBtnTextStyle={styles.text} nextBtnStyle={styles.button}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.PerText}>Personal</Text>
                                {/* <ReactRoundedImage image={images.profile}/> */}
                                <Image
                                    source={require('../assets/img/p1.png')}
                                    style={styles.image}    
                                />
                                <TextInput 
                                    style={styles.input}
                                    placeholder={'Name'}
                                    placeholderTextColor={'#808080'}
                                    underlineColorAndroid='transparent'
                                />
                                <TextInput 
                                    style={styles.input}
                                    placeholder={'Select Country'}
                                    placeholderTextColor={'#808080'}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </ProgressStep>
                        
                        <ProgressStep previousBtnTextStyle={styles.text} previousBtnStyle={styles.button} nextBtnTextStyle={styles.text} nextBtnStyle={styles.button}>
                            <Text style={styles.textGardening}>Gardening Experience</Text>
                            {/* <TouchableOpacity style={styles.buttonSelect}>
                                <Text></Text>
                            </TouchableOpacity> */}
                            <View style={styles.container}>
                                <View style={styles.buttonSelect}>
                                    <Text style={styles.textSelect}>Begginer</Text>    
                                </View>
                                <View style={styles.buttonSelect}>
                                    <Text style={styles.textSelect}>Intermediate</Text>    
                                </View>
                            </View>
                            <View style={styles.container2}>
                                <View style={styles.buttonSelect}>
                                    <Text style={styles.textSelect}>Expert</Text>    
                                </View>
                                <View style={styles.buttonSelect}>
                                    <Text style={styles.textSelect}>Professional</Text>    
                                </View>
                            </View>
                            <Text style={styles.textNoofplants}>No. of plants you have?</Text>
                            <View style={styles.container}>
                                <View style={styles.buttonSelect}>
                                    <Text style={styles.textSelect}>1 Plant</Text>    
                                </View>
                                <View style={styles.buttonSelect}>
                                    <Text style={styles.textSelect}>2-5 Plants</Text>    
                                </View>
                            </View>
                            <View style={styles.container2}>
                                <View style={styles.buttonSelect}>
                                    <Text style={styles.textSelect}>5-10 Plants</Text>    
                                </View>
                                <View style={styles.buttonSelect}>
                                    <Text style={styles.textSelect}>Garden</Text>    
                                </View>
                            </View>
                        </ProgressStep>

                        <ProgressStep 
                            previousBtnTextStyle={styles.text} 
                            previousBtnStyle={styles.button} 
                            nextBtnTextStyle={styles.text} 
                            nextBtnStyle={styles.button}
                            onSubmit={() =>navigation.navigate('home')}>
                            <Text style={styles.textPlantinterest}>Plants of your interest?</Text>
                            <FlatList
                                numColumns={3}
                                // horizontal
                                showsHorizontalScrollIndicator={false}
                                data={newPlants}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({item, index}) => renderNewPlants(item,index)}
                                // style={styles.flatList}
                            />
                        </ProgressStep>
                    </ProgressSteps>
                </SafeAreaView>
            </ImageBackground>
        )
}
const styles = StyleSheet.create({
    textPlantinterest: {
        marginLeft: '8%'
    },
    imageContainer: {
        // width: '100%', 
        // height: '100%',
        alignItems: 'center',
        margin: '8%',
        // borderWidth: 0.75,
        borderRadius: 10,
        flex: 1,
        // flexDirection: "column",
        // backgroundColor: "red",
    },
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
    },
    regText: {
        flex: 1,
        width: WIDTH - 55,
        fontSize: 30,
        fontFamily: 'calibri-bold',
        paddingHorizontal: 16,
        color: '#000000',
        marginVertical: 0,  
    },
    inputContainer: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    signuptxt: {  
        fontSize: 16,
        // fontWeight: '500',
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'calibri-bold',
    },  
    button: {
        width: WIDTH - 260,
        borderRadius: 10,
        backgroundColor: '#7fbe56',
        // paddingVertical: 10,
        // paddingHorizontal: 30,
        // marginVertical: 15,
        marginHorizontal: 15,
        paddingLeft: 20,
        // marginRight: 60
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'calibri-bold',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        flex: 1,
    },
    PerText: {
        flex: 1,      
        width: WIDTH - 55,
        fontSize: 30,
        fontFamily: 'calibri-bold',
        paddingHorizontal: 0,
        color: '#000000',
        marginVertical: 0,
    },
    textGardening: {
        fontSize: 20,
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    buttonSelect: {
        backgroundColor: "#eafcd0",
        // padding: 18,
        width: "46%",
        height: 40,
        borderRadius: 10,
    },
    textSelect: {
        fontSize: 16,
        textAlign: 'center',
        color: "black",
        fontFamily: 'calibri-bold',
    },
    container2: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    textNoofplants: {
        fontSize: 20,
        flex:1,
        marginTop: 40
    },
})

export default SignUp;