// pages/events/note-detail/note-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    content:''
  },
  val1(e) {
    this.setData({
      title:e.detail.value
    })
   },
  val2(e){
    this.setData({
      content: e.detail.value
    })
  },
  savecontent(){
    var obj = {title:this.data.title,content:this.data.content};
    var lists = wx.getStorageSync('lists')||[];
    lists.push(obj);
    wx.setStorageSync('lists', lists);
    wx.navigateBack({});
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