# vue-cvs
vue的canvas的左右，上下移动，角度，缩放动作组件
主要传参为id //canvas的id  为字符串
options  //主要配置参数  为数组  里面参数
   width:500, //宽度
  height:300, //高度
  spdUp:0,  //上下移动速度
  spdAng:0, //角度移动速度
  spdLeft:1, //左右移动速度
  time:1000,  //延迟移动速度
  img:'../timg.jpg',  //移动的图片
  imgW:140,//移动图片的宽度
  imgH:100,//移动图片的高度
  zoomX:1.1,  //缩放宽度
  zoomY:1.1,  //缩放高度
//num  为一个动画运动次数，越大越流畅
//end:false   true为终止循环，false为开始循环,默认false

import cvs from './index.vue'
components:{
	  cvs
} 
<cvs :options="obj" :id="'canvas'" :num="num" :end="end"></cvs>

