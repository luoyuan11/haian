<template>
  <div class="adv">
    <div class="davTop">
      <img src="/static/img/adv/01.jpg" alt width="100%">
      <img src="/static/img/adv/0.png" alt class="adv_1 wow flowDown" width="100%" >
    </div>
    <div class="advMild">
      <img src="/static/img/adv/02.jpg" alt width="100%">
      <img src="/static/img/adv/t1.png" alt class="adv_t1 wow fadeIn">
      <img src="/static/img/adv/tt1.png" alt class="adv_tt1 wow fadeIn">
      <img src="/static/img/adv/cha1.gif" alt class="adv_cha1">
      <img src="/static/img/adv/cha2.gif" alt class="adv_cha2">
      <img src="/static/img/adv/4.png" alt="" class="girl_max wow bounceInLeft">
      <img src="/static/img/adv/3.png" alt="" class="adv_shui wow bounceInRight">
      <img src="/static/img/adv/1.png" alt="" class="advMild_word wow bounceInRight">
      <img src="/static/img/adv/he.png" alt="" class="adv_he wow fadeIn">
    </div>
    <div class="advCod">
      <img src="/static/img/adv/03.jpg" alt>
      <img src="/static/img/adv/t2.png" alt class="adv_t2 wow fadeIn">
      <img src="/static/img/adv/tt2.png" alt class="adv_tt2 wow fadeIn">
      <img src="/static/img/adv/girl.png" alt class="adv_girl wow fadeIn">
      <img src="/static/img/adv/8.png" alt="" class="advCod_word wow bounceInRight">
    </div>
    <div class="advDoen">
      <img src="/static/img/adv/05.webp" alt>
      <img src="/static/img/adv/t3.png" alt class="adv_t3 wow fadeIn">
      <img src="/static/img/adv/tt3.png" alt class="adv_tt3 wow fadeIn">
     <img src="/static/img/adv/1drink.png" alt class="adv_1drink wow fadeIn slower">
      <img src="/static/img/adv/2Water-waves.png" alt class="adv_2waves wow bounceInRight  ">
      <img src="/static/img/adv/copy1.png" alt="" class="adv_copy1 wow bounceInRight">
      <img src="/static/img/adv/copy2.png" alt="" class="adv_copy2 wow bounceInLeft">
    </div>
    <div class="advFile">
      <img src="/static/img/adv/07.jpg" alt>
      <img src="/static/img/adv/copy3.png" alt="" class="adv_copy3 wow flowDown">      
    </div>
    <div class="advGood">
      <img src="/static/img/adv/08.jpg" alt>
      <img src="/static/img/adv/t4.png" alt class="adv_t4 wow fadeIn">      
      <img src="/static/img/adv/tt4.png" alt class="adv_tt4 wow fadeIn">      
    </div>
    <div class="advHight">
      <img src="/static/img/adv/09.jpg" alt>
      <img src="/static/img/adv/label.png" alt="" class="adv_word1  wow fadeIn ">
      <router-link to="/product" tag="div" class="next_bg "> <img src="/static/img/adv/next_button2.png" alt="" class="adv_next wow flash infinite linear" ></router-link>
    </div>
    <GOMenu class="wow bounceInDown"></GOMenu>
  </div>
</template>

<script>
  import GOMenu from '../components/Menu.vue'
  import lazyload from "vue-lazyload"
  import {WOW} from 'wowjs'
  export default {
  name: "Adv",
    components: {
      GOMenu
    },
    mounted() {
     new WOW({
        boxClass:"wow",
        animateClass:"animation",
        offset:50,
        mobile:true,
        live:false
      }).init()
    }
  }
</script>

<style>
.xian{
  height: 0.01rem;
  width: 100%;
  background: #000;
}
.adv {
  width: 100%;
  overflow-x: hidden;
}
.davTop {
  width: 100%;
  height: 4.62rem;
  position: relative;
}
.advMild {
  position: relative;
}
.adv_1 {
  height: 4rem;
  width: 3rem;
  position: absolute;
  left: 0rem;
  bottom: 0.2rem;
}
.adv_t1 {
  position: absolute;
  top: 0.2rem;
}
.adv_tt1,
.adv_tt2 {
  position: absolute;
  top: 0.2rem;
  width: 3rem;
  left: 0.375rem;
}
.adv_cha1 {
  position: absolute;
  width: 1.7rem;
  height: 0.95rem;
left: 0.15rem;
    bottom: 1rem;
}
.adv_cha2 {
  position: absolute;
  width: 2rem;
  height: 1.135rem;
  right: 0.2rem;
  bottom: 0.65rem;;
}
.girl_max{
  position: absolute;
  top:1.7rem;
  left: 0.18rem;
 width: 1.68rem;
	height: 2.51rem;
}
.advCod {
  position: relative;
}
.adv_t2 {
  position: absolute;
  top: 0.2rem;
}
.adv_girl {
  position: absolute;
  width: 0.715rem;
  height: 1.1rem;
  left: 0.9rem;
  bottom: 1rem;
  animation-delay: 0.5s;
}
.adv_shui{
  position: absolute;
  top: 1.7rem;
  width: 1.58rem;
  height: 1.52rem;
  right: 0.1rem;
}
.advMild_word{
  position: absolute;
  width: 1.51rem;
  height: 0.75rem;top: 3.35rem;
  right: 0.24rem;
}
.adv_he{
  position: absolute;
  left: 1.8rem;
  top: 1.7rem;
  	width: 0.65rem;
  height: 0.43rem;
  animation-delay: 0.5s;
}
.advCod_word{
  position: absolute;
    bottom: 0.25rem;
  left: 1rem;
  width: 2.59rem;
	height: 0.53rem;
}
.advDoen {
  position: relative;
}
.adv_t3,.adv_t4 {
  position: absolute;
  width: 0.6rem;
  height: 0.6rem;
  top: 0;
  left: 50%;
  margin-left: -0.3rem;
}
.adv_tt3 ,.adv_tt4{
  position: absolute;
  width: 3rem;
  height: 0.43rem;
  top: 0.95rem;
  left: 50%;
  margin-left: -1.5rem;
}
.adv_copy1{
  position: absolute;
  width: 1.125rem;
	height: 0.955rem;
  top: 2rem;
  right: 0.2rem;
}

.adv_copy2{
  position: absolute;
  	width: 1.125rem;
	height: 0.955rem;
  top: 4.2rem;
    left: 0.2rem;
}
.advElie {
  position: relative;
}
.adv_1drink {
  position: absolute;
  bottom: 0.15rem;
  left: 0.25rem;
  animation-delay: 0.5s;
}
.adv_2waves {
  width: 3.45rem;
  height: 1.8rem;
  position: absolute;
  bottom: 0.18rem;
  right: 0;
}
.advFile{
  position: relative;
}
.adv_copy3{
  position:absolute;
  top: 0;
  left: 50%;
  width: 2.7rem;
	height: 0.955rem;
  margin-left: -1.35rem;
}
.advGood{
    position: relative;
}
.advHight{
  position: relative;
}
.adv_word1{
  position: absolute;
  width: 2.15rem;
  height: 1.35rem;
  top: 0;
left: 50%;
margin-left:-1.075rem;
top: 50%;
margin-top: -0.675rem;
animation-duration: 2s;
}
.adv_next{
  /* bottom: 0.5rem; */
  animation-duration: 2.8s;
  width: 100%;
}
.next_bg{
    position: absolute;
    left: 50%;
    margin-left: -0.48rem;
    bottom: 0.5rem;
    width: 0.955rem;
    height: 0.35rem;
    background: url(/static/img/adv/next_button.png);
    background-size: 100%;
}
</style>
