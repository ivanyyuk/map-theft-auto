var map,car,canvas,ctx, carImage, carWidth, carHeight;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:40.712, lng:-74.0059},
    zoom: 30,
    mapTypeId: 'satellite',
    disableDefaultUI: true
  })
  map.setTilt(1)
  

}

window.setTimeout(function(){
  var $map = $('#map');
  var $canvas = $(document.createElement('canvas'));
  var $overlay = $(document.createElement('div'));
  $overlay.attr('id', 'overlay')
  $canvas.attr('id', 'gameCanvas');
  $map.append($overlay);
  $overlay.append($canvas);
  canvas = document.getElementById('gameCanvas');
  canvas.height = getHeight();
  canvas.width = getWidth();
  ctx = canvas.getContext('2d')
  initCar();
} ,2000)


