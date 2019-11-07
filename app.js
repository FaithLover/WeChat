//app.js
// 登录操作
App({
  globalData:{
    token:''
  },
  //完成加载一次
  onLaunch: function () {
    // 登录
    const token = wx.getStorageSync("token")
    if(token && token.length !==0){
      this.check_token(token)
    }else{
      this.login()
    }
    
  },
  check_token(token){
    console.log("验证token操作")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
        console.log(res)
        if(!res.data.errCode){
          console.log("token有效")
          this.globalData.token = token;
        }else{
          this.login()
        }
      },
      fail:(res)=>{
        console.log(res)
      }
    })
  },
  login() {
    console.log("执行登录操作")
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: { code },
          method: 'POST',
          success: (res) => {
            console.log(res)
            const token = res.data.token;
            this.globalData.token = token
            // 异步执行
            // wx.setStorage({
            //   key: '',
            //   data: '',
            // })
            //同步执行，执行完再执行下一步
            wx.setStorageSync("token", token)
          },
          fail: function (res) { }
        })
      }
    })
  }
})