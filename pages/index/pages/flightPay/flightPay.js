// pages/index/pages/flightPay/flightPay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  payNow:function(){
    wx.showToast({
      title: '正在支付',
      icon:'loading',
      duration:6000
    })
    setTimeout(function(){
      wx.showToast({
        title: '支付成功',
        icon:'success',
        duration: 2000,
        success:function(res){
          setTimeout(function(){
            wx.switchTab({
              url: '/pages/index/index',
            })
          },2000)
        }
      })
    },6000)
    // wx.requestPayment({
    //   'timeStamp': '',
    //   'nonceStr': '',
    //   'package': '',
    //   'signType': 'MD5',
    //   'paySign': '',
    //   'success': function (res) {
    //     console.log(res)
    //   },
    //   'fail': function (res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})