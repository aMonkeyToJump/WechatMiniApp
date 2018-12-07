// pages/future/future.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems:[
      { content: '周一吃饭', checked: false },
      { content: '周二上班吃饭', checked: false},
      { content: '周三吃饭打豆豆', checked: false},
      { content: '周四烤鸭啤酒', checked: true},
      { content: '周五烧烤KTV', checked: true},
      { content: '周六躺尸一天', checked: true},
      { content: '周日继续躺尸一天', checked: true}
    ],
    inputValue:"",
    focus:true
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
  
  },

  /**
   * 点击每一条List内容
   */
  checkboxChange:function(e){
    var checked = e.detail.value;//返回checked==true的内容
    var changed = {};
    for (var i = 0; i < this.data.checkboxItems.length;i++){
      if (checked.indexOf(this.data.checkboxItems[i].content)!==-1){
        changed['checkboxItems['+i+'].checked'] = true;
      }else{
        changed['checkboxItems[' + i + '].checked'] = false;
      }
    }
    this.setData(changed);

    var new_items = [];
    //重新排序，未做的排在前
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (this.data.checkboxItems[i].checked){
        new_items.push(this.data.checkboxItems[i]);      
      }else{
        new_items.unshift(this.data.checkboxItems[i]);
      }     
    }

    this.setData({
      "checkboxItems": new_items
    });
    
  },
  formSubmit:function(e){
    var inputValue = e.detail.value.mingcheng;

    var todo_list = this.data.checkboxItems;

    var done = false;

    var repeat = false;

    for(var i = 0;i<todo_list.length;i++){
      //如果添加重复
      if (todo_list[i].content === inputValue){
        repeat = true;
        break;
      }
    }

    for (var j = 0; j < todo_list.length; j++) {
      //如果添加重复
      if (todo_list[j].checked) {
        done = true;
        break;
      }
    }
    //如果有做完的且没有重复
    if (done && !repeat){
      //删除最后一条已经做过的事情
      todo_list.pop();

      //在第一的位置添加输入的将要做的事情
      todo_list.unshift({ content: inputValue, checked: false });

      this.setData({
        "checkboxItems": todo_list
      });
    }else{
      wx.showToast({
        title:"添加被阻止！"
      });
    }


    
  }
})