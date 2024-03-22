
var a=document.querySelector('.box');
var btn=document.querySelector('button');

var flag=0;


btn.addEventListener('click',function(){
   if(flag==0){
    a.style.backgroundColor='rgb(255,255,0)'
   
    flag=1
   }
   else{
    a.style.backgroundColor='transparent'
    flag=0
   }
})