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

editartboard.addEventListener('click', function(){
  const checkState = editcanvas.classList.contains('visible')
  if (checkState == false){
    editcanvas.classList.add('visible')
  }
  else{
    editcanvas.classList.remove('visible')
  }
})
info.addEventListener('click', function(){
  instructions.classList.add('container')
})
background.addEventListener('change', function(){
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
  // newTextElement.textContent = 'your text here'
  newTextElement.contentEditable = true
  newTextElement.classList.add('elements')
  newTextElement.classList.add('active')
  newTextElement.name = 'Text'
  canvas.appendChild(newTextElement)
  focus(newTextElement, elementsEdit, menu, back)
  newTextElement.focus()
})
/*window.addEventListener("beforeunload", function (e) {
  const confirmationMessage = "Are you sure you want to leave? Changes may not be saved.";
  e.preventDefault();
  e.returnValue = confirmationMessage;

  return confirmationMessage;
});*/