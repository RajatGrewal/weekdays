import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

//create a react Component
var Weekdays = React.createClass({
  render:function(){
    return(
      <View style={style.container}>
        <Text>
          This is some shitty text
        </Text>
      </View>
    )
  }
});

var style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

//Display the component on Screen
AppRegistry.registerComponent('weekdays',() => Weekdays);
