document.addEventListener('DOMContentLoaded', () => {

  const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

  // context.beginPath();
  //
  // context.moveTo(200, 200);
  // context.lineTo(500, 200);
  // context.lineTo(500, 300);
  // context.lineTo(200, 300);
  //
  // context.closePath();
  // context.stroke();
  //
  // context.fillRect(205, 205, 290, 90);
  //
  // const p0 = {
  //   x: Math.random() * 600,
  //   y: Math.random() * 600
  // },
  // p1 = {
  //   x: Math.random() * 600,
  //   y: Math.random() * 600
  // },
  // p2 = {
  //   x: Math.random() * 600,
  //   y: Math.random() * 600
  // },
  // p3 = {
  //   x: Math.random() * 600,
  //   y: Math.random() * 600
  // };
  //
  // context.beginPath();
  // context.moveTo(p0.x, p0.y);
  // context.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  // context.stroke();
  //
  // const drawPoint = point => {
  //   context.fillRect(point.x - 4, point.y - 4, 8, 8);
  // };
  //
  // drawPoint(p0);
  // drawPoint(p1);
  // drawPoint(p2);
  // drawPoint(p3);

  context.beginPath();
  context.arc(200, 200, 200, 0, 1, true);
  context.stroke();

});
