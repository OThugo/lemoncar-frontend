function formatTime(date) {  
  var year = date.getFullYear()  
  var month = date.getMonth() + 1  
  var day = date.getDate()  
  
  var hour = date.getHours()  
  var minute = date.getMinutes()  
  var second = date.getSeconds()  
  
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')  
}  
  
function formatNumber(n) {  
  n = n.toString()  
  return n[1] ? n : '0' + n  
}  

var rootDocment = 'http://lemoncar.gearhostpreview.com/api/';

var wxAppinfo = {
  'name': '柠檬🚗',
  'logo': 'https://wx.qlogo.cn/mmhead/Q3auHgzwzM41GbicIwic6JOHzehVqd3OubV4GmEQA67KRXyoZ3Y6maHg/0'
};

//修改成你的appid及appsecret
var AppConf = { 'appid': 'wx79e3746d77558308', 'appsecret':'8aae84f3dc6e054bf7fcbaae199b8f83'};

function req(url, data, cb) {
  data.appid = AppConf.appid;
  data.appsecret = AppConf.appsecret; 
    wx.request({  
      url: rootDocment + url,  
      data: data,  
      method: 'post',  
      header: {'Content-Type':'application/x-www-form-urlencoded'},  
      success: function(res){  
        return typeof cb == "function" && cb(res.data)  
      },  
      fail: function(){  
        return typeof cb == "function" && cb(false)  
      }  
    })  
}  
  
function getReq(url,data,cb){ 
    data.appid = AppConf.appid;
    data.appsecret = AppConf.appsecret;
    wx.request({  
      url: rootDocment + url,
      data: data, 
      method: 'get',  
      header: {'Content-Type':'application/x-www-form-urlencoded'},  
      success: function(res){  
        return typeof cb == "function" && cb(res.data)  
      },  
      fail: function(){  
        return typeof cb == "function" && cb(false)  
      }  
    })  
}  
  
// 去前后空格  
function trim(str) {  
  return str.replace(/(^\s*)|(\s*$)/g, "");  
}  
  
// 提示错误信息  
function isError(msg, that) {  
  that.setData({  
    showTopTips: true,  
    errorMsg: msg  
  })  
}  
  
// 清空错误信息  
function clearError(that) {  
  that.setData({  
    showTopTips: false,  
    errorMsg: ""  
  })  
}  

function getDateDiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = dateTimeStamp - now;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
  var result = '';
	if(monthC>=1){
		result="" + parseInt(monthC) + "月后";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周后";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天后";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时后";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟后";
	}else
	result="刚刚";
	return result;
}

function getDateBiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
  var minC = diffValue / minute;
  var result = '';
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else
	result="刚刚";
	return result;
}

function escape2Html(str) { 
 var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}; 
 return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];}); 
} 



module.exports = {  
  formatTime: formatTime,  
  req: req,  
  trim: trim,  
  isError: isError,   
  clearError: clearError,  
  getReq: getReq,
  getDateDiff:getDateDiff,
  escape2Html: escape2Html,
  wxAppinfo: wxAppinfo,
  getDateBiff:getDateBiff
}  