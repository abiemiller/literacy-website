let rotation = 0;

function spinWheel() {
  rotation += 1080 + Math.floor(Math.random() * 360);
  document.getElementById("spinArea").style.transform = `rotate(${rotation}deg)`;
}
