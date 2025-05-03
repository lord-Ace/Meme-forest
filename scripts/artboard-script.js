const canvas = document.getElementById('canvas')
const editartboard = document.getElementById('edit-artboard')
const editcanvas = document.getElementById('editcanvas')
const info =document.getElementById('info')
const instructions =document.getElementById('instructions')
const close = document.querySelectorAll('.close')
const addtext = document.getElementById('addtext')
const background = document.getElementById('Background')
const padding = document.getElementById('padding')
const corners = document.getElementById('corners')
const menu = document.querySelectorAll('.menu')
const menuItem = document.querySelectorAll('.menuItem')
const clear = document.getElementById('clear')
let elementsEdit = {
  text: '',
  media: ''
}
console.log(elementsEdit.text.index)
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
clear.addEventListener('click', function(){
  canvas.replaceChildren()
  canvas.style = ''
  corners.value = ''
  background.value = '#ffffff'
})
close.forEach(clos=>{
  clos.addEventListener('click', function(){
  instructions.classList.remove('container')
})
})
addtext.addEventListener('click', function(){
  const newTextElement = document.createElement('p')
  newTextElement.textContent = 'your text here'
  newTextElement.contentEditable = true
  newTextElement.classList.add('element')
  newTextElement.classList.add('active')
  newTextElement.name = 'text'
  canvas.appendChild(newTextElement)
  newTextElement.focus()
})
window.addEventListener("beforeunload", function (e) {
  const confirmationMessage = "Are you sure you want to leave? Changes may not be saved.";
  e.preventDefault();
  e.returnValue = confirmationMessage;

  return confirmationMessage;
});