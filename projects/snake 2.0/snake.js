class Snake {
  constructor() {
    this.x = Math.floor(Math.random() * gameSideLength) * tilePixelSideLength;
    this.y = Math.floor(Math.random() * gameSideLength) * tilePixelSideLength;
    this.dir = {x: 0, y: 0};
    this.lastMove;
    this.tail = [];
  }
  
  show() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, tilePixelSideLength, tilePixelSideLength);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
  
  changeDir(event) {
    if(event.keyCode - this.lastMove != 2 && event.keyCode - this.lastMove != -2 || this.tail.length === 0) {
      switch(event.keyCode) {
        case 37:
          this.dir.x = -1 * tilePixelSideLength;
          this.dir.y = 0;
          break;
        case 38:
          this.dir.y = -1 * tilePixelSideLength;
          this.dir.x = 0;
          break;
        case 39:
          this.dir.x = tilePixelSideLength;
          this.dir.y = 0;
          break;
        case 40:
          this.dir.y = tilePixelSideLength;
          this.dir.x = 0;
          break;
      }
      
      this.lastMove = event.keyCode;
    }
  }
  
  move() {
    this.x += this.dir.x;
    this.y += this.dir.y;
    
    if(this.x + tilePixelSideLength > width || this.x < 0 || this.y + tilePixelSideLength > height || this.y < 0) GAMESTATE = 'over';
  }
  
  eat() {
    if(this.x == apple.x && this.y == apple.y) {
      // for(let i = 0; i < 15; i++) {/uncomment for cheats
        this.tail.push({x: this.x + this.dir.x * tilePixelSideLength, y: this.y + this.dir.y * tilePixelSideLength});
       
        score++;
      // }
      apple.pickLocation();
    }
  }
}