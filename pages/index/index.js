//index.js

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true, //  是否显示面板指示点
    autoplay: false, // 是否自动切换
    circular: true, // 是否采用衔接滑动
    current: 0, // 当前所在页面的 index
    interval: 500, // 自动切换时间间隔
    duration: 500 // 滑动动画时长
  },
  testDetails(e) {
    // bindchange事件
    console.log(e)
  },
  nextPage() {
    // 跳转下一题
    var current = this.data.current;
    current++;
    if (current > 2) {
      current = 0
    }
    this.setData({
      current: current
    })
  }
})
