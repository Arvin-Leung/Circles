// This line allows the button to call the function
document.getElementById('answerone').addEventListener('click', calculator)

// This function calculates the circumference and area

function calculator () {
  // This sets diameter to the user's input
  const diameter = document.getElementById('myinput').value
  // radius is just half of the diameter
  const radius = diameter / 2
  // the formula below is for area and displays the answer for area
  let area = radius ** 2 * Math.PI
  area = Math.round(area)
  document.getElementById('result').innerHTML = 'Your Area is: ' + area
  // the formula below is for circumference and displays the answer for circumference
  let circumference = radius * 2 * Math.PI
  circumference = Math.round(circumference)
  document.getElementById('answer').innerHTML = 'Your Circumference is: ' + circumference
}
