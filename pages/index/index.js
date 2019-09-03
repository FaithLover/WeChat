//index.js

Page({
  data: {
    price:2.66888,
    time:1560598160,
    titles:["衣服","鞋子","裤子"]
  },
  handleTouchStart(even){
    console.log(even.target)
    console.log("handleTouchStart")
  },
  handleTouchMove() {
    console.log("handleTouchMove")
  },
  handleTouchEnd() {
    console.log("handleTouchEnd")
  },
  handleTap() {
    console.log("handleTap")
  },
  handleLongPress() {
    console.log("handleLongPress")
  },
  getVal(even){
    console.log(even)
  },
  box1(){
    console.log("box1")
  },
  box2() {
    console.log("box2")
  },
  box3() {
    console.log("box3")
  }
})
