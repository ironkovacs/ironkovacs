'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let size: number = canvas.width;


function colorStroke() {
  ctx.strokeStyle = '#4286f4';
  ctx.stroke();
}

function cross(x, y, size, r) {
  
  if (size >= 0.1) {
    ctx.beginPath();
    ctx.moveTo(x + size / 3, 0 + y);
    ctx.lineTo(x + size / 3, size + y);
    ctx.moveTo(x + size - size / 3, 0 + y);
    ctx.lineTo(x + size - size / 3, size + y);
    ctx.moveTo(x + 0, size / 3 + y);
    ctx.lineTo(x + size, size / 3 + y);
    ctx.moveTo(x + 0, size - size / 3 + y);
    ctx.lineTo(x + size, size - size / 3 + y);
    colorStroke();

    cross(x + size / 3, 0 + y, size / 3, r);
    cross(x + size - size / 3, size / 3 + y, size / 3, r);
    cross(x + 0, size / 3 + y, size / 3, r);
    cross(x + size / 3, size - size / 3 + y, size / 3, r);
  } 
    
}
cross(0, 0, size, 3);



