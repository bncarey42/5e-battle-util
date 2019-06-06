function dieOneHundred() {
  return Math.floor(Math.random() * 100) + 1)
}

function wildMagic(var roll, var lvl) {
  if(lvl < 6) { return 0.2 >= roll/100 }
  else if(lvl < 11) { return 0.15 >= roll/100 }
  else if(lvl < 16) { return 0.1 >= roll/100 }
  else if(lvl < 20) { return 0.05 >= roll/100 }
}
