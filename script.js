var ProductHeads = document.getElementsByClassName('tii');
for (const ProductHead of ProductHeads) {
  ProductHead.style.color = 'green';
}


var ProductCards = document.getElementsByClassName('item');
for (const ProductCard of ProductCards) {
  var newButton = document.createElement('button');
  newButton.innerText = 'Buy This'
  newButton.style.padding = '5px 10px';
  newButton.style.backgroundColor = '#e02c6d';
  newButton.style.borderRadius = '20px';
  newButton.style.marginTop = '8px';
  ProductCard.appendChild(newButton);
  ProductCard.style.borderRadius = '30px';
  ProductCard.style.height = '500px';
  newButton.addEventListener('click',function(t){
    t.target.innerText='Check Your Mail!'
  })
}


var magicCam = document.getElementById('camera');
magicCam.addEventListener('mouseenter' , function(){
 magicCam.src = './images/close-up-modern-digital-dslr-camera.jpg'
 magicCam.style.width = '100%'
})
magicCam.addEventListener('mouseleave' , function(){
 magicCam.src = './images/main-camera.png'
//  magicCam.style.width = '100%'
})

document.getElementById('header').addEventListener('dblclick' , function(){
  document.body.style.backgroundColor = '#DDDDDD';
})
document.getElementById('banner').addEventListener('dblclick' , function(){
  document.body.style.backgroundColor = 'white';
})


document.getElementById('name-input').addEventListener('keyup', function(){
  var confirmBtn = document.getElementById('submit-button');
  var requireField = document.getElementById('name-input').value;
  confirmBtn.setAttribute('disabled' , true);
  if(requireField == 'siam'){
    confirmBtn.removeAttribute('disabled')
  }
})

