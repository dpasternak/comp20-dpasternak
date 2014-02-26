  function Draw(){
  var canvas = document.getElementById("game");
  var context = canvas.getContext("2d");
  var ground = new Image();
  ground.src = "assets/duckhunt.png";
  ground.onload = function() {
    context.drawImage(ground, 0, 270, 80, 120, 00, 70, 280, 420);
    context.drawImage(ground, 100, 700,800,200,0,400, 800,200  );
      };
};	