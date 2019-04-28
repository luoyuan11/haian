<template>
  <div id="app">
    <div v-bind:class="musicClass" @click="toggle">
      <audio controls="controls" autoplay="autoplay" id="au" hidden="hidden">
          <source src="static/music/Lend_me.mp3">
          <embed height="50px" width="100px" src="static/music/Lend_me.mp3">
      </audio>
  </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App',
  data:function(){
    return {
      musicClass:{
        music_pic:true,
        musicani:true
      }
    }
  },
  mounted(){
     // 播放音频
    var voice = document.getElementById('au');
    //调用 <audio> 元素提供的方法 play()
    voice.play();
    //判斷 WeixinJSBridge 是否存在
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        voice.play();
    } else {
        //監聽客户端抛出事件"WeixinJSBridgeReady"
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", function () {
                voice.play();
            }, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", function () {
                voice.play();
            });
            document.attachEvent("onWeixinJSBridgeReady", function () {
                voice.play();
            });
        }
    }
    //voiceStatu用來記録狀態,使 touchstart 事件只能觸發一次有效,避免與 click 事件衝突
    var voiceStatu = true;
    //监听 touchstart 事件进而调用 <audio> 元素提供的 play() 方法播放音频
    document.addEventListener("touchstart", function (e) {
        if (voiceStatu) {
            voice.play();
            voiceStatu = false;
        }
    }, false);
  },
  methods:{
    play_stop(){
    var audio = document.getElementById('au'); 
    if(audio!==null){             
       //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
     if(audio.paused)                     {                 
         audio.play();//audio.play();// 这个就是播放  
     }else{
      audio.pause();// 这个就是暂停
     }
    } 
   },
    toggle(){
      this.musicClass.musicani=!this.musicClass.musicani;
      this.play_stop();
    }
  }
}

</script>

<style>

.music_pic{
  width:0.33rem;
  height:0.33rem;
  position:fixed;
  background: url(/static/music/music_icon.png) no-repeat;
  background-size:100%;
  z-index:9999;
  right:0.2rem;
  top:1rem;
}
.musicani{
  animation:reverseRotataZ 1.2s linear infinite;
  -webkit-animation:reverseRotataZ 1.2s linear infinite;
}

@-webkit-keyframes reverseRotataZ{
    0%{-webkit-transform: rotateZ(0deg);}
    100%{-webkit-transform: rotateZ(-360deg);}
}
@keyframes reverseRotataZ{
    0%{-webkit-transform: rotateZ(0deg);}
    100%{-webkit-transform: rotateZ(-360deg);}
}
@-webkit-keyframes rotataZ{
    0%{-webkit-transform: rotateZ(0deg);}
    100%{-webkit-transform: rotateZ(360deg);}
}
@keyframes rotataZ{
    0%{-webkit-transform: rotateZ(0deg);}
    100%{-webkit-transform: rotateZ(360deg);}
}
#app {
  overflow-x: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
