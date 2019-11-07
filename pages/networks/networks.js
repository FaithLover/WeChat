export default function request(options){
  console.log(options)
  return new Promise((resolve,reject)=>{
    wx.request({
      url: options.url,
      data: options.data || {},
      method: options.method || 'get',
      dataType: 'json',
      success: function(res) {
        resolve(res)
      },
      fail: function(res) {
        reject(res)
      }
    })
  })
}

// 简易版写法
// export default function request(options) {
//   return new Promise(resolve, reject)=> {
//     wx.request({
//       url: options.url,
//       data: options.data || {},
//       method: options.method || 'get',
//       dataType: 'json',
//       success: resolve,
//       fail:reject,
//     })
//   }
// }