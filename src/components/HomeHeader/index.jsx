import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtIcon } from 'taro-ui'

import './index.scss'

export default class HomeHeader extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='home-header'>
        <View className='home-header__left'>
            <AtAvatar className='home-header__avatar' circle text='学'></AtAvatar>
            <Text>点击登录</Text>
        </View>

        <View className='home-header__right'>
            <Text>切换</Text>
            <AtIcon value='chevron-right' size='30'></AtIcon>
        </View>
        
      </View>
    )
  }
}
