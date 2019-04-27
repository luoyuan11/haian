<template>
 <div id="product">
   <div class="part1">
     <GOMenu class="wow bounceInDown"/>
     <img src="../../static/img/product/0.png" alt="" class="iceCream wow flowDown slow">
     <img src="../../static/img/product/images/01.jpg" alt="">
   </div>
   <div class="part2">
     <div class="scene">
       <img src="../../static/img/product/t1_1.png" alt="" class="title1 wow bounceInLeft">
       <img src="../../static/img/product/t1_2.png" alt="" class="title2 wow bounceInRight">
       <img src="../../static/img/product/1_1.png" alt="" class="banner wow bounceInRight">
       <img src="../../static/img/product/1.png" alt="" class="tea wow bounceInLeft">
     </div>

     <div class="scene1">
       <div class="tea wow bounceInRight">
         <img src="../../static/img/product/2.png" alt="">
       </div>
       <img src="../../static/img/product/2_0.png" alt="" class="flower wow rightUpIn">
       <img src="../../static/img/product/2_01.png" alt="" class="flower1 wow floatUD slower infinite">
       <img src="../../static/img/product/2_02.png" alt="" class="flower2 wow floatUD slower infinite">
       <img src="../../static/img/product/2_03.png" alt="" class="bird wow fadeIn slower">
       <img src="../../static/img/product/2_1.png" alt="" class="banner wow bounceInLeft">
     </div>

     <div class="scene2">
       <div class="tea wow bounceInLeft">
         <img src="../../static/img/product/3.png" alt="">
       </div>
       <img src="../../static/img/product/3_1.png" alt="" class="banner wow bounceInRight">
       <img src="../../static/img/product/3_2.png" alt="" class="bird wow fadeIn slower">
     </div>
     
     <div class="scene3">
       <div class="tea wow bounceInRight">
         <img src="../../static/img/product/4.png" alt="">
       </div>
       <img src="../../static/img/product/4_1.png" alt="" class="banner wow bounceInLeft">
     </div>
     
     <div class="scene4">
       <img src="../../static/img/product/5_1.png" alt="" class="banner wow bounceInLeft">
       <img src="../../static/img/product/5.png" alt="" class="tea wow bounceInRight">
       <img src="../../static/img/product/6_0.png" alt="" class="bird wow floatUD slow liner infinite">
     </div>
     
     <div class="scene5">
       <img src="../../static/img/product/6_0.png" alt="" class="bird wow floatUD slow liner infinite">
       <img src="../../static/img/product/6_1.png" alt="" class="banner wow bounceInRight">
     </div>
     <img src="../../static/img/product/images/02.jpg" alt="">
   </div>
   <div class="part3">
     <img src="../../static/img/product/images/03.jpg" alt="">
   </div>
   <div class="part4">
     <img src="../../static/img/product/7.png" alt="" class="banner wow fadeIn slower">
     <img src="../../static/img/product/images/04.jpg" alt="">
   </div>
   <div class="part5">
     <img src="../../static/img/product/7_1.png" alt="" class="people wow fadeIn slower">
     <img src="../../static/img/product/images/05.jpg" alt="">
   </div>
   <div class="part6">
     <img src="../../static/img/product/images/06.jpg" alt="">
   </div>
   <div class="part7">
     <img src="../../static/img/product/images/07.jpg" alt="">
   </div>
   <div class="part8">
     <div class="nextBt">
       <router-link to="/inv">
         <img src="../../static/img/product/next_button.png" alt="">
         <img src="../../static/img/product/next_button2.png" alt="" class="wow flash infinite liner slower">
       </router-link>
     </div>
     <img src="../../static/img/product/images/08.jpg" alt="">
   </div>
 </div>
</template>

<style scoped>
  #product .part1 .iceCream{
    position: absolute;
    width: 2.745rem;
    height: 3.375rem;
    top: 0.8rem;
    left: 0.23rem;
  }
  #product .part2 .scene>img,
  #product .part2 .scene1>img,
  #product .part2 .scene2>img,
  #product .part2 .scene3>img,
  #product .part2 .scene4>img,
  #product .part2 .scene5>img{
    position: absolute;
  }
  #product .part2 .scene .title1{
    width: 3.015rem;
    height: 1.135rem;
    top: 4.945rem;
    left: 0.425rem;
  }
  #product .part2 .scene .title2{
    width: 3.015rem;
    height: 1.135rem;
    top: 4.945rem;
    left: 0.425rem;
  }
  #product .part2 .scene .banner{
    width: 1.44rem;
    height: 2.87rem;
    top: 6.5rem;
    left: 2.17rem;
  }
  #product .part2 .scene .tea{
    width: 2.355rem;
    height: 3.805rem;
    top: 6.2rem;
    left: 0.065rem;
  }

  #product .part2 .scene1 .tea{
    position: absolute;
    width: 2.1rem;
    height: 3.41rem;
    top: 10.615rem;
    left: 1.65rem;
    overflow: hidden;
  }
  #product .part2 .scene1 .tea>img{
    width: 2.185rem;
  }

  #product .part2 .scene1 .banner{
    width: 1.54rem;
    height: 2.895rem;
    top: 10.7rem;
    left: 0.11rem;
  }
  #product .part2 .scene1 .bird{
    width: 0.64rem;
    height: 0.855rem;
    top: 12.41rem;
    left: 0;
  }
  #product .part2 .scene1 .flower{
    width: 1.03rem;
    height: 0.815rem;
    top: 9.845rem;
    left: 2.605rem;
  }
  #product .part2 .scene1 .flower1{
    width: 0.205rem;
    height: 0.12rem;
    top: 13.105rem;
    left: 1.42rem;
  }
  #product .part2 .scene1 .flower2{
    width: 0.205rem;
    height: 0.155rem;
    top: 13.475rem;
    left: 0.605rem;
  }

  #product .part2 .scene2 .tea{
    position: absolute;
    width: 2.43rem;
    height: 4.115rem;
    top: 14.38rem;
    left: 0;
    overflow: hidden;
  }
  #product .part2 .scene2 .tea>img{
    position: absolute;
    right: 0;
    width: 2.5rem;
  }
  #product .part2 .scene2 .bird{
    width: 0.825rem;
    height: 0.865rem;
    top: 16.315rem;
    left: 1.83rem;
  }
  #product .part2 .scene2 .banner{
    width: 1.455rem;
    height: 3.215rem;
    top: 14.81rem;
    left: 2.03rem;
  }
  #product .part2 .scene3 .tea{
    width: 1.975rem;
    height: 4.585rem;
    top: 18.35rem;
    left: 1.775rem;
    position: absolute;
    overflow: hidden;
  }
  #product .part2 .scene3 .tea>img{
    width: 2.185rem;
  }
  #product .part2 .scene3 .banner{
    width: 1.7rem;
    height: 3.78rem;
    top: 19.155rem;
    left: 0;
  }
  #product .part2 .scene4 .banner{
    width: 1.805rem;
    height: 1.9rem;
    top: 23.21rem;
    left: 1.175rem;
  }
  #product .part2 .scene4 .tea{
    width: 3.75rem;
    height: 2.845rem;
    top: 25.01rem;
    left: 0;
  }
  #product .part2 .scene4 .bird{
    width: 0.38rem;
    height: 0.26rem;
    top: 23.31rem;
    left: 3.11rem;
  }

  #product .part2 .scene5 .banner{
    width: 1.515rem;
    height: 2.765rem;
    top: 29.09rem;
    left: 2.03rem;
  }
  #product .part2 .scene5 .bird{
    width: 0.38rem;
    height: 0.26rem;
    top: 28.525rem;
    left: 0.27rem;
  }
  #product .part4 .banner{
    position: absolute;
    width: 2.99rem;
    height: 0.415rem;
    top: 36.01rem;
    left: 0.425rem;
  }
  #product .part5 .people{
    width: 0.605rem;
    height: 0.72rem;
    top: 40.98rem;
    left: 2.19rem;
    position: absolute;
  }

  #product .part8 .nextBt{
    position: absolute;
    width: 0.955rem;
    height: 0.35rem;
    left: 1.385rem;
    top: 52.36rem;
  }
  #product .part8 .nextBt img{
    position: absolute;
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

