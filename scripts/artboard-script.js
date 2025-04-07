const editartboard = document.getElementById('edit-artboard')
const editcanvas = document.getElementById('editcanvas')
const info =document.getElementById('info')
const instructions =document.getElementById('instructions')

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
