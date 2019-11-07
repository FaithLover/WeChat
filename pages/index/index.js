//index.js
// 封装函数请求方法,new Promise构造函数方法
import request from "../networks/networks.js"
Page({
  data: {
  },
  onLoad:function(options){
   
    request({
      url: 'http://123.207.32.32:8000/recommend'
    }).then(res =>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    }),
      wx.setNavigationBarTitle({
        title: '当前页面'
      })

  },
  hiddenTotast(){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 3000,
      mask: true,
      success: function(res) {
        console.log("弹窗成功")
      },
      fail: function(res) {}
      
    })
  },
  hiddenModel(){
    wx.showModal({
      title: '我是标题',
      content: '哈哈哈',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  hiddenLoading(){
    wx.showLoading({
      title: '加载中',
      mask: true,
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  hiddenAction(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
})
