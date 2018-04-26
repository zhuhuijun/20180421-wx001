// pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      date:'14:00',
      time:'2018-03-23',
      array:['吃','喝','玩'],
      item:'',
      foods:['米饭','面条','肉'],
      drinks:['可乐','雪碧','绿茶']
  },
  changedate(e){
    this.setData({
      date:e.detail.value
    })
  },
  changedatetime(e){
    this.setData({
      time: e.detail.value
    })
  },
  changeitem(e){
    this.setData({
      item: this.data.array[e.detail.value]
    })
  },
  picks(e){
    console.info(e);
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
      this.setData({
        item:this.data.array[0]
      })
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