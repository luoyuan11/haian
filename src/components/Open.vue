<template>
 <div class='box'>
     <div class="bg">
        <img src="/static/img/open/cloud.png" alt="" class="cloud">
        <img src="/static/img/open/title.png" alt="" class="title">
        <img src="/static/img/open/0.png" alt="" class="bottle0" >
        <img src="/static/img/open/1.png" alt="" class="bottle1" >
        <img src="/static/img/open/2.png" alt="" class="bottle2" >
        <div class="girl"> <img src="/static/img/open/girl.png" alt="">    </div>
        <router-link to="/nav"><img src="/static/img/open/next_button.png" alt="" class="button"></router-link>
     </div>
 </div>
</template>
<style scoped>
@-webkit-keyframes fadein{
    0%{opacity: 0;}
    100%{opacity: 1;}
}
@-webkit-keyframes right-in{
    0%{transform: translate(1rem);opacity: 1;}
    100%{transform: translate(0rem);opacity: 1;}
}
@-webkit-keyframes float-left-right{
    0%{transform: translate(0rem);}
    25%{transform: translate(0.1rem)}
    75%{transform: translate(-0.1rem)}
    100%{transform: translate(0rem);}
}
@-webkit-keyframes float-up-down{
    0%{transform: translateY(0rem);}
    25%{transform: translateY(0.05rem)}
    75%{transform: translateY(-0.05rem)}
    100%{transform: translateY(0rem);}
}
@-webkit-keyframes up-down-fade{
    0%{height:0%}
    100%{height:1.65rem}
}


@keyframes fadein{
    0%{opacity: 0;}
    100%{opacity: 1;}
}
@keyframes right-in{
    0%{transform: translate(1rem);opacity: 1;}
    100%{transform: translate(0rem);opacity: 1;}
}
@keyframes float-left-right{
    0%{transform: translate(0rem);}
    25%{transform: translate(0.1rem)}
    75%{transform: translate(-0.1rem)}
    100%{transform: translate(0rem);}
}
@keyframes float-up-down{
    0%{transform: translateY(0rem);}
    25%{transform: translateY(0.05rem)}
    75%{transform: translateY(-0.05rem)}
    100%{transform: translateY(0rem);}
}
@keyframes up-down-fade{
    0%{height:0%}
    100%{height:1.65rem}
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
    background:url(/static/img/open/background.jpg);
    background-size:100%;
}
.cloud{
    width:1.875rem;
    height:2.99rem;
    position: absolute;
    right:0rem;
    top:0.29rem;
    animation: fadein 1s ease-out;
    -webkit-animation: fadein 1s ease-out;
}
.title{
    width:1.175rem;
    height:3.55rem;
    position: absolute;
    opacity: 0;
    right:0.165rem;
    top:0.55rem;
    animation: right-in 1s forwards 1s;
    -webkit-animation: right-in 1s forwards 1s;
}
.bottle0{
    width:0.365rem;
    height:0.18rem;
    position: absolute;
    right:0.525rem;
    top:3.015rem;
    animation: float-left-right 4s infinite linear;
    -webkit-animation: float-left-right 4s infinite linear;
}
.bottle1{
    width:0.31rem;
    height:0.26rem;
    position: absolute;
    right:1.14rem;
    top:3.335rem;
    animation: float-left-right 5s infinite linear;
     -webkit-animation: float-left-right 5s infinite linear;
}
.bottle2{
    width:0.49rem;
    height:0.325rem;
    position: absolute;
    right:0.89rem;
    top:4.045rem;
    animation: float-left-right 7s infinite linear;
     -webkit-animation: float-left-right 7s infinite linear;
}
.girl{
    width:1.36rem;
    height:1.65rem;
    position: absolute;
    opacity: 0;
    left:1.315rem;
    top:4.93rem;
    overflow: hidden;
    animation: fadein 0.5s forwards 2s;
     -webkit-animation: fadein 1s forwards 2s;
}
.girl img{
    width:1.36rem;
    height:1.655rem;
}
.button{
    width:0.635rem;
    height:0.75rem;
    position: absolute;
    right:0.235rem;
    bottom:0.48rem;
    animation: float-up-down 1s infinite linear;
     -webkit-animation: float-up-down 1s infinite linear;
}
</style>
