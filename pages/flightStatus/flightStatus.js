// pages/flight/flight.js
// 日期选择
var formatDate = function (ymd) { //日期格式化
  return ymd.replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (ymdFormatDate, y, m, d) {
    m < 10 && (m = '0' + m);
    d < 10 && (d = '0' + d);
    return y + '-' + m + '-' + d;
  });
};
var today = new Date();
var startTimeStr = new Date(today.getTime() + 86400000 * 0);
var startTime = formatDate(startTimeStr.getFullYear() + '-' + (startTimeStr.getMonth() + 1) + '-' + startTimeStr.getDate());

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