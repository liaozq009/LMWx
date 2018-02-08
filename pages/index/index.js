//index.js
var common = require('../common/common.js')
var endTime = common.endTime;
var startTime = common.startTime

Page({
  data: {
    activeOw:true,
    activeRt: false,
    fromCityVal:'广州',
    toCityVal:'北京',
    fromCityArray: ['广州', '北京', '上海', '深圳'],
    toCityArray: ['广州', '北京', '上海', '深圳'],
    startDate: startTime,
    startMinDate: startTime,
    startMaxDate:'',
    endDate: endTime,
    endMinDate: startTime,
    endMaxDate: '',
  },
  flightClick:function(e){
    var id = e.currentTarget.dataset.id;
    if(id=='ow'){
      this.setData({
        activeOw: true,
        activeRt:false
      })
    } else if (id == 'rt'){
      this.setData({
        activeOw: false,
        activeRt: true
      })
    }
  },
  selectFromCity:function(e){
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
  changeCity:function(){
    this.setData({
      fromCityVal: this.data.toCityVal,
      toCityVal: this.data.fromCityVal
    })
  },
  selectToCity: function (e) {
    if (this.data.fromCityVal == this.data.toCityArray[e.detail.value]){
      wx.showModal({
        title: '提示',
        content: '出发地和目的地不能一样',
      })
    }else{
      this.setData({
        toCityVal: this.data.toCityArray[e.detail.value]
      })
    }
  },
  changeStartDate:function(e){
    
    this.setData({
      startDate: e.detail.value
    })
  },
  changeEndDate:function(e){
    this.setData({
      endDate: e.detail.value
    })
  },
  searchFlight:function(){
    wx.navigateTo({
      url: '/pages/index/pages/selectFlight/selectFlight',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(getCurrentPages())
    // wx.showLoading({
    //   title: '正在加载...',
    // })
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
    wx.hideLoading();
  },
})
