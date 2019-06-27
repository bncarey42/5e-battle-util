function dieOneHundred() {
  return Math.floor(Math.random() * (100 + 1))
}

function wildMagic(roll, lvl) {
  if(lvl < 1)       { return true       }
  else if(lvl < 6)  { return 20 >= roll }
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
  result.setAttribute('style', 'color:' + randomColor())
  var lvl = document.getElementById('lvl').value
  var roll = dieOneHundred()

  if(wildMagic(Number(roll), lvl)) {
    var text = surge(Number(dieOneHundred()))
    var surge_text = document.createTextNode(text)
    console.log(roll +", "+lvl +" IT HAPPENS : " + text)
    result.appendChild(surge_text)
  } else {
    console.log(roll +", "+lvl)
    var surge_text = document.createTextNode("Nothing happens")
    result.appendChild(surge_text)
  }
  document.getElementById('cast').setAttribute('style', 'background-color:' + randomColor())
}

function randomColor() {
  var colors = [ '--cyan', '--blue', '--purple', '--green', '--red', '--orange', '--light-orange']
  return 'var(' + colors[Math.floor(Math.random() * (colors.length))] + ');'
}
