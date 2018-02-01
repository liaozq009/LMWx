// pages/index/pages/selectFlight/selectFlight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lowPrice:[
      { time: '2018-01-01', price: 840 },
      { time: '2018-01-02', price: 940 },
      { time: '2018-01-03', price: 800 },
    ],
    startTime:'07:00',
    startPlace:'虹桥机场',
    endTime:'10:00',
    endPlace:'白云机场',
    totleTime:'2h',
    flightNum:'T866',
    flightPrice:'900',
    originalPrice:'1100',
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