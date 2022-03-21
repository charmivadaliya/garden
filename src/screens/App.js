import * as React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from './home';
import plant from './plant';
import newPost from './newPost';
import postView from './postView';
import componentName from './comments';
import profile from './profile';
import Login from './login';
import SignUp from './SignUp';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="h1" component={home} />
    </HomeStack.Navigator>
  );
}

const PlantStack = createNativeStackNavigator();

function PlantStackScreen() {
  return (
    <PlantStack.Navigator screenOptions={{headerShown:false}}>
      <PlantStack.Screen name="p1" component={plant} />
    </PlantStack.Navigator>
  );
}

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

function tabBar() {
  return(
      <Tab.Navigator screenOptions={{headerShown:false,
          tabBarActiveTintColor: '#94D440',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle:{backgroundColor:'transparent',position: 'absolute',elevation:0,borderTopWidth:0}
        }} >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Image source={require('../assets/img/Home.png')} style={{tintColor:color,height:25,width:25}} />
          ),
        }}
        />
        <Tab.Screen name="Plant" component={PlantStackScreen} options={{
          tabBarLabel: 'Plant',
          tabBarIcon: ({ color }) => (
            <Image source={require('../assets/img/FullLeaf.png')} style={{tintColor:color,height:25,width:25}} />
          ),
        }}/>
         <Tab.Screen name="Diseas" component={PlantStackScreen} options={{
          tabBarLabel: 'Diseas',
          tabBarIcon: ({ color }) => (
            <Image source={require('../assets/img/diseas.png')} style={{tintColor:color,height:25,width:25}} />
          ),
        }}/>
         <Tab.Screen name="Profile" component={profile} options={{
           tabBarStyle: { display: "none" },
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image source={require('../assets/img/profile.png')} style={{tintColor:color,height:25,width:25}} />
          ),
        }}/>
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="home" component={tabBar}/>
      <Stack.Screen name="newPost" component={newPost}/>
      <Stack.Screen name="postView" component={postView}/>
      <Stack.Screen name="comments" component={componentName}/>
      <Stack.Screen name="SignUp" component={SignUp}  /> 
    
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}