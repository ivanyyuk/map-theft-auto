var animationFunc;


function initCar() {
  carImage = new Image();
  carImage.src = './red-car-top-view-md.png'
  carImage.onload = function () {
   carWidth = getWidth()/28
   carHeight = getHeight()/13
animationFunc = requestAnimationFrame(move);
   console.log(carImage,getWidth()/2,getHeight()/2)

   ctx.drawImage(carImage, getWidth()/2, getHeight()/2, carWidth,carHeight)
   
 }

}

function getWidth() {
  return canvas.scrollWidth;
}

function getHeight() {
  return canvas.scrollHeight;
}

var keys = {};


  $(document).keydown( function(event) {
    keys[event.which] = true;

    
  });

  $(document).keyup(function(event){
    keys[event.which] = false;
    cancelAnimationFrame(animationFunc)
    move()
  });

  


