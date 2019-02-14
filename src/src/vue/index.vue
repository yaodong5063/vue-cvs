<template lang="html">
	<canvas class="canvas" :id="id" :width="obj.width" :height="obj.height"></canvas>	
</template>	
<script>
//requestAnimFrame方法
if(typeof requestAnimFrame==='undefined'){
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
      function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
        return window.setTimeout(callback, 1000 / 60);
      };
  })();
};
//以下都是倍数
//num为一个动画运动次数，越大越流畅
//width宽度倍数,height高度倍数,spdUp上下移动速度,spdAng角度移动速度,spdLeft左右移动速度,time为延迟动画时长,img为画布图片
export default {
	name:'canvasName',
	props: {
    id:{
      type:String
    },
    options:{
      type:Array
    },
    num:{
      type:Number
    },
    end:{
      type:Boolean
    }
	},
  data(){
    return {
      rNum:0.0034,
      speed:1,
			numOne:0,
			numbol:false,
			w:0,
      h:0,
      centerW:0,
      centerH:0,
      zoomX:1,
      zoomY:1,
			img:new Image(),
      cxt:{},
      clearTime:null,
      arr:0,
      obj:{
        id:'canvas',  //canvas的id
        width:0, //宽度
        height:0, //高度
        spdUp:0,  //上下移动速度
        spdAng:0, //角度移动速度
        spdLeft:0, //左右移动速度
        time:0,  //延迟移动速度
        img:'',  //移动的图片
        imgW:0,//移动图片的宽度
        imgH:0,//移动图片的高度
        zoomX:1,  //缩放宽度
        zoomY:1,  //缩放高度
      },
      n:0,
    }
  },
  watch:{
    obj(){
      
    }
  },
  mounted(){
    this.n=!!this.num?this.num:50; //num没值默认为50
    Object.assign(this.obj,this.options[this.arr]);
    this.clearTime=setTimeout(()=>{this.canvasImg();},this.obj.time); 
	},
  methods:{
     call(){
      //初始化数值
      this.zoomX=1
      this.zoomY=1;
      this.numOne=0;
			this.numbol=false;
			this.w=0;
      this.h=0;
      this.centerW=0;
      this.centerH=0;
      clearTimeout(this.clearTime);
      this.clearTime=setTimeout(()=>{this.canvasImg();},this.obj.time);
      
      console.log(1);
     },
     canvasImg(){
        let canvas=document.getElementById(this.id);
        this.w= canvas.width;
        this.h=canvas.height;
        this.cxt=canvas.getContext('2d');
        this.img.src=this.obj.img;
        // this.centerW=0.5 * (this.w-this.obj.imgW*this.zoomX);
        // this.centerH=0.5 * (this.h-this.obj.imgH*this.zoomY);
        this.img.onload=()=>{
          //this.cxt.translate(this.centerW,this.centerH);
          this.imgs();
        }; 
        
        
		},
		imgs(){
       this.centerW=0.5 * (this.w-this.obj.imgW*this.zoomX);
       this.centerH=0.5 * (this.h-this.obj.imgH*this.zoomY);
       const x=(this.obj.zoomX-1)/this.n;
       const y=(this.obj.zoomY-1)/this.n;  
       
       if(this.numOne>=this.n) {
         this.numbol=false;
         if(this.options.length>1 && this.arr<this.options.length-1){
            this.arr++;
            Object.assign(this.obj,this.options[this.arr]);
            this.call();
            return !1;
         }else if(this.arr>=this.options.length-1&&this.options.length>1){
            this.arr=0; 
            Object.assign(this.obj,this.options[this.arr]);
            this.call();
            return !1;
         }
       }
       if(this.numOne<=-this.n) this.numbol=true;
       this.cxt.clearRect(0,0 ,this.w,this.h);
       if(this.numbol){
         this.numOne++;
         this.cxt.rotate(this.rNum*this.obj.spdAng); 
         this.zoomX+=x;
         this.zoomY+=y; 
         
       }else{
         this.numOne--;
         this.cxt.rotate(-this.rNum*this.obj.spdAng); 
         this.zoomX-=x;
         this.zoomY-=y; 
         
       }
       
       let numC=this.numOne * this.speed*this.obj.spdUp;
       let numW=this.numOne * this.speed*this.obj.spdLeft;
       
       
       this.cxt.drawImage(this.img,this.centerW+numW,this.centerH+numC,this.obj.imgW*this.zoomX,this.obj.imgH*this.zoomY);
      
       
       if(this.end) return !1;
       //console.log(this.id);
       requestAnimFrame(this.imgs);
       
    }

  }
};

</script>
