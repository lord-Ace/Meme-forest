const canvas = document.getElementById('canvas')
const editartboard = document.getElementById('edit-artboard')
const editcanvas = document.getElementById('editcanvas')
const info =document.getElementById('info')
const instructions =document.getElementById('instructions')
const close = document.querySelectorAll('.close')
const addtext = document.getElementById('addtext')
const background = document.getElementById('Background')
const padding = document.querySelectorAll('.padding')
const corners = document.getElementById('corners')
const menu = document.querySelectorAll('.menu')
const menuItem = document.querySelectorAll('.menuItem')
const back = document.getElementById('back')
const clear = document.getElementById('clear')
const edit = document.querySelectorAll('.edit')
const differ = document.querySelectorAll('.differ')
let elementsEdit = {
  Text: menuItem[1],
  media: menuItem[2]
}

function focus(element, creator, tabs, back){
  element.addEventListener('focus', function(){
    document.querySelectorAll('.elements').forEach(tag=>{tag.classList.remove('active')})
    this.classList.add('active')
    creator[element.name].classList.add('active-tab')
    tabs.forEach(tab=>{
      if (tab.textContent != element.name){
        tab.classList.add('hidden')
        back.classList.remove('hidden')
        }
      })
  })
}

function styleMe(styler, styled){
  styled.forEach(tag=>{
    switch(styler.name){
      case 'font-size':
        tag.style.cssText += `${styler.name}: ${styler.value}px;`
        break;
      default:
        tag.style.cssText += `${styler.name}: ${styler.value};`
    } 
  })
}
function unStyleMe(styler, styled){
  styled.forEach(tag=>{
    tag.style.cssText += `${styler.name}: unset;`
  })
}

editartboard.addEventListener('click', function(){
  const checkState = editcanvas.classList.contains('hidden')
  if (checkState == false){
    editcanvas.classList.add('hidden')
  }
  else{
    editcanvas.classList.remove('hidden')
  }
})
info.addEventListener('click', function(){
  instructions.classList.add('container')
})
background.addEventListener('input', function(){
  canvas.style.background = this.value
})
corners.addEventListener('input', function(){
  canvas.style.borderRadius = `${this.value}px`
})
padding.forEach(one => {
  one.addEventListener('input', function(){
    if (this.name == 'top'){
      canvas.style.paddingBottom = canvas.style.paddingTop = `${this.value}px`
    }
    else if (this.name == 'left'){
      canvas.style.paddingLeft = canvas.style.paddingRight = `${this.value}px`
    }
  })
})
clear.addEventListener('click', function(){
  canvas.replaceChildren()
  canvas.style = ''
  corners.value =padding[0].value=padding[1].value= ''
  background.value = '#ffffff'
})
close.forEach(clos=>{
  clos.addEventListener('click', function(){
  instructions.classList.remove('container')
})
})
addtext.addEventListener('click', function(){
  const newTextElement = document.createElement('p')
  newTextElement.contentEditable = true
  newTextElement.classList.add('elements')
  newTextElement.classList.add('active')
  newTextElement.name = 'Text'
  canvas.appendChild(newTextElement)
  focus(newTextElement, elementsEdit, menu, back)
  newTextElement.focus()
})
edit.forEach(item=>{
  item.addEventListener('input', function(){
    const active = document.querySelectorAll('.active')
    styleMe(item, active)
  })
})
differ.forEach(item=>{
  item.addEventListener('click', function(){
    const active = document.querySelectorAll('.active')
    if(this.classList.contains('selected')){
      unStyleMe(item,active)
      this.classList.remove('selected')
    }else{
      styleMe(item, active)
      this.classList.add('selected')
    }
  })
})
/*window.addEventListener("beforeunload", function (e) {
  const confirmationMessage = "Are you sure you want to leave? Changes may not be saved.";
  e.preventDefault();
  e.returnValue = confirmationMessage;

  return confirmationMessage;
});*/