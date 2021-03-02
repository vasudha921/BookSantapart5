import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <View style = {StyleSheet.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>

                </View>
                <View style = {styles.logOutContainer}>
                    <TouchableOpacity
                    style={styles.logOutButton}
                    onPress = {()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut();


                    }}>
                        <Text>Log Out</Text>
                        
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.9,
      justifyContent:'center',
      paddingBottom:50, 
      
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      paddingBottom:10,
      
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })
  