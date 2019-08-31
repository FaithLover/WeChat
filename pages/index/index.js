//index.js

Page({
  data: {
    name: 'xueyan',
    age: 3,
    students: [
      { id: 1, name: 'ly', age: 18 },
      { id: 2, name: 'lxy', age: 18 },
      { id: 3, name: 'xzc', age: 8 }
    ],
    count: 0
  },
  up() {
    this.setData({
      count: this.data.count + 1
    })
  },
  down() {
    this.setData({
      count: this.data.count - 1
    })
  },
})
