/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 160,
    height: 160,
    marginBottom: 60,
  },
  welcome: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 60,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#00bcd4',
    width: 200,
    height: 20,
  },
  btnText: {
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 20,
    color: 'white',
  }
});
const lunchs = [
  {
    name: '兰州拉面',
    image: 'http://www.canyin88.com/uploads/image/2016/07/22/1469175477919710.jpg'
  },
  {
    name: '永和大王',
    image: 'http://www.gongfusong.com/uploads/allimg/1410/1-141022001F2213.jpg'
  },
  {
    name: '五谷渔粉',
    image: 'http://www.wugudizu.com/uploads/allimg/160727/1-160HG63112203.jpg'
  },
  {
    name: '黄焖鸡',
    image: 'http://www.fajia88.com/upload/201406/140371698753.jpg'
  },
  {
    name: '真功夫',
    image: 'http://www.qqgfw.com/Upload/2010-05/003zhen.jpg'
  },
  {
    name: '桂兰米粉',
    image: 'http://p1.meituan.net/deal/a9b41730b43e7e03851f7c1202bf0684106749.jpg'
  }
];
export default class lunchHelper extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      current: {
        name: '',
        image: 'https://cdn.pixabay.com/photo/2016/10/18/18/19/question-mark-1750942_960_720.png'
      },
      image: 'https://cdn.pixabay.com/photo/2016/10/18/18/19/question-mark-1750942_960_720.png',
      status: 'before'
    }
  }
  onPress() {
    const status = this.state.status;
    console.log(status)
    switch(status) {
      case 'before':
        this.timer = setInterval(() => {
          var index = Math.floor(Math.random() * 6);
          console.log(index, lunchs[index])
          this.setState({
            current: lunchs[index],
            status: 'selecting',
          })
        }, 1000);
        break;
      case 'selecting':
        clearInterval(this.timer);
        this.setState({
            status: 'before'
        });
        break;
    }
  }
  renderNewImage() {
    const current = this.state.current;
    return <Image style={styles.image} source={{uri: current.image}}/>
  }
  render() {
    const current = this.state.current;
    const status = this.state.status;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>中午吃什么？</Text>
        <View>
          {this.renderNewImage()}
          <Text>{current.name}</Text>
        </View>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>{status === 'before' ? '开始选择' : '正在选择'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



AppRegistry.registerComponent('lunchHelper', () => lunchHelper);
