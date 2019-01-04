// pages/register/register.js

Page({
  target:"../conversation/conversation",
  skip:function(event){
    console.log("register success!")
    wx.switchTab({
      url: '../conversation/conversation',
    })
    }
})
data:{
  url:"pages/register/register"
}


