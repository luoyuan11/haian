<template>
  <div class="inv">
    <div class="inv_about">
      <img src="static/img/inv/01.jpg" alt>
      <img src="static/img/inv/0.png" alt class="inv_1 inv_img wow fadeIn">
      <img src="static/img/inv/01.png" alt class="inv_2 inv_img">
      <img src="static/img/inv/t1_1.png" alt class="inv_3 inv_img wow bounceInLeft">
      <img src="static/img/inv/t1_2.png" alt class="inv_4 inv_img wow bounceInRight">
      <img src="static/img/inv/t1_p1.png" alt class="inv_5 inv_img wow fadeIn">
      <img src="static/img/inv/t1_word.png" alt class="inv_6 inv_img wow bounceInLeft">
      <img src="static/img/inv/t1_p2.png" alt class="inv_7 inv_img wow bounceInRight">
    </div>
    <div class="inv_about">
      <img src="static/img/inv/02.jpg" alt>
      <img src="static/img/inv/t2_1.png" alt class="inv_8 inv_img wow bounceInLeft">
      <img src="static/img/inv/t2_2.png" alt class="inv_9 inv_img wow bounceInRight">
      <img src="static/img/inv/t2_p1.png" alt class="inv_10 inv_img wow fadeIn">
      <img src="static/img/inv/t2_p2.png" alt class="inv_11 inv_img wow bounceInRight">
      <img src="static/img/inv/t2_fly.png" alt class="inv_12 inv_img">
      <img src="static/img/inv/t2_word.png" alt class="inv_13 inv_img wow bounceInLeft">
      <img src="static/img/inv/t2_p3.png" alt class="inv_14 inv_img wow fadeIn">
    </div>
    <div class="inv_about">
      <img src="static/img/inv/03.jpg" alt>
      <img src="static/img/inv/t3_2.png" alt class="inv_img inv_15 wow  bounceInLeft">
      <img src="static/img/inv/t3_1.png" alt class="inv_img inv_16  wow bounceInRight">
      <img src="static/img/inv/t3_p1.png" alt class="inv_img inv_17 wow fadeIn">
      <img src="static/img/inv/t3_word.png" alt class="inv_img inv_18 wow  bounceInLeft">
      <img src="static/img/inv/t3_fly.png" alt class="inv_img inv_19 wow floatUD infinite liner slow">
    </div>
    <div class="inv_about">
      <img src="static/img/inv/04.jpg" alt>
      <img src="static/img/inv/sub-btm.png" alt class="inv_img inv_20">
      <img src="static/img/inv/sub-btm2.png" alt class="inv_img inv_21">
    </div>
    <div class="inv_about">
      <img src="static/img/inv/05.jpg" alt>
      <img src="static/img/inv/t4_1.png" alt class="inv_img inv_22 wow  bounceInLeft">    
      <img src="static/img/inv/t4_2.png" alt class="inv_img inv_23 wow  bounceInRight">    
    </div>
    <div class="inv_about">
      <img src="static/img/inv/06.jpg" alt>
      <img src="static/img/inv/word.png" alt class="inv_img inv_24 wow floatUD infinite">
      <router-link to="/support" tag="div" class="inv_25 inv_img "><img src="/static/img/adv/next_button2.png" alt class="wow flash infinite slower"> </router-link>  
    </div>
    <GOMenu class="wow bounceInDown"></GOMenu>
  </div>
</template>

<script>
import GOMenu from "../components/Menu.vue";
import lazyload from "vue-lazyload";
import { WOW } from "wowjs";
export default {
  name: "Adv",
  components: {
    GOMenu
  },
  mounted() {
    new WOW({
      boxClass: "wow",
      animateClass: "animation",
      offset: 50,
      mobile: true,
      live: false
    }).init();
  }
};
</script>
<style>
.inv_about {
  position: relative;
}
.inv_img {
  position: absolute;
  /* width: auto; */
}
.inv_1 {
  position: absolute;
  width: 2.4rem;
  height: 3rem;
  right: 0;
  top: 1.75rem;
}
.inv_2 {
  left: 0.2rem;
  top: 4.5rem;
  width: 0.27rem;
}
.inv_3 {
  width: auto;
  top: 4.8rem;
  left: 50%;
  margin-left: -0.775rem;
  width: 1.55rem;
  height: 0.5rem;
}
.inv_4 {
  top: 5.6rem;
  left: 50%;
  margin-left: -1.38rem;
  width: 2.77rem;
}
.inv_5 {
  top: 6.2rem;
  left: 50%;
  width: 3.3rem;
  margin-left: -1.65rem;
}
.inv_6 {
  bottom: 0.5rem;
  left: 0.2rem;
  width: 2.18rem;
  height: 0.84rem;
}
.inv_7 {
  width: 1.06rem;
  height: 0.92rem;
  bottom: 0.5rem;
  right: 0.2rem;
}
.inv_8 {
  top: 0.5rem;
  left: 50%;
  margin-left: -0.775rem;
  width: 1.55rem;
  height: 0.5rem;
}
.inv_9 {
  top: 1.25rem;
  left: 50%;
  margin-left: -1.38rem;
  width: 2.77rem;
}
.inv_10 {
  top: 2.3rem;
  left: 0;
  width: 100%;
}
.inv_11 {
  width: 1.21rem;
  height: 2.43rem;
  right: 0.2rem;
  top: 2.1rem;
}
.inv_12 {
  width: 0.72rem;
  height: 0.98rem;
  top: 1.8rem;
  left: 0;
  animation: 2s bounceInLeft linear,2s floatUD infinite  linear;
}
.inv_13 {
  width: 2.87rem;
  height: 0.63rem;
  left: 50%;
  margin-left: -1.435rem;
  top: 4.8rem;
}
.inv_14 {
  width: 3.4rem;
  height: 1.7rem;
  left: 50%;
  bottom: 0.25rem;
  margin-left: -1.7rem;
}
.inv_15 {
  width: 1.61rem;
  height: 0.48rem;
  left: 50%;
  margin-left: -0.805rem;
  top: 0.3rem;
}
.inv_16 {
  top: 1.05rem;
  left: 50%;
  margin-left: -1.38rem;
  width: 2.77rem;
}
.inv_17 {
  width: 3.64rem;
  height: 3.07rem;
  bottom: 1.08rem;
  left: 0.1rem;
}
.inv_18{
    	width: 2.73rem;
    height: 0.63rem;
    left: 50%;
    margin-left: -1.365rem;
    bottom: 0.2rem;
}
.inv_19{
    width: 0.77rem;
    height: 1.2rem;
    bottom: 0.3rem;
    right: 0.3rem;
}
.inv_20{
width: 1rem;
    height: 1.2rem;
    right: 0;
    bottom: 0.26rem;
    animation: boatAni 10s .5s infinite linear,boatMov 20s .5s infinite linear;
}
.inv_21{
	width: 0.31rem;
	height: 0.37rem;
    left: 2rem;
    bottom: 0.5rem;
    animation: boatAni 15s .5s infinite linear,boatMov 30s .5s infinite linear;
}
.inv_22{
    width: 0.6rem;
    height: 0.6rem;
    left: 50%;
    margin-left: -0.3rem;
    top: 0.1rem
}
.inv_23{
    	width: 3rem;
    height: 0.43rem;
    left: 50%;
    margin-left: -1.5rem;
    top: 1rem;
}
.inv_24{
    width: 2.17rem;
    height: 1.36rem;
    left: 50%;
    margin-left: -1.09rem;
    bottom: 1.1rem;
    animation-duration: 4s;

}
.inv_25{
	width: 0.95rem;
	height: 0.35rem;
    left: 50%;
    margin-left: -0.475rem;
    bottom: 0.6rem;
    animation-duration: 4s;
    background: url(/static/img/adv/next_button.png);
    background-size:100%;
}
</style>
