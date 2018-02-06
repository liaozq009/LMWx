// pages/index/pages/flightInfo/pages/pasEdit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'LZQ',
    ID: '452227198812283353',
    phone: '17302078169',
    editId: '',
  },
  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  IDInput: function (e) {
    this.setData({
      ID: e.detail.value
    })
  },
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  editBtn: function () {
    var name = this.data.name;
    var ID = this.data.ID;
    var phone = this.data.phone;
    var editId = this.data.editId;
    wx.showLoading({
      title: '修改中',
    })
    setTimeout(function () {
      wx.hideLoading();
      wx.showModal({
        title: '提示',
        content: '修改乘机人成功',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/index/pages/flightInfo/flightInfo?name=' + name + '&ID=' + ID + '&phone=' + phone + '&editId=' + editId + '',
            })
          }
        }
      })
    }, 6000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name,
      ID: options.ID,
      phone: options.phone,
      editId: options.editId,
    })
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