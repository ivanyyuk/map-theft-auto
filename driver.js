var angle = 36000;
const TURN_ANGLE = 1;
const panDistance = 1;  //this is the moving ratio or whatever 


function move(){
  for (var i in keys){
    if(keys[i] === true){
    switch(+i) { // use + to turn string into number
        case 37: // leftArrow
    
        turnLeft();
        break;
        case 38: // upArrow
        hitTheGas()
        break;
        case 39: // rightArrow
        turnRight();
       
        break;
        case 40: // downArrow
        map.panBy(0,panDistance);
        break;
      }
  }
    }
     requestAnimationFrame(move);
  }


  function drawRotated(degrees){
    
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // save the unrotated ctx of the canvas so we can restore it later
    // the alternative is to untranslate & unrotate after drawing
    ctx.save();

    // move to the center of the canvas
    ctx.translate(canvas.width/2 +carWidth/2,canvas.height/2 +carHeight/2);

    // rotate the canvas to the specified degrees
    ctx.rotate(degrees*Math.PI/180);

    // draw the image
    // since the ctx is rotated, the image will be rotated also
    ctx.drawImage(carImage, -carWidth/2, -carHeight/2, carWidth, carHeight);

    // we’re done with the rotating so restore the unrotated ctx
    ctx.restore();
}

function turnLeft(){
    if (angle === 0) angle = 36000;
  
    angle -= TURN_ANGLE;
    
    if(angle%1500===0) drawRotated(angle/100)
    
    
}

function turnRight() {
    if (angle === 0) angle = 36000;
  
    angle += TURN_ANGLE;
    
    if (angle%1500===0) drawRotated(angle/100)
}

function hitTheGas() {
    switch(angle/100){
        case 0:
        map.panBy(0,-panDistance)
        break;
        case 15:
        map.panBy((panDistance-panDistance/1.666), -panDistance)
        break;
        case 30:
        map.panBy((panDistance-panDistance/3.333), -panDistance)
        break;
        case 45:
        map.panBy(panDistance,-panDistance)
        break;
        case 60:
        map.panBy((panDistance+panDistance/3.333),-panDistance)
        break;
        case 75:
        map.panBy((panDistance+panDistance/1.666),-panDistance)
        break;
        case 90:
        map.panBy(panDistance,0)
        break;
        case 105:
        map.panBy(panDistance,(panDistance-panDistance/1.666))
        break;
        case 120:
        map.panBy(panDistance,(panDistance-panDistance/3.333))
        break;
        case 135:
        map.panBy(panDistance,panDistance)
        break;
        case 150:
        map.panBy((panDistance-panDistance/1.666),panDistance)
        break;
        case 165:
        map.panBy((panDistance-panDistance/3.333),panDistance)
        break;
        case 180:
        map.panBy(0,panDistance)
        break;
        case 195:
        map.panBy(-(panDistance-panDistance/1.666),panDistance)
        break;
        case 210:
        map.panBy(-(panDistance-panDistance/3.333),panDistance)
        break;
        case 225:
        map.panBy(-panDistance,panDistance)
        break;
        case 240:
        map.panBy(-panDistance, (panDistance-panDistance/3.333))
        break;
        case 255:
        map.panBy(-panDistance, (panDistance-panDistance/1.666))
        break;
        case 270:
        map.panBy(-panDistance,0)
        break;
        case 285:
        map.panBy(-panDistance,-(panDistance-panDistance/1.666))
        break;
        case 300:
        map.panBy(-panDistance,-(panDistance-panDistance/3.333))
        break;
        case 315:
        map.panBy(-panDistance,-panDistance)
        break;
        case 330:
        map.panBy(-(panDistance-panDistance/1.666),-panDistance)
        break;
        case 345:
        map.panBy(-(panDistance-panDistance/3.333),-panDistance)
        break;
        case 360:
        map.panBy(0,-panDistance)
        break;
    }

   
}
