//index.js
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
var endTimeStr = new Date(today.getTime() + 86400000 * 3);
var endTime = formatDate(endTimeStr.getFullYear() + '-' + (endTimeStr.getMonth() + 1) + '-' + (endTimeStr.getDate()));

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
  onLoad: function () {
    
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
})
