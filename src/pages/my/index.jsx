import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'


import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  componentDidMount () { }

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
        <AtTabBar
          fixed
          tabList={[
            { title: '待办事项', iconType: 'bullet-list', text: 'new' },
            { iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
        ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
