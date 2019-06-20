import React, { Component } from 'react';
import {WebView, View, Text, ActivityIndicator} from "react-native";
import styles from '../css/HomeStyle';
import Color from '../component/Color';

//const { navigation } = this.props;
//const titleHead = navigation.state.getParam('titleHead', 'some default value');

class Detail extends Component{
  static navigationOptions = {
    title : "News",
    headerStyle: {
        backgroundColor:"#ffc"
    }
}
    state={
      loading: true,
      url:this.props.navigation.state.params.url
    }

    render() {
      if(this.state.loading){
        return( 
          <View style={styles.loader}> 
            <ActivityIndicator size="large" color="#000"/>
          </View>
      )}
      return (
          <WebView
              source={{uri:this.state.url}}
              style= {{ flex: 1}}/>
      );
  }
}
export default Detail;