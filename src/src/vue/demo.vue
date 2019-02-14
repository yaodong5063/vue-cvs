<template lang="html">
<div>
<cvs :options="obj" :id="'canvas'" :num="num" :end="end"></cvs>
  <cvs :options="obj1" :id="'canvas1'"  :num="num" :end="end"></cvs>
</div>
	
</template>	
<script>
import cvs from './index.vue'
export default {
	name:'canvasNames',
  data(){
    return {
      num:40, //每组动画运动次数
      obj:[{
        width:300, //宽度
        height:300, //高度
        spdUp:0,  //上下移动速度
        spdAng:1, //角度移动速度
        spdLeft:0, //左右移动速度
        time:200,  //延迟移动速度
        img:'../timg.jpg',  //移动的图片
        imgW:140,//移动图片的宽度
        imgH:140,//移动图片的高度
        zoomX:1,  //缩放宽度
        zoomY:1,  //缩放高度
      }],
      obj1:[{
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
      },{
        width:500, //宽度
        height:300, //高度
        spdUp:0,  //上下移动速度
        spdAng:1, //角度移动速度
        spdLeft:0, //左右移动速度
        time:1000,  //延迟移动速度
        img:'../timg.jpg',  //移动的图片
        imgW:140,//移动图片的宽度
        imgH:100,//移动图片的高度
        zoomX:1.2,  //缩放宽度
        zoomY:1.1,  //缩放高度
      },{
        width:500, //宽度
        height:300, //高度
        spdUp:1,  //上下移动速度
        spdAng:0, //角度移动速度
        spdLeft:0, //左右移动速度
        time:1000,  //延迟移动速度
        img:'../timg.jpg',  //移动的图片
        imgW:140,//移动图片的宽度
        imgH:100,//移动图片的高度
        zoomX:1,  //缩放宽度
        zoomY:1,  //缩放高度
      }],
      end:false
    }
  },
  components:{
	  cvs
  },
  mounted(){
    
	},
  methods:{
     

  }
};

</script>
