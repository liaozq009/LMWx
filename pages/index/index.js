//index.js
Page({
  data: {
    activeOw:true,
    activeRt: false,
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
})
