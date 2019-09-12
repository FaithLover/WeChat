//index.js

Page({
  data: {
    counter:0
  },
  handleAdd(event){
    this.setData({
      counter:this.data.counter+1
    })
    console.log(event)
  },
  tabbarClick(event){
    console.log(event)
  },
  update(){
    const my_sel = this.selectComponent('#sel_id')
    my_sel.addCounter(10)
    console.log(my_sel)
  }
})
