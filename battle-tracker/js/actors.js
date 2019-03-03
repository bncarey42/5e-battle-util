

//damage character
function damage(actorIndex) {
  var elm = document.getElementById(actorIndex + 'hp');
  var update = document.getElementById(actorIndex + 'hpChange');
  var staticNum = update.value;

  elm.value = Number(elm.value) - Number(staticNum);
  update.value = 0;
}

//heal character
function heal(actorIndex) {
  var elm = document.getElementById(actorIndex + 'hp');
  var update = document.getElementById(actorIndex + 'hpChange');
  var staticNum = update.value;

  elm.value = Number(elm.value) + Number(staticNum);
  update.value = 0;
}

//sort actors in initiative order
function sortByInitiative() {
  var actors = document.getElementById('actorList').getElementsByTagName('li');
  var actorList;
  for (var actor in actorList) {
    var initiative = actor.getElementById('initiative');
    console.log("initiative: " + initiative);
  }
}
