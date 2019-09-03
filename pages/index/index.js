//index.js

Page({
  data: {
    isshow:true,
    num:40
  },
  showtime(){
    this.setData({
      isshow:!this.data.isshow
    })
  },
  addNum(){
    this.setData({
      num:this.data.num + 6
    })
  }
})
