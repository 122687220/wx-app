import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import HomeHeader from '@components/HomeHeader/index'

import './index.scss'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <HomeHeader />
        <AtTabBar
          fixed
          tabList={[
            { title: '待办事项', iconType: 'bullet-list', text: 'new', key: 1 },
            { iconType: 'camera', key: 2 },
            { title: '文件夹', iconType: 'folder', text: '100', max: 99, key: 3 }
        ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
