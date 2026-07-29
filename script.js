function calculateSquare(){
  //I think Number() converts the value into an actual number
  let width = Number(document.getElementById("squareWidth").value);
  let height = Number(document.getElementById("squareHeight").value);

  let result = width * height
  document.getElementById("squareresult").innerHTML = result;
}
function calculateTriangle(){
  let width = Number(document.getElementById("triangleWidth").value);
  let height = Number(document.getElementById("triangleHeight").value);

  let result = (width * height) / 2;
  document.getElementById("triangleresult").innerHTML = result;
}
function calculateCircle(){
  let radius = Number(document.getElementById("radius").value);

  let result = 3.14 * (radius * radius);
  document.getElementById("circleresult").innerHTML = result;
}
