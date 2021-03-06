// pages/index/pages/confirmFlight/confirmFlight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'LZQ',
    ID:'452227199912283353',
    phone:'17302078169',
    rotateImg: true,
    showpassenger: true,
    rotateImgOrder: true,
    showOrderInfo: true,
    flightList: [
      { id: 'list1', startDate: '02-01 周一', startTime: '07:00', startPlace: '虹桥机场', endDate: '02-01 周一', endTime: '10:00', endPlace: '白云机场', totleTime: '3h', flightNum: 'T866', flightRule: '退改签规则', flightPrice: '900', originalPrice: '1100', childPrice: '680', infantPrice: '480', adultFuel: '50/0', childFuel: '0/0', infantFuel: '0/0' }
    ],
    totlePrice:980,
  },
  flightRule: function () {
    wx.showModal({
      title: '退改签规则',
      content: '改签内容',
    })
  },
  passengerToggle: function () {
    this.setData({
      rotateImg: !this.data.rotateImg,
      showpassenger: !this.data.showpassenger
    })
  },
  orderInfoToggle: function () {
    this.setData({
      rotateImgOrder: !this.data.rotateImgOrder,
      showOrderInfo: !this.data.showOrderInfo
    })
  },
  nextStep:function(){
    wx.navigateTo({
      url: '/pages/index/pages/flightPay/flightPay',
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