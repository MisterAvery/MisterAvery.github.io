const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scoreCount = document.getElementById('scoreCounter');
const canvasBg = document.getElementById('bg');

const brd = new Bird();
let pipes = [new Pipe()];

let allowJump = true;
let score = 0;

let errorForgive = 10;

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height + 10);
  
  //draw the things
  for(let p in pipes) {
    //render and move the pipes
    pipes[p].draw();
    pipes[p].move();
    
    if(pipes[p].x < 0 - pipes[p].width) {
      pipes.shift();
    }
    
    if(pipes[p].x < 240 && pipes[p].spawnedAnother === false) {
      pipes.push(new Pipe());
      pipes[p].spawnedAnother = true;
    }
    
    if(pipes[p].x + pipes[p].width <= brd.x && pipes[p].counted === false) {
      score++;
      pipes[p].counted = true;
    }
    
    //hit detection
    if(brd.x + (brd.diam - errorForgive) >= pipes[p].x && brd.y + errorForgive <= pipes[p].top) {
      gameOver();
    }
  
    if(brd.x + (brd.diam - errorForgive) >= pipes[p].x && brd.y + (brd.diam - errorForgive) >= pipes[p].gap + pipes[p].top) {
      gameOver();
    }
  }
  
  scoreCount.innerHTML = 'Score: ' + score;
  
  brd.draw();
  brd.move();
  
  //listen for space being pressed
  document.addEventListener('keydown', press);
}, 40);

function press(e) {
  if(e.code == 'Space' && allowJump === true) {
    brd.jump();
  }
}

function gameOver() {
  allowJump = false;
  
  for(let p in pipes) {
    pipes[p].speed = 0;
  }
}