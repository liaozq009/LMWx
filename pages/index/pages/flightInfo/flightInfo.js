// pages/index/pages/flightInfo/flightInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flightList: [
      { id: 'list1', startDate: '02-01 周一', startTime: '07:00', startPlace: '虹桥机场', endDate: '02-01 周一', endTime: '10:00', endPlace: '白云机场', totleTime: '3h', flightNum: 'T866', flightRule: '退改签规则', flightPrice: '900', originalPrice: '1100', childPrice: '680', infantPrice: '480', adultFuel: '50/0', childFuel: '0/0', infantFuel: '0/0'}
    ],
    passengerInfo: [{ iconId: 'pas1', iconType: 'cancel', iconSize: '20', name: '廖章泉', IDTitle:'身份证:',ID: '452227199912283353', phone:'17302078169',src:'../common/images/edit.png',editId:'edite1'}],
    rotateImg:false,
    showInsurance:false,
    radioChecked:false,
    insurance:'不需要',
    insuranceInfo:'不需要',
    insurancePrice:'￥30元/人',
    agreeArray: [{ value: '1', name: '同意澜湄航空条款', checked: false}],
  },
  flightRule:function(){
    wx.showModal({
      title: '退改签规则',
      content: '改签内容',
    })
  },
  insuranceToggle:function(){
    this.setData({
      rotateImg: !this.data.rotateImg,
      showInsurance: !this.data.showInsurance
    })
  },
  radioToggle:function(e){
    var radioChecked = this.data.radioChecked;
    var insuranceInfo = this.data.insuranceInfo;
    if (radioChecked){
      radioChecked=false;
      insuranceInfo = this.data.insurance;
    }else{
      radioChecked = true;
      insuranceInfo = this.data.insurancePrice;
    }
    this.setData({
      radioChecked: radioChecked,
      insuranceInfo: insuranceInfo
    })
  },
  addPassenger:function(){
    this.setData({
      passengerInfo: [{ iconId: 'pas1', iconType: 'cancel', iconSize: '20', name: '廖章泉', IDTitle: '身份证:', ID: '452227199912283353', phone: '17302078169', src: '../common/images/edit.png', editId: 'edite1' }]
    })
  },
  deletePassenger:function(){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '删除联系人',
      success:function(res){
        if (res.confirm){
          that.setData({
            passengerInfo:[]
          })
        }
      }
    })
  },
  editPassenger:function(e){
    var passengerInfo = this.data.passengerInfo;
    for (var i = 0, len = passengerInfo.length; i<len; i++){
      if (e.currentTarget.dataset.id == passengerInfo[i].editId){
        var name = passengerInfo[i].name;
        var ID = passengerInfo[i].ID;
        var phone = passengerInfo[i].phone;
        var editId = passengerInfo[i].editId;
        wx.navigateTo({
          url: '/pages/index/pages/flightInfo/pages/pasEdit?name=' + name + '&ID=' + ID + '&phone=' + phone + '&editId='+editId +'',
        })
      }
    }
  },
  insuranceTip:function(){
    wx.showModal({
      title: '保险条款',
      content: '保险内容',
    })
  },
  agreeClause:function(e){
    var agreeArray = this.data.agreeArray;
    if (e.detail.value[0]==1){
      agreeArray[0].checked=true
    }else{
      agreeArray[0].checked = false
    }
    this.setData({
      agreeArray: agreeArray
    })
  },
  nextStep:function(){
    var checked = this.data.agreeArray[0].checked;
    if(checked){
      wx.navigateTo({
        url: '/pages/index/pages/confirmFlight/confirmFlight',
      })
    }else{
      wx.showModal({
        title: '温馨提示',
        content: '您必须同意澜湄航空条款才能继续',
        success:function(res){
          if(res.confirm){

          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    var passengerInfo = this.data.passengerInfo;
    var name = options.name;
    var ID = options.ID;
    var phone = options.phone;
    var editId = options.editId;

    for (var i = 0, len = passengerInfo.length; i < len; i++) {
      if (editId == passengerInfo[i].editId) {
        passengerInfo[i].name=name;
        passengerInfo[i].ID=ID;
        passengerInfo[i].phone = phone;
        
        this.setData({
          passengerInfo: passengerInfo
        })
      }
    }
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