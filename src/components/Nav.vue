<template>
 <div class='box'>
     <div class="bg">
        <ul class="menu">
            <li><router-link to="/brand"><img src="static/img/nav/button_1.png" alt=""></router-link></li>
            <li><router-link to="/adv"><img src="static/img/nav/button_2.png" alt=""></router-link></li>
            <li><router-link to="/product"><img src="static/img/nav/button_3.png" alt=""></router-link></li>
            <li><router-link to="/inv"><img src="static/img/nav/button_4.png" alt=""></router-link></li>
            <li style="margin-right:0rem;"><router-link to="/support"><img src="static/img/nav/button_5.png" alt=""></router-link></li>
        </ul>
       <img src="static/img/nav/button_0.png" alt="" class="button0">
       <img src="static/img/nav/girl.png" alt="" class="girl">
     <div class="img-box">
        <img src="static/img/nav/1.png" >
        <img src="static/img/nav/2.png" >
        <img src="static/img/nav/3.png" >
        <img src="static/img/nav/4.png" >
        <img src="static/img/nav/5.png" >
        <img src="static/img/nav/1.png" >
        <img src="static/img/nav/1.png" >
        <img src="static/img/nav/1.png" >
     </div>
    </div>
 </div>
</template>


<style scoped>
.img-box{
    width:100%;
    height:100%;
    position: absolute;
    bottom:-2rem;
    left:0;
    display: flex;
    align-items: flex-end;
    z-index: 1;
    
}
.img-box img{
    width:auto;
    display: block;
    float:left;
    animation: float-up 6s linear;
}
.img-box img:nth-of-type(1){    
    animation-delay: 2s;
}
.img-box img:nth-of-type(2){
    width:10%;
    animation-delay: 3s;
}
.img-box img:nth-of-type(3){
    
    animation-delay: 2.5s;
}
.img-box img:nth-of-type(4){
    width:15%;
    animation-delay: 1.5s;
}
.img-box img:nth-of-type(5){
    animation-delay: 1s;
}
.img-box img:nth-of-type(6){
    animation-delay: 0.5s;
}
@-webkit-keyframes left-in{
    0%{left:-1.33rem}
    100%{left:0.33rem}
}
@-webkit-keyframes up-down-fade{
    0%{height:0%}
    100%{height:1.65rem}
}
@-webkit-keyframes float-up-down{
    0%{transform: translateY(0rem);}
    25%{transform: translateY(0.05rem)}
    75%{transform: translateY(-0.05rem)}
    100%{transform: translateY(0rem);}
}
@keyframes left-in{
    0%{left:-1.33rem}
    100%{left:0.33rem}
}
@keyframes up-down-fade{
    0%{height:0%}
    100%{height:1.65rem}
}
@keyframes float-up-down{
    0%{transform: translateY(0rem);}
    25%{transform: translateY(0.05rem)}
    75%{transform: translateY(-0.05rem)}
    100%{transform: translateY(0rem);}
}
@keyframes float-up{
    0%{transform: translateY(2rem);}
    50%{opacity: 0.8;}
    80%{opacity: 0.5;}
    100%{transform: translateY(-8.67rem);opacity: 0;}
}
 .box{
     width:3.75rem;
     height:6.67rem;
     position:relative;
     overflow:hidden;
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
    animation: float-up-down 1s infinite linear;
    -webkit-animation: float-up-down 1s infinite linear;
}
.girl{
    width:0.915rem;
    height:1.38rem;
    position: absolute;
    bottom:0.36rem;
    left:-1.33rem;
    animation: left-in 1s forwards 0.4s;
    -webkit-animation: left-in 1s forwards 0.4s;
}
.menu{
    width:3.185rem;
    height:1.175rem;
    position:absolute;
    z-index:5;
    top:1.535rem;
    left:0.33rem;
}
.menu li{
    width:0.45rem;
    height:0rem;
    float:left;
    margin-right:0.23rem;
    overflow: hidden;
    animation: up-down-fade 3s forwards;
    -webkit-animation: up-down-fade 3s forwards;
}
.menu li img{
    width:0.45rem;
    height:1.17rem;
}
</style>