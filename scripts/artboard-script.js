const canvas = document.getElementById('canvas')
const editartboard = document.getElementById('edit-artboard')
const editcanvas = document.getElementById('editcanvas')
const info =document.getElementById('info')
const instructions =document.getElementById('instructions')
const close = document.querySelectorAll('.close')
const addtext = document.getElementById('addtext')

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
close.forEach(clos=>{
  clos.addEventListener('click', function(){
  instructions.classList.remove('container')
})
})
addtext.addEventListener('click', function(){
  const newTextElement = document.createElement('p')
  newTextElement.textContent = 'your text here'
  newTextElement.contentEditable = true
  // newTextElement.tabIndex = 0
  newTextElement.classList.add('element')
  canvas.appendChild(newTextElement)
  newTextElement.focus
})
window.addEventListener("beforeunload", function (e) {
  const confirmationMessage = "Are you sure you want to leave? Changes may not be saved.";
  e.preventDefault();
  e.returnValue = confirmationMessage;

  return confirmationMessage;
});