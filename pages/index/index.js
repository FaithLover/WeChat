//index.js

Page({
  data: {
    message:"哦咯哦",
    firstname:"第一个",
    lastname:"最后一个",
    age:18,
    nowtime:new Date().toLocaleString(),
    isAcitve:false
  },
  onLoad(){
    setInterval(() => {
      this.setData({
        nowtime:new Date().toLocaleString()
      })
    },1000)
  },
  switchColor(){
    console.log(1)
    this.setData({
        isAcitve:!this.data.isAcitve
    })
    console.log(this.data.isAcitve)
  }
})
