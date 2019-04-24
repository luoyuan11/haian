<template>
 <div class='box'>
     <div class="bg">
        <ul class="menu">
            <li><router-link to="/brand"><img src="/static/img/nav/button_1.png" alt=""></router-link></li>
            <li><router-link to="/adv"><img src="/static/img/nav/button_2.png" alt=""></router-link></li>
            <li><router-link to="/product"><img src="/static/img/nav/button_3.png" alt=""></router-link></li>
            <li><router-link to="/inv"><img src="/static/img/nav/button_4.png" alt=""></router-link></li>
            <li style="margin-right:0rem;"><router-link to="/support"><img src="/static/img/nav/button_5.png" alt=""></router-link></li>
        </ul>
       <img src="/static/img/nav/button_0.png" alt="" class="button0">
       <img src="/static/img/nav/girl.png" alt="" class="girl">
    </div>
 </div>
</template>
<style scoped>
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
    -webkit-animation: float-up-down 1s infinite linear;
}
.girl{
    width:0.915rem;
    height:1.38rem;
    position: absolute;
    bottom:0.36rem;
    left:-1.33rem;
    -webkit-animation: left-in 1s forwards 0.4s;
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
    height:0rem;
    float:left;
    margin-right:0.23rem;
    overflow: hidden;
    -webkit-animation: up-down-fade 1s forwards;
}
.menu li img{
    width:0.45rem;
    height:1.17rem;
}
</style>