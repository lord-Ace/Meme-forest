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
        trigger.checked = true
        darkMode()
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
    pointers.forEach((pointer, index)=>{
      pointer.addEventListener('click', function(){
        pointers.forEach(pointer=>{
          pointer.classList.remove('active-btn')
        })
        tabs.forEach(tab=>{
          tab.classList.remove('active-tab')
        })
        pointers[index].classList.add('active-btn')
        tabs[index].classList.add('active-tab')
      })
    })
  }
  
  function deactivateTab(buttons, pointers, tabs){
    buttons.forEach(button=>{
      button.addEventListener('click', function(){
        pointers.forEach(pointer=>{
        pointer.classList.remove('active-btn')
      })
      tabs.forEach(tab=>{
        tab.classList.remove('active-tab')
      })
      })
    })
  }
  
  const themes = document.getElementById('darkmode')
  const content = document.querySelectorAll('.edit')
  const nav = document.querySelectorAll('.nav')
  const tabb = document.querySelectorAll('.tab')
  const excepiton = document.getElementById('nav')
  const back = document.querySelectorAll('.exit')
  
  activateDarkMode(themes, content)
  tabSwitch(nav, tabb)
  deactivateTab(back, nav, tabb)
  
  nav.forEach(button=>{
    button.addEventListener('click', function(){
      excepiton.classList.add('hidden')
    })
  })
  back.forEach(button=>{
    button.addEventListener('click', function(){
      excepiton.classList.remove('hidden')
    })
  })
})