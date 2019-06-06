function dieOneHundred() {
  return Math.floor(Math.random() * (100 + 1))
}

function wildMagic(roll, lvl) {
  if(lvl < 6)       { return 20 >= roll }
  else if(lvl < 11) { return 15 >= roll }
  else if(lvl < 16) { return 10 >= roll }
  else if(lvl < 20) { return 5  >= roll }
}

function surge(roll) {
  return surgeTable[roll]
}

function cast() {
  var result = document.getElementById('surge_result')
  result.innerHTML =""
  result.setAttribute('style', randomColor());
  var lvl = document.getElementById('lvl').value
  var roll = dieOneHundred()
  console.log(roll +", "+lvl);

  if(wildMagic(Number(roll), lvl)) {
    var surge_text = document.createTextNode(surge(Number(dieOneHundred())))
    console.log("IT HAPPENS : " + surge_text);
    result.appendChild(surge_text)
  } else {
    var surge_text = document.createTextNode("Nothing happens")
    result.appendChild(surge_text)
  }
}

function randomColor() {
  var colors = [ '--cyan', '--blue', '--purple', '--green', '--red', '--orange', '--light-orange']

  return 'color:var(' + colors[Math.floor(Math.random() * (colors.length))] + ');'
}
