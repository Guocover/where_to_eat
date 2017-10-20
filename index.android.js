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
    fontSize: 24,
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
    width: 160,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopName: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
    color: '#000',
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
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
    image: 'https://f10.baidu.com/it/u=1910185999,2846063828&fm=72'
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
    name: '南大门',
    image: 'http://pic.pimg.tw/zine1215/1361933023-2114981311.jpg?v=1361933024'
  },
  {
    name: '饭堂',
    image: 'http://www.dgblx.com/product/201412/2014121061119485.jpg'
  },
  {
    name: '煲仔饭',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqvgIX0tv4X1M-QFUy9-14PW7P7tj2ysl3p18IOzlFJCkGFpmV' 
   },
  {
    name: '隆江猪脚',
    image: 'http://www.3158.cn/data/i10/20141013/14702949813127009.jpg'
  },
  {
    name: '央宗米线',
    image: 'http://p0.meituan.net/320.0.a/deal/174996754b1db001756613681d95a6c057833.jpg@0_46_640_387a%7C388h_640w_2e_100q'
  },
  {
    name: '巴陵会馆',
    image: 'http://p1.meituan.net/320.0.a/deal/e8d097b0b87ced76e7b1c0e401f4dc8a72024.jpg@70_0_994_603a%7C388h_640w_2e_90Q'
  },
  {
    name: '烤鱼',
    image: 'http://ali.xinshipu.cn/20110602/original/1306979729590.jpg'
  }
];
const length = lunchs.length;
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
          var index = Math.floor(Math.random() * length);
          console.log(index, lunchs[index])
          this.setState({
            current: lunchs[index],
            status: 'selecting',
          })
        }, 10);
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
          <Text style={styles.shopName}>{current.name}</Text>
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
