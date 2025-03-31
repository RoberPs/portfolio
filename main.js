document.addEventListener('DOMContentLoaded',()=>{
   copiarEmail()
   darkMode()
   scrollActions()
})


//Copy 
const copiarEmail = ()=>{
   
   const email = document.querySelector('.email-text').textContent;
   
   const btnCopy = document.querySelector('.btn-copy')
   
   btnCopy.addEventListener("click",async ()=>{
      
      try{
         await navigator.clipboard.writeText(email)
      }catch(error){
         return 'hubo un error'
      }   
   })
}
//Dark Mode
const darkMode = ()=>{
   const darkmodebtn = document.querySelector('.dark-mode-btn')
   darkmodebtn.addEventListener('click',()=>{
      
      document.body.classList.toggle('dark-mode')   
   })
}
//Scroll Actions

const scrollActions = ()=>{
   
   const menu =  document.getElementById('menu')
   const menuText = document.querySelector('nav span')
   const btn = document.querySelector('.dark-mode-btn')
   const btnUp = document.querySelector('.btn-up')
   
   window.onscroll = function(){
      console.log(window.scrollY)
      if(window.scrollY > 265){
         menu.classList.add('visible')
         menuText.classList.add('visible-text')
         btn.classList.add('visible-btn')
         btnUp.classList.add('btnUp-show')
         
      }else{
         menu.classList.remove('visible')
         menuText.classList.remove('visible-text')
         btn.classList.remove('visible-btn')
         btnUp.classList.remove('btnUp-show') 
      }
   }
}
//ScrollUp
const scrollUp = () =>{
   
   document.querySelector('.btn-up').addEventListener('click',scrollUp)
   let currentScroll  = document.documentElement.scrollTop;
   if(currentScroll > 0){
      window.requestAnimationFrame(scrollUp)
      window.scrollTo(0, currentScroll - ( currentScroll / 10) );
   }   
}
scrollUp() 

            


