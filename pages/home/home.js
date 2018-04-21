// pages/home/home.js
var pagedata = require('../../data/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  imgs:['/images/21.jpeg',
    '/images/25.jpg',
    '/images/26.jpg'],
    lists:[]
  },
  toDetail(e){
    console.info(e.currentTarget.dataset.uid);
    wx.navigateTo({
      url: 'details/details?id='+e.currentTarget.dataset.uid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options中的参数
    console.info(pagedata);
    this.setData({lists:pagedata});
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