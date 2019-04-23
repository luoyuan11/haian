<template>
 <div class='box'>
     <div class="bg">
        <img src="../../static/img/open/cloud.png" alt="" class="cloud">
        <img src="../../static/img/open/title.png" alt="" class="title">
        <img src="../../static/img/open/0.png" alt="" class="bottle0" >
        <img src="../../static/img/open/1.png" alt="" class="bottle1" >
        <img src="../../static/img/open/2.png" alt="" class="bottle2" >
        <img src="../../static/img/open/girl.png" alt="" class="girl">    
        <router-link to="/nav"><img src="../../static/img/open/next_button.png" alt="" class="button"></router-link>
     </div>
     
 </div>
</template>
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
    background:url(../../static/img/open/background.jpg);
    background-size:100%;
}
.cloud{
    width:1.875rem;
    height:2.99rem;
    position: absolute;
    right:0rem;
    top:0.29rem;
}
.title{
    width:1.175rem;
    height:3.55rem;
    position: absolute;
    right:0.165rem;
    top:0.55rem;
}
.bottle0{
    width:0.365rem;
    height:0.18rem;
    position: absolute;
    right:0.525rem;
    top:3.015rem;
}
.bottle1{
    width:0.31rem;
    height:0.26rem;
    position: absolute;
    right:1.14rem;
    top:3.335rem;
}
.bottle2{
    width:0.49rem;
    height:0.325rem;
    position: absolute;
    right:0.89rem;
    top:4.045rem;
}
.girl{
    width:1.36rem;
    height:1.655rem;
    position: absolute;
    left:1.315rem;
    bottom:0.085rem;
}
.button{
    width:0.635rem;
    height:0.75rem;
    position: absolute;
    right:0.235rem;
    bottom:0.48rem;
}
</style>