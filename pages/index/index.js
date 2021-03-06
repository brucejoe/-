//index.js
//获取应用实例
const app = getApp()
var common = require('../common/common.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickMe: function () {
    this.setData({ msg: "欢迎来到我的个人小程序" });
    wx.navigateTo({
      url: '../first/first'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  helloMINA: function () {
    common.sayHello('MINA')
  },
  goodbyeMINA: function () {
    common.sayGoodbye('MINA')
  },
  // onReady: function () {
  //   wx.navigateTo({
  //     url: '../first/first'
  //   })
  // },
  movable:function(){
    wx.navigateTo({
      url: '../sixth/sixth',
    })
  },
  cover:function(){
    wx.navigateTo({
      url: '../seventh/seventh',
    })
  },
  icon:function(){
    wx.navigateTo({
      url: '../eigth/eigth',
    })
  },
  text:function(){
    wx.navigateTo({
      url: '../ninth/ninth',
    })
  },
  rich:function(){
    wx.navigateTo({
      url: '../tenth/tenth',
    })
  },
  button:function(){
    wx.navigateTo({
      url: '../eleventh/eleventh',
    })
  },
  input:function(){
    wx.navigateTo({
      url: '../twelfth/twelfth',
    })
  },
  label:function(){
    wx.navigateTo({
      url: '../fourteenth/fourteenth',
    })
  },
  picker:function(){
    wx.navigateTo({
      url: '../fifteenth/fifteenth',
    })
  },
  pickerView:function(){
    wx.navigateTo({
      url: '../sixteenth/sixteenth',
    })
  },
  slider:function(){
    wx.navigateTo({
      url: '../seventeenth/seventeenth',
    })
  },
  switch:function(){
    wx.navigateTo({
      url: '../eighteenth/eighteenth',
    })
  },
  textarea:function(){
    wx.navigateTo({
      url: '../ninteenth/ninteenth',
    })
  },
  canvas:function(){
    wx.navigateTo({
      url: '../twentieth/twentieth',
    })
  },
  camera:function(){
    wx.navigateTo({
      url: '../camera/camera',
    })
  },
  service:function(){
    wx.navigateTo({
      url: '../service/service',
    })
  },
  render:function(){
    wx.navigateTo({
      url: '../render/render',
    })
  },
  key:function(){
    wx.navigateTo({
      url: '../key/key',
    })
  },
  temp:function(){
    wx.navigateTo({
      url: '../temp/temp',
    })
  },
  maps:function(){
    wx.navigateTo({
      url: '../map/map',
    })
  },
  css:function(){
    wx.navigateTo({
      url: '../css/css',
    })
  },
})
