<template>
 <div class='box'>
      
     <div class="bg">
          <menuIndex></menuIndex>
        <ul class="menu">
            <li><img src="../../static/img/nav/button_1.png" alt="" class="button1"></li>
            <li><img src="../../static/img/nav/button_2.png" alt="" class="button2"></li>
            <li><img src="../../static/img/nav/button_3.png" alt="" class="button3"></li>
            <li><img src="../../static/img/nav/button_4.png" alt="" class="button4"></li>
            <li><img src="../../static/img/nav/button_5.png" alt="" class="button5"></li>
        </ul>
       <img src="../../static/img/nav/button_0.png" alt="" class="button0">
    </div>
  
 </div>
</template>
<script>
import menuIndex from './Menu.vue'
export default{
    components:{
        menuIndex
    },
}
</script>
<style scoped>
 .box{
     width:3.75rem;
     height:6.67rem;
     position:relative;
     overflow-x:hidden;
 }
.bg{
    width:100%;
    height:6.67rem;
    background:url(../../static/img/nav/background.jpg);
    background-size:100%;
    position:relative;
}
.button0{
    width:0.445rem;
    height:0.445rem;
    position: absolute;
    bottom:0.4rem;
    left:1.675rem;
}
.menu{
    width:3.185rem;
    height:1.175rem;
    position:absolute;
    top:1.535rem;
    left:0.33rem;
}
.menu li{
    width:0.45rem;
    height:1.17rem;
    float:left;
}
.menu li img{
    width:0.45rem;
    height:1.17rem;
    float:left;
}
</style>