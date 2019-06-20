import React, {Component} from 'react';
import {Text, View,ActivityIndicator,TouchableOpacity, FlatList,Image, StatusBar, Alert} from 'react-native';
import styles from '../css/HomeStyle';
import Color from '../component/Color';
import env from '../component/env';

type Props = {};
const URI = env.BASE_URL;
class Home extends Component<Props> {
    static navigationOptions = {
        title : "Business News",
        headerStyle: {
            backgroundColor: Color.primary
        }
    }
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          dataSource:[]
         };
       }
       componentDidMount(){
       fetch(URI)
       .then(response => response.json())
       .then((responseJson)=> {
         this.setState({
          loading: false,
          dataSource: responseJson.articles
         })
       })
       .catch(error=>console.log(error))
       }

    renderItem=(data)=>
        <View style={styles.list}>
            <Text style={styles.titles}>{data.item.title}</Text>
            <View style={{flexDirection:"row", marginLeft:5}}>
              <View style={{flexDirection:"row", width:"50%"}}>
                <Text style={styles.auth}>Author : </Text>
              <Text style={styles.auth}>{data.item.author}</Text>
              </View>
              <View style={{width:"50%"}}>
                <Text style={styles.time}>{data.item.publishedAt}</Text>
              </View>
            </View>

            <TouchableOpacity 
                 onPress={() => this.props.navigation.navigate('Detail',
                    {url:data.item.url, title:data.item.titleHead} )} >

            <Image 
            style={{height:200,width:"100%"}}
            source={{uri:data.item.urlToImage}} />
            </TouchableOpacity>
            <Text style={styles.desc}>{data.item.description}</Text>

        </View>

  render() {
    if(this.state.loading){
        return( 
          <View style={styles.loader}> 
            <ActivityIndicator size="large" color="#000"/>
          </View>
      )}
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Color.lightPrimary} />
            <FlatList
                data= {this.state.dataSource}
                renderItem= {item=> this.renderItem(item)}
                keyExtractor= {item=>item.source.name.toString()}
            />
    </View>
    );
  }
}
export default Home;