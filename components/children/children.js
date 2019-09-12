// components/children.js
Component({
  properties:{
    // title:String,
    title:{
      type:String,
      value:"我是默认的",
      observer:function(newVal,oldVal){
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses:["titleclass"]
})