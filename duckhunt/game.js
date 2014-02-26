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
    
    //5 birds
    context.drawImage(spritesheet,0, 115, 36, 36, 200, 30, 72, 72);
    context.drawImage(spritesheet, 0, 115, 36, 36, 400, 100, 72, 72);
    context.drawImage(spritesheet,0, 115, 36, 36, 550, 45, 72, 72);
    context.drawImage(spritesheet,0,115,36,36,250, 200, 72, 72);
    context.drawImage(spritesheet,0,115,36,36,650, 300, 72, 72);
  };
};		