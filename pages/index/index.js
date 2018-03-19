//index.js
//获取应用实例
const app = getApp()

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
})
