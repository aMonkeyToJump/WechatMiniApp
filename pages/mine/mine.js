Page({
  data:{
    title:'our photos',
    mode:"aspectFit",
    src:"../../img/kouo.jpg",
    imgUrls: [
      '../../icon/mine/fire.png',
      '../../icon/mine/fire_s.png',
      '../../icon/mine/beer_s.png',
      '../../icon/mine/beer.png'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    circular:true,
    duration: 1000
  },
  down_load: function (e) {
    wx.downloadFile({
      url: 'http://c.hiphotos.baidu.com/image/pic/item/54fbb2fb43166d22ed75ace74c2309f79052d247.jpg',
      header: {},
      success: function(res) {
        console.log('download success'+res);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})