<template>
  <div id="support">
    <div class="part part1">
     <img src="/static/img/support/images/01.jpg" alt="" class="bg">
     <img src="/static/img/support/0.png" alt="" class="mans wow fadeIn">
    <img src="/static/img/support/t1_1.png" alt="" class="p1_title wow bounceInLeft">
    <img src="/static/img/support/t1_2.png" alt="" class="p1_title wow bounceInRight">
    <img src="/static/img/support/t1_fly.png" alt="" class="t1_fly wow floatUD infinite slow">
    <img src="/static/img/support/t1_p1.png" alt="" class="t1_p1 wow fadeIn">
    <img src="/static/img/support/y1_p2.png" alt="" class="y1_p2 wow bounceInLeft">
    <img src="/static/img/support/t1_font.png" alt="" class="t1_font wow bounceInRight">
      <GOMenu class="wow bounceInDown"/>
    </div>
    <div class="part part2">
      <img src="/static/img/support/images/02.jpg" alt="" class="bg">
       <img src="/static/img/support/t2_1.png" alt="" class="t2_1 wow bounceInLeft">
       <img src="/static/img/support/t2_2.png" alt="" class="t2_1 wow bounceInRight">
       <img src="/static/img/support/t2_p1.png" style="z-index:3;" alt="" class="t2_p1">
       <img src="/static/img/support/t2_p2.png"  alt="" class="t2_p1 wow fadeIn">
       <img src="/static/img/support/t2_fly.png" alt="" class="t2_fly wow floatUD infinite slow">
       <img src="/static/img/support/t2_p3.png"  alt="" class="t2_p3">
    </div>
    <div class="part part3">
     <img src="/static/img/support/images/03.jpg" alt="" class="bg">
     <img src="/static/img/support/t3_01.png" alt="" class="t3_01 wow bounceInLeft">
     <img src="/static/img/support/t3_02.png" alt="" class="t3_01 wow bounceInRight">
     <img src="/static/img/support/t3_photo.png" alt="" class="t3_photo wow fadeIn">
    
    </div>
    <div class="part part4">
     <img src="/static/img/support/images/04.jpg" alt="" class="bg">
      <img src="/static/img/support/t4.png" alt="" class="t4 wow bounceInLeft">
      <img src="/static/img/support/t4_01.png" alt="" class="t4_01 wow fadeIn">
     
    </div>
    <div class="part part5">
    <img src="/static/img/support/images/05.jpg" alt="" class="bg">
     <img src="/static/img/support/t4_02.png" alt="" class="t4_02 wow fadeIn">
    </div>
    <div class="part part6">
     <img src="/static/img/support/images/06.jpg" alt="" class="bg">
     <img src="/static/img/support/t4_03.png" alt="" class="t4_03 wow fadeIn">
    </div>
    <div class="part part7">
       <img src="/static/img/support/images/07.jpg" alt="" class="bg">
          <img src="/static/img/support/t4_04.png" alt="" class="t4_04 wow fadeIn">
    </div>
    <div class="part part8">
    <img src="/static/img/support/images/08.jpg" alt="" class="bg">
       <img src="/static/img/support/t4_05.png" alt="" class="t4_05 wow fadeIn">
    </div>
    <div class="part part9">
     <img src="/static/img/support/images/09.jpg" alt="" class="bg">
      <img src="/static/img/support/t5.png" alt="" class="t5 wow fadeIn">
        <img src="/static/img/support/t55.png" alt="" class="t55 wow fadeIn">
        <img src="/static/img/support/boat1.png" alt="" class="boat1 wow boatAni1">
        <img src="/static/img/support/boat2.png" alt="" class="boat2 wow boatAni">
         <img src="/static/img/support/boat3.png" alt="" class="boat3 wow boatAni2">
        <img src="/static/img/support/fly.png" alt="" class="fly wow floatUD infinite slow">
    </div>
    <div class="part part10">
       <img src="/static/img/support/images/10.jpg" alt="" class="bg">
       <img src="/static/img/support/t6.png" alt="" class="t6">
        <img src="/static/img/support/000.png" alt="" class="t8 wow floatUD infinite slow">
        <img src="/static/img/support/girl.png" alt="" class="girl wow fadeIn slow">
        <router-link to="/"><img src="/static/img/support/button.png" alt="" class="button wow flash infinite liner slow animation"></router-link>
    </div>
  </div>
</template>

<style scoped>
.boatAni{
    -webkit-animation:boatAni 10s .5s infinite linear, boatMov 20s .5s infinite linear;
    animation:boatAni 10s .5s infinite linear, boatMov 20s .5s infinite linear
}
.boatAni1 {
    -webkit-animation:boatAni 15s .5s infinite linear, boatMov 30s .5s infinite linear;
    animation:boatAni 15s .5s infinite linear, boatMov 30s .5s infinite linear
}
.boatAni2 {
    -webkit-animation:boatAni 15s .5s infinite linear 8s, boatMov 30s .5s infinite linear 8s;
    animation:boatAni 15s .5s infinite linear 8s, boatMov 30s .5s infinite linear 8s;
}
@keyframes boatAni {
    0%, 20%, 40%, 60%, 80%, to {
        -webkit-transform:rotate(0);
        transform:rotate(0)
    }
    10%, 30%, 50%, 70%, 90% {
        -webkit-transform:rotate(5deg);
        transform:rotate(5deg)
    }
}
@-webkit-keyframes boatAni {
    0%, 20%, 40%, 60%, 80%, to {
        -webkit-transform:rotate(0)
    }
    10%, 30%, 50%, 70%, 90% {
        -webkit-transform:rotate(5deg)
    }
}
@keyframes boatMov {
    0% {
        left:4rem
    }
    to {
        left:-7rem
    }
}
@-webkit-keyframes boatMov {
    0% {
        left:19rem
    }
    to {
        left:-10rem
    }
}
.fly{
    width:0.47rem;
    height:0.56rem;
    position:absolute;
    left:0.06rem;
    top:0.86rem;
}
.button{
    width:0.95rem;
    height:0.35rem;
    position:absolute;
    left:1.38rem;
    bottom:0.615rem;
    animation-duration: 10s;
}
.girl{
    width:0.755rem;
    height:0.905rem;
    position: absolute;
    z-index: 99;
    bottom:2.52rem;
    right:0.195rem;
    z-index:6;
}
.t8{
    width:2.165rem;
    height:1.36rem;
    position: absolute;
    z-index: 99;
    bottom:1.095rem;
    left:0.775rem;
}
.boat3{
    width:0.97rem;
    height:1.2rem;
    position: absolute;
    bottom:0.34rem;
    right:-1rem;
}
.boat2{
    width:0.97rem;
    height:1.2rem;
    position: absolute;
    bottom:0.34rem;
    right:-1rem;
}
.boat1{
    width:0.305rem;
    height:0.37rem;
    position: absolute;
    bottom:0.565rem;
    right:-1rem;
}
.t6{
    width:3rem;
    height:0.425rem;
    position: absolute;
    top:0.3rem;
    left:0.415rem;
}
.t55{
    width:3.335rem;
    height:1.06rem;
    position: absolute;
    top:0.8rem;
    left:0.215rem;
}
.t5{
    width:3.01rem;
    height:0.44rem;
    position: absolute;
    top:0.35rem;
    left:0.415rem;
}
.t4_05{
    width:3.325rem;
    height:1.45rem;
    position: absolute;
    left:0.21rem;
    bottom:0.3rem;
}
.t4_04{
    width:3.325rem;
    height:1.45rem;
    position: absolute;
    left:0.21rem;
    bottom:0.18rem;
}
.t4_03{
    width:3.39rem;
    height:1.565rem;
    position: absolute;
    top:0.25rem;
    left:0.155rem;
}
.t4_02{
    width:3.085rem;
    height:1.175rem;
    position: absolute;
    top:0.21rem;
    left:0.355rem;
}
.t4_01{
    width:2.83rem;
    height:1.26rem;
    position: absolute;
    top:1.135rem;
    left:0.35rem;
}
.t4{
    width:3.17rem;
    height:0.49rem;
    position: absolute;
    z-index:555;
    top:0.27rem;
    left:0.28rem;
}
.t3_photo{
    width:3.465rem;
    height:1.955rem;
    position: absolute;
    z-index:6;
    top:1.095rem;
    left:0.1rem;
}
.t3_01{
    width:3.14rem;
    height:0.795rem;
    position: absolute;
    z-index:6;
    top:0.11rem;
    left:0.315rem;
}
.part{
    width:100%;
    position:relative;
    overflow-x:hidden;
}
.bg{
    position: relative;
    z-index:0;
}
.mans{
    width:3.22rem;
    height:2.435rem;
    position:absolute;
    top:2.375rem;
    left:0.3rem;
}
.p1_title{
    width:3.075rem;
    height:1.125rem;
    position:absolute;
    top:4.835rem;
    left:0.3rem;
}
.t1_fly{
    width:0.72rem;
    height:0.98rem;
    position: absolute;
    top:5.955rem;
    left:0.025rem;
}
.t1_p1{
    width:3.41rem;
    height:2.38rem;
    position: absolute;
    top:6.11rem;
    left:0.165rem;
}
.y1_p2{
    width:3.37rem;
    height:1.265rem;
    position: absolute;
    top:8.695rem;
    left:0.17rem;
}
.t1_font{
    width:1.3rem;
    height:0.58rem;
    position: absolute;
    top:7.965rem;
    right:0.35rem;
}
.t2_1{
    width:3.255rem;
    height:0.835rem;
    position: absolute;
    left:0.25rem;
    top:0.545rem;
}
.t2_fly{
    width:0.96rem;
    height:1.265rem;
    position: absolute;
    top:1.69rem;
    right:0.215rem;
    z-index: 0;
}
.t2_p1{
    width:2.505rem;
    height:3.32rem;
    position: absolute;
    left:0rem;
    bottom:0.07rem;
    z-index:2;
}
.t2_p3{
    width:3.275rem;
    height:2.42rem;
    position: absolute;
    left:0.23rem;
    bottom:0.07rem;
  
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
