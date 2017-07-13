//获取应用实例
var app = getApp();//获取的当前小程序实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    pwd: ""
  },
  handleName(event) {
    this.setData({
      userName: event.detail.value
    })
  },
  handlePwd(event) {
    this.setData({
      pwd: event.detail.value
    })
  },
  submit() {
    if (!this.data.userName || !this.data.pwd) {
      wx.showToast({
        title: "你不输入登录什么呢",
        mask: true
      })
      return
    }
    var parmas = {};
    parmas.userName = this.data.userName;
    parmas.pwd = this.data.pwd;
    var _this = this;
    wx.request({
      success(res) {
        console.log(res)
        if (!res.data.code) {
          wx.reLaunch({
            url: '/pages/index/index?userName=' + _this.data.userName,
          })
        }
      },
      data: parmas,
      method: "POST",
      url: app.globalData.url + 'api/login', //注意上线的时候需要HTTPS服务
    })
  }
})