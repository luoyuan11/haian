<template>
  <div id="brand">
    <div class="part1">
      <GOMenu/>
      <div class="scene">
        <img src="../../static/img/brand/T.png" alt="" class="title wow bounceInDown">
        <img src="../../static/img/brand/p1.png" alt="" class="bigBottle wow floatUD infinite slower">
        <img src="../../static/img/brand/p2.png" alt="" class="smallBottle">
        <img src="../../static/img/brand/y1.png" alt="" class="fish">
      </div>
      <img src="../../static/img/brand/images/01.jpg" alt="">
    </div>
    <div class="part2">
      <img src="../../static/img/brand/images/02.jpg" alt="">
    </div>
    <div class="part3">
      <img src="../../static/img/brand/images/03_1.png" alt="" class="word">
      <img src="../../static/img/brand/images/03_2.jpg" alt="">
    </div>
    <div class="part4">
      <img src="../../static/img/brand/t_1.png" alt="" class="title">
      <img src="../../static/img/brand/images/04.jpg" alt="">
    </div>
    <div class="part5">
      <img src="../../static/img/brand/i1.png" alt="" class="photo">
      <img src="../../static/img/brand/images/05.jpg" alt="">
    </div>
    <div class="part6">
      <img src="../../static/img/brand/t_2.png" alt="" class="title">
      <img src="../../static/img/brand/i2.png" alt="" class="photo">
      <img src="../../static/img/brand/images/06.jpg" alt="">
    </div>
    <div class="part7">
      <img src="../../static/img/brand/images/07.jpg" alt="">
    </div>
    <div class="part8">
      <img src="../../static/img/brand/next_button.png" alt="" class="nextBt" >
      <img src="../../static/img/brand/images/08.jpg" alt="">
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
    -webkit-mask-size: 2.37rem 0.935rem;
    mask-size: 2.37rem 0.935rem;
  }
  #brand .part1 .scene .bigBottle{
    width: 0.315rem;
    height: 0.335rem;
    top: 3.845rem;
    right: 0rem;
  }
  #brand .part1 .scene .smallBottle{
    width: 0.275rem;
    height: 0.21rem;
    top: 3.26rem;
    left: 2.18rem;
  }
  #brand .part1 .scene .fish{
    width: 0.87rem;
    height: 0.83rem;
    right: 0.305rem;
    top: 2.615rem;
  }

  #brand .part3 .word{
    position: absolute;
  }

  #brand .part4 .title{
    position: absolute;
    width: 2.99rem;
    height: 0.425rem;
    left: 0.395rem;
    top: 11.01rem;
  }
  #brand .part5 .photo{
    position: absolute;
    width: 1.67rem;
    height: 0.97rem;
    left: 2.065rem;
    top: 16.54rem;
  }

  #brand .part6 .photo{
    position: absolute;
    width: 2.285rem;
    right: 0;
    top: 20.965rem;
  }
  #brand .part6 .title{
    position: absolute;
    width: 3.085rem;
    left: 0.365rem;
    top: 19.455rem;
  }

  #brand .part8 .nextBt{
    position: absolute;
    width: 0.955rem;
    height: 0.35rem;
    top: 28.49rem;
    left: 1.37rem;
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
        boxClass:"wow",
        animateClass:"animation",
        offset:30,
        mobile:true,
        live:false
      }).init()
    }
  }
</script>
