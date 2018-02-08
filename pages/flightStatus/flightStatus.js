// pages/flight/flight.js
var common = require('../common/common.js')
var endTime = common.endTime;
var startTime = common.startTime

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fromCityVal: '广州',
    toCityVal: '北京',
    fromCityArray: ['广州', '北京', '上海', '深圳'],
    toCityArray: ['广州', '北京', '上海', '深圳'],
    startDate: startTime,
    startDate2: startTime,
    selectFlight:true,
    selectNum:false,
  },
  selectFromCity: function (e) {
    if (this.data.toCityVal == this.data.fromCityArray[e.detail.value]) {
      wx.showModal({
        title: '提示',
        content: '出发地和目的地不能一样',
      })
    } else {
      this.setData({
        fromCityVal: this.data.fromCityArray[e.detail.value]
      })
    }
  },
  selectToCity: function (e) {
    if (this.data.fromCityVal == this.data.toCityArray[e.detail.value]) {
      wx.showModal({
        title: '提示',
        content: '出发地和目的地不能一样',
      })
    } else {
      this.setData({
        toCityVal: this.data.toCityArray[e.detail.value]
      })
    }
  },
  changeStartDate: function (e) {
    this.setData({
      startDate: e.detail.value
    })
  },
  changeStartDate2: function (e) {
    this.setData({
      startDate2: e.detail.value
    })
  },
  selectFlight:function(){
    this.setData({
      selectFlight:true,
      selectNum:false
    })
  },
  selectNum: function () {
    this.setData({
      selectFlight: false,
      selectNum: true
    })
  },
  searchFlightCity: function () {
    wx.navigateTo({
      url: '/pages/flightStatus/flightStatus/pages/flightStatusDetail',
    })
  },
  searchFlightNum:function(){
    wx.navigateTo({
      url: '/pages/flightStatus/flightStatus/pages/flightStatusDetail',
    })
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