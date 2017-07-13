// //index.js
// //获取应用实例
// var app = getApp()
// Page({
//   data: {
//     headNum: 1,
//     navNum: 1,
//     navBorder: "navBorder",
//     siteList: [
//       { url: "../../imgs/1.jpg", msg: "小丸子呀小丸子!" },
//       { url: "../../imgs/2.jpg", msg: "萌萌哒小丸子呀萌萌" },
//       { url: "../../imgs/3.jpg", msg: "小丸子呀小丸子!" },
//       { url: "../../imgs/4.jpg", msg: "萌萌哒小丸子呀萌萌" },
//       { url: "../../imgs/1.jpg", msg: "小丸子呀小丸子!" },
//       { url: "../../imgs/1.jpg", msg: "萌萌哒小丸子呀萌萌" },
//       { url: "../../imgs/3.jpg", msg: "小丸子呀小丸子!" },
//       { url: "../../imgs/4.jpg", msg: "萌萌哒小丸子呀萌萌" },
//       { url: "../../imgs/1.jpg", msg: "小丸子呀小丸子!" },
//       { url: "../../imgs/3.jpg", msg: "小丸子呀小丸子!" },
//       { url: "../../imgs/4.jpg", msg: "萌萌哒小丸子呀萌萌" },
//       { url: "../../imgs/1.jpg", msg: "小丸子呀小丸子!" }
//     ],
//     footList: [
//       { name: "首页", icon: "", link: "" },
//       { name: "发现", icon: "", link: "" },
//       { name: "我的", icon: "", link: "" },
//       { name: "登录", icon: "", link: "/pages/login/login" }
//     ]
//   },
//   leftHandleClick(){
//     this.setData({
//       headNum: 1
//     })
//   },
//   RightHandleClick(){
//     this.setData({
//       headNum: 2
//     })
//   },
//   leftNavClick(){
//     this.setData({
//       navNum: 1,
//       navBorder: "navBorder",
//       navBorder1: "",
//       navBorder2: "",
//     })
//   },
//   midNavClick(){
//     this.setData({
//       navNum: 2,
//       navBorder: "",
//       navBorder1: "navBorder",
//       navBorder2: "",
      
//     })
//   },
//   rightNavClick(){
//     this.setData({
//       navNum: 3,
//       navBorder: "",
//       navBorder1: "",
//       navBorder2: "navBorder",
//     })
//   }
// })
//index.js
//获取应用实例
var app = getApp()
Page({
  onLoad(options) {
    this.setData({
      userName: options.userName
    })
  },
  data: {
    userName: "123",
    currentTab: 0,
    headNum: 1,
    arr: [
      {
        img: "../../imgs/1.jpg",
        text: "小丸子呀小丸子"
      },
      {
        img: "../../imgs/2.jpg",
        text: "萌萌哒小丸子"
      },
      {
        img: "../../imgs/3.jpg",
        text: "小丸子啊萌萌哒"
      },
      {
        img: "../../imgs/4.jpg",
        text: "小丸子呀小丸子"
      },
      {
        img: "../../imgs/2.jpg",
        text: "萌萌哒小丸子"
      },
      {
        img: "../../imgs/3.jpg",
        text: "小丸子啊萌萌哒"
      },
      {
        img: "../../imgs/4.jpg",
        text: "小丸子呀小丸子"
      },
      {
        img: "../../imgs/1.jpg",
        text: "小丸子呀小丸子"
      },
    ],
    life: [
      {
        img: "../../imgs/img01.jpg",
        text: "徐云龙争顶！"
      },
      {
        img: "../../imgs/img02.jpg",
        text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
      },
      {
        img: "../../imgs/img02.jpg",
        text: "徐云龙争顶！"
      },
      {
        img: "../../imgs/img01.jpg",
        text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
      },
      {
        img: "../../imgs/img02.jpg",
        text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
      },
      {
        img: "../../imgs/img01.jpg",
        text: "徐云龙争顶！"
      },
      {
        img: "../../imgs/img02.jpg",
        text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
      },
      {
        img: "../../imgs/img01.jpg",
        text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
      },]
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  switchTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current - 0
    })
  },
    leftHandleClick(){
    this.setData({
      headNum: 1
    })
  },
  RightHandleClick(){
    this.setData({
      headNum: 2
    })
  },
})

