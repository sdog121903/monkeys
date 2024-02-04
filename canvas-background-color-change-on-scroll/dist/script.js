var tStart = 200, // Start transition 100px from top
  tEnd = 4000, // End at 500px
  cStart = [0, 20, 40], // Dark Blue
  cEnd = [215, 255, 255], // Light Blue
  cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];


  function colorScrolling() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
    p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
    var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];

    ctx.fillStyle = 'rgb(' + cBg.join(',') + ')';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(colorScrolling); // call colorScrolling()
}, false);