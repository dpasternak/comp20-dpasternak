function Draw(){
  var canvas = document.getElementById("game");
  var context = canvas.getContext("2d");
  var spritesheet = new Image();
  spritesheet.src = "assets/duckhunt.png";
  spritesheet.onload = function() {
  	context.imageSmoothingEnabled = false; 

    context.drawImage(spritesheet, 0, 270, 80, 120, 00, 70, 280, 420); //tree
    context.drawImage(spritesheet, 100, 700,800,200,0,400, 800,200);  //ground
    context.drawImage(spritesheet, 0, 0, 60, 50, 200, 450, 180, 120); //dog

  };
};		