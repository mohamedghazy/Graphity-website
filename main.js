// pull DOM element
const header = document.querySelector('header')
const mainImage=document.querySelector('.main_image')
const mainheader=document.querySelector('.content')
const menuIcon =document.querySelector('.menu_icon')
const menucontent=document.querySelector('.menu')
/* adding events listeners */
//creating sticky header
window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky',window.scrollY > 0)
})
let openMenu=false
menuIcon.addEventListener('click',()=>{
  if(!openMenu){
    menucontent.style.display='block'
    openMenu=true
  }else{
    menucontent.style.display='none'
    openMenu=false
  }
  
})
//animated landing page
const tl=new TimelineMax()
tl.fromTo(header,1,{y:'-100%'},{y:'0%',ease:Power2.easeInOut})
.fromTo(mainImage,1.5,{y:'100%'},{y:'0%',ease:Power2.easeInOut})
.fromTo(mainheader,1,{opacity:'0',y:"50px"},{opacity:'1',y:"0px"},'-=1')
//client review slider
//using swiper
const swiper =new Swiper('.swiper-container',{
    direction: 'vertical',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
