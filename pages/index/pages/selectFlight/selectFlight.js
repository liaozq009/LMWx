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
    flightList:[
      { id: 'list1',open:false, startTime: '07:00', startPlace: '虹桥机场', endTime: '10:00', endPlace: '白云机场', totleTime: '3h', flightNum: 'T866', flightPrice: '900', originalPrice: '1100', flightDetail: { title: '自由飞', weight: '15kg行李额', remark: '可退可改', price: '900', reserve:'预定'}},
      { id: 'list2', open: false,  startTime: '09:00', startPlace: '虹桥机场', endTime: '12:00', endPlace: '白云机场', totleTime: '3h', flightNum: 'T966', flightPrice: '1000', originalPrice: '1200', flightDetail: { title: '自由飞', weight: '20kg行李额', remark: '可退可改', price: '1000', reserve: '预定' }},
    ],
  },
  priceToggle:function(e){
    var id = e.currentTarget.id, list = this.data.flightList;
    for (var i = 0, len=list.length; i<len; ++i){
      if(id==list[i].id){
        list[i].open = !list[i].open
      }else{
        list[i].open=false
      }
    }
    this.setData({
      flightList: list
    })
  },
  reserveBtn:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/index/pages/flightInfo/flightInfo?id='+id+'',
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