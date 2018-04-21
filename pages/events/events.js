// pages/events/events.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notes: [],
    index: 1,
    flag: false
  },
  bindToDetail() {
    wx.navigateTo({
      url: 'note-detail/note-detail',
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
    var notes = wx.getStorageSync('lists');
    this.setData({
      notes: notes.slice(0, this.data.index * 4).reverse()
    });
  },
  lazyLoad() {
    this.setData({ flag: true });
    var index = this.data.index + 1;
    var notes = wx.getStorageSync('lists');
    setTimeout(() => {
      this.setData({
        notes: notes.slice(0, this.data.index * 4).reverse(),
        index,
        flag: false
      });
    }, 1000);
  },
  clearcontent() {
    //处理界面
    wx.showModal({
      title: '删除',
      content: '确认删除数据？',
      success: (res) => {
        if (res.confirm) {
          wx.clearStorageSync();
          this.setData({
            notes: []
          });
          wx.showToast({
            title: '删除成功',
          });
        }
      }
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
    console.info('oooooooooooooooooo');
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1000);
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