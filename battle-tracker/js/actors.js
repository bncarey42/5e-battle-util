//add new actor
function addActor() {
  var ul = document.getElementById('actorList');
  var actorIndex = 'actor'+ (Number.isNaN(ul.children.length) ? 0 : ul.children.length);

  var li = document.createElement('li');
  var newActorBlock = createActorBlock(actorIndex);
  li.setAttribute('id', 'actorID_' + actorIndex);
  li.appendChild(newActorBlock);
  ul.appendChild(li);

  sortByInitiative();
}

//create new actor
function createActorBlock(actorIndex) {
  var initiative = document.createElement('input');
  initiative.setAttribute('type','number');
  initiative.setAttribute('name','initiative');
  initiative.setAttribute('id','initiative');
  var name = document.createElement('input');
  name.setAttribute('type','text');
  name.setAttribute('name','name');
  var hp = document.createElement('input');
  hp.setAttribute('type','number');
  hp.setAttribute('name','hp');
  hp.setAttribute('id', actorIndex + 'hp');
  var hpChange = document.createElement('input');
  hpChange.setAttribute('type','number');
  hpChange.setAttribute('name','hpChange');
  hpChange.setAttribute('id', actorIndex + 'hpChange');
  var damage = document.createElement('button');
  damage.setAttribute('name','damage');
  damage.appendChild(document.createTextNode('damage'));
  damage.setAttribute('onClick', 'damage("' + actorIndex + '")');
  var heal = document.createElement('button');
  heal.appendChild(document.createTextNode('heal'));
  heal.setAttribute('name','heal');
  heal.setAttribute('onClick', 'heal("' + actorIndex + '")');

  var actor = document.createElement('span');

  actor.appendChild(initiative);
  actor.appendChild(name);
  actor.appendChild(hp);
  actor.appendChild(hpChange);
  actor.appendChild(damage);
  actor.appendChild(heal);

  return actor;
}

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
