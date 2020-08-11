import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtToast, AtForm, AtButton, AtInput } from 'taro-ui'


import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      phoneNum: '',
      password: '',
      toastText: '',
      isOpened: false,
      disabled: true
    }
  }

  componentDidMount () { }

  handleToastClose() {
    this.setState({
      isOpened: false
    })
  }

  phoneNumChange (value) {
    this.setState({
      phoneNum: value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }

  passwordChange (value) {
    this.setState({
      password: value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }

  onSubmit () {
    // console.log(this.state)
    if (!this.state.phoneNum.length) {
      this.setState({
        toastText: '请填写手机号码',
        isOpened: true
      })
    } else if (!this.state.password.length) {
      this.setState({
        toastText: '请填写密码',
        isOpened: true
      })
    } else {
      this.setState({
        toastText: '正在登录',
        isOpened: true
      })
    }
  }

  render () {
    return (
      <View className='login'>
        <Text className='login__title'>输入手机号</Text>
        <AtForm
          className='login__form'
          onSubmit={this.onSubmit.bind(this)}
        >
          <AtInput
            name='value6'
            border={false}
            title='手机号码'
            type='phone'
            placeholder='手机号码'
            value={this.state.phoneNum}
            onChange={this.phoneNumChange.bind(this)}
          />
          <AtInput
            name='value3'
            title='密码'
            type='password'
            placeholder='密码不能少于10位数'
            value={this.state.password}
            onChange={this.passwordChange.bind(this)}
          />

          <AtButton
            className='login__btn'
            formType='submit'
            loading
            circle
            disabled={this.state.disabled}
            type='primary'
          >登 录</AtButton>
        </AtForm>

        <AtToast
          isOpened={this.state.isOpened} 
          text={this.state.toastText} 
          icon={this.state.icon}
          onClose={this.handleToastClose.bind(this)}
        />
      </View>
    )
  }
}
