<template>
  <div id="brand">
    <div class="part1">
      <GOMenu class="wow bounceInDown"/>
      <div class="scene">
        <img src="/static/img/brand/T.png" alt="" class="title wow flowDown slow">
        <img src="/static/img/brand/y1.png" alt="" class="fish wow floatUD infinite liner slow">
        <img src="/static/img/brand/p1.png" alt="" class="bigBottle wow floatRight infinite liner slower">
        <img src="/static/img/brand/p2.png" alt="" class="smallBottle wow floatLeft infinite liner slower">
      </div>
      <img src="/static/img/brand/images/01.jpg" alt="">
    </div>
    <div class="part2">
      <img src="/static/img/brand/images/1_02.png" alt="" class="word wow flowDown slower">
      <img src="/static/img/brand/images/02.jpg" alt="">
    </div>
    <div class="part3">
      <img src="/static/img/brand/t_1.png" alt="" class="title wow bounceInLeft">
      <img src="/static/img/brand/images/03.jpg" alt="">
    </div>
    <div class="part4">
      <div class="scene">
        <img src="/static/img/brand/i1.png" alt="" class="computer wow bounceInRight">
        <img src="/static/img/brand/i3_y.png" alt="" class="fish wow floatUD infinite slower">
        <img src="/static/img/brand/i3.png" alt="" class="shop wow fadeIn slower">
      </div>
      <img src="/static/img/brand/images/04.jpg" alt="">
    </div>
    <div class="part5">
      <div class="scene">
        <img src="/static/img/brand/t_2.png" alt="" class="title wow bounceInLeft">
        <img src="/static/img/brand/i2.png" alt="" class="people wow fadeIn">
        <div class="fish wow fadeIn slower">
          <img src="/static/img/brand/i2_y.png" alt="">
        </div>
      </div>
      <img src="/static/img/brand/images/05.jpg" alt="">
    </div>
    <div class="part6">
      <img src="/static/img/brand/images/06.jpg" alt="">
    </div>
    <div class="part7">
      <div class="scene">
        <img src="/static/img/brand/8.png" alt="" class="wow bounceInLeft">
        <img src="/static/img/brand/9.png" alt="" class="wow fadeIn slower">
        <div class="people">
          <img src="/static/img/brand/10.png" alt="" class="wow fadeIn slower">
        </div>
      </div>
      <div class="nextBt">
        <router-link to="/adv">
          <img src="/static/img/brand/next_button.png" alt="">
          <img src="/static/img/brand/next_button2.png" alt="" class="wow flash infinite liner slower">
        </router-link>
      </div>
      <img src="/static/img/brand/images/07.jpg" alt="">
    </div>
  </div>
</template>

<style scoped>
  #brand .part1 .scene img{
    position: absolute;
  }

  #brand .part1 .scene .title{
    width: 2.37rem;
    height: 0.935rem;
    top: 1rem;
    left: 0.77rem;
  }
  #brand .part1 .scene .bigBottle{
    width: 0.27rem;
    height: 0.26rem;
    top: 3.845rem;
    left: 3.48rem;
  }
  #brand .part1 .scene .smallBottle{
    width: 0.205rem;
    height: 0.155rem;
    top: 3.26rem;
    left: 2.25rem;
  }
  #brand .part1 .scene .fish{
    width: 0.87rem;
    height: 0.83rem;
    right: 0.315rem;
    top: 2.615rem;
  }

  #brand .part2 .word{
    position: absolute;
  }

  #brand .part3 .title{
    position: absolute;
    width: 2.99rem;
    height: 0.425rem;
    left: 0.395rem;
    top: 11.085rem;
  }

  #brand .part4 .scene>img{
    position: absolute;
  }

  #brand .part4 .scene .computer{
    width: 1.67rem;
    height: 0.97rem;
    top: 16.54rem;
    left: 2.065rem;
  }
  #brand .part4 .scene .shop{
    width: 3.75rem;
    height: 1.22rem;
    top: 17.735rem;
    left: 0;
  }
  #brand .part4 .scene .fish{
    width: 0.68rem;
    height: 0.65rem;
    top: 17.4rem;
    left: 0.97rem;
  }
  #brand .part5 .scene>img {
    position: absolute;
  }

  #brand .part5 .scene .title{
    width: 3.085rem;
    height: 0.425rem;
    top: 19.455rem;
    left: 0.365rem;
  }
  #brand .part5 .scene .people{
    width: 2.285rem;
    height: 2.05rem;
    top: 20.965rem;
    right: 0;
    animation-duration: 5s;
  }
  #brand .part5 .scene .fish{
    position: absolute;
    width: 0.405rem;
    height: 0.77rem;
    top: 20.595rem;
    left: 3.345rem;
    overflow: hidden;
  }
  #brand .part5 .scene .fish img{
    width: 0.57rem;
    height: 0.91rem;
  }

  #brand .part7 .nextBt{
    position: absolute;
    width: 0.955rem;
    height: 0.35rem;
    left: 1.37rem;
    top: 28.49rem;
  }
  #brand .part7 .nextBt img{
    position: absolute;
  }
  #brand .part7 .scene{
    position: relative;
  }
  #brand .part7 .scene>img{
    position: absolute;
    width: 2.685rem;
    height: 1.81rem;
    left: 0.355rem;
    top: 0.22rem;
  }
  #brand .part7 .scene .people{
    position: absolute;
    width: 1.235rem;
    height: 1.79rem;
    right: 0;
    top: 0.385rem;
  }
</style>


<script>
  import GOMenu from '../components/Menu.vue'
  import {WOW} from 'wowjs'

  export default {
    components: {
      GOMenu
    },
    mounted() {
      new WOW({
        boxClass: "wow",
        animateClass: "animation",
        offset: 30,
        mobile: true,
        live: false
      }).init()
    }
  }
</script>
