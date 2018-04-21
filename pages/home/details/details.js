// pages/home/details/details.js
var data = require('../../../data/data.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:{},
    flag:app.MusicStatus
  },
  playmusic(){
    if (this.data.flag){
      wx.playBackgroundAudio({
        dataUrl: 'http://dl.stream.qqmusic.qq.com/C400003UTRfZ12wGOs.m4a?vkey=B26A20475CDA16E6B549B09B68908E2E8F95C5DB091274522B0CEAEA5877C545F99084AFC9331F9B8A9A613D216D6878D5E53216B02E518E&guid=9955202086&uin=0&fromtag=66',
        success:(res)=>{
          this.setData({
            flag:false
          });
          app.MusicStatus = false;
        }
      });
    }else{
    wx.pauseBackgroundAudio({
      success:(rs)=>{
        this.setData({
          flag:true
        });
        app.MusicStatus = true;
      }
    })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面参数的传递
    console.info(options.id);
    var id= options.id;
    var item = data.find((item)=>{
      return item.id == id;
    });
    console.info(item);
    this.setData({
      num:item,
      flag:app.MusicStatus
    });
    /**全局监控播放的事件 */
    wx.onBackgroundAudioPlay(()=>{
      this.setData({
        flag:false
      });
      app.MusicStatus=false;
    });
    wx.onBackgroundAudioPause(()=>{
      this.setData({
        flag:true
      });
      app.MusicStatus = true;
    });
    wx.onBackgroundAudioStop(()=>{
      this.setData({
        flag: true
      });
      app.MusicStatus = true;
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