 document.getElementById('answerOne').addEventListener('click', calculator)


function calculator () {
  let diameter = document.getElementById('myInput').value;
  let radius = diameter / 2
  var area = radius ** 2 * Math.PI
  document.getElementById('result').innerHTML = 'Your Area is: ' + area
  var circumference = radius * 2 * Math.PI
  document.getElementById('answer').innerHTML = 'Your Circumference is: ' + circumference
}
