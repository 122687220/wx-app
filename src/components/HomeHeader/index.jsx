import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtIcon } from 'taro-ui'

import './index.scss'

export default class HomeHeader extends Component {

  componentDidMount () { }

  doLogin() {
    Taro.navigateTo({
      url: '/pages/login/index',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        // res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  }

  render () {
    return (
      <View className='home-header'>
        <View className='home-header__left'>
            <AtAvatar className='home-header__avatar' circle text='学'></AtAvatar>
            <Text onClick={this.doLogin.bind(this)}>点击登录</Text>
        </View>

        <View className='home-header__right'>
            <Text>切换</Text>
            <AtIcon value='chevron-right' size='30'></AtIcon>
        </View>
        
      </View>
    )
  }
}
