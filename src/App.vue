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
  methods:{
    toggle(){
      this.musicClass.musicani=!this.musicClass.musicani;
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
@-webkit-keyframes rotataZ{
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
