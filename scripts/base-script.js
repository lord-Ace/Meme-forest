document.addEventListener("DOMContentLoaded", function(){
  // localStorage.clear()
  function activateDarkMode(trigger, victims){
    const darkModeState = localStorage.getItem('modeState')
    function darkMode(){
      victims.forEach(victim=>{
        victim.classList.add('dark')
      })
    }
    function lightMode(){
      victims.forEach(victim=>{
        victim.classList.remove('dark')
      })
    }
    window.addEventListener('load', function(){
      if(darkModeState == 'true'){
        darkMode()
        trigger.checked = true
      }
      else if(darkModeState == 'false'){
        lightMode()
      }
      else{
        trigger.checked = false
        lightMode()
      }
    })
    trigger.addEventListener('change', function(){
      if(trigger.checked == true ){
        darkMode()
      }
      else if(trigger.checked == false){
        lightMode()
      }
      localStorage.setItem('modeState', trigger.checked ? 'true':'false')
    })
  }
  function tabSwitch(pointers, tabs, index){
    pointers.forEach(pointer=>{
      pointer.classList.remove('active-btn')
    })
    tabs.forEach(tab=>{
      tab.classList.remove('active-tab')
    })
    pointers[index].classList.add('active-btn')
    tabs[index].classList.add('active-tab')
  }
  function deactivateTab(buttons, pointers, tabs){
    pointers.forEach(pointer=>{
      pointer.classList.remove('active-btn')
    })
    tabs.forEach(tab=>{
      tab.classList.remove('active-tab')
    })
  }
  
  const themes = document.getElementById('darkmode')
  const content = document.querySelectorAll('.state')
  const nav = document.querySelectorAll('.nav')
  const tabbs = document.querySelectorAll('.tab')
  const exit = document.querySelectorAll('.exit')
  const excepiton = document.getElementById('nav')
  const menu = document.querySelectorAll('.menu')
  const menuItem = document.querySelectorAll('.menuItem')
  const back = document.getElementById('back')
  const copy = document.getElementById('copy'); 
  const instructions =document.getElementById('instructions')
  const retreive = localStorage.getItem('opened1') 
  
  activateDarkMode(themes, content)
  nav.forEach((pointe, index)=>{
    pointe.addEventListener('click', function(){
      // localStorage.clear()
      tabSwitch(nav, tabbs, index)
      if (retreive == 'true'){
        instructions.classList.remove('container')
      }
      excepiton.classList.add('hidden')
    })
  })
  menu.forEach((pointe, index)=>{
    pointe.addEventListener('click', function(){
      menu.forEach(item=>{
        item.classList.add('hidden')
      })
      this.classList.remove('hidden')
      back.classList.remove('hidden')
      tabSwitch(menu, menuItem, index)
    })
  })
  exit[0].addEventListener('click', function(){
      document.getElementById('confirm').showModal()
      document.getElementById('yes').addEventListener('click', function(){
          deactivateTab(exit[0], nav, tabbs)
        excepiton.classList.remove('hidden')
      document.getElementById('confirm').close()
      })
      document.getElementById('no').addEventListener('click', function(){
       document.getElementById('confirm').close()
      })
    })
  
  exit[1].addEventListener('click', function(){
    deactivateTab(exit[1], nav, tabbs)
        excepiton.classList.remove('hidden')
  })
  
  back.addEventListener('click', function(){
      deactivateTab(back, menu, menuItem)
      this.classList.add('hidden')
      menu.forEach(item=>{
        item.classList.remove('hidden')
      })
    })
  copy.addEventListener('click', function(){
    let url = window.location.href;
    navigator.clipboard.writeText(`${url} \n Check out this amazing website that allows you to create memes, it's really fun`).then(() => {
        alert("Link copied successfully!");
    });
  })
  localStorage.setItem('opened1', 'true')
})