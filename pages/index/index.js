//index.js

Page({
  data: {
    title:'哈哈哈'
  },
  handleAbout(){
    wx.navigateTo({
      url: '/pages/about/about',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    })
    // navigator组件有多少种方法跳转，函数就有多少种跳转方法
    // wx.redirectTo({
    //   url: ''
    // })
  }
  

})
