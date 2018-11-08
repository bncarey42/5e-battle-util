function addActor() {
  var ul = document.getElementById('actors');
  var li = document.createElement('li');
  var ulChildrenCount = Number.isNaN(ul.children.length) ? 0 : ul.children.length;
  var actorIndex = 'actor'+ ulChildrenCount;
  var newActorBlock = createActorBlock(actorIndex);

  li.setAttribute('id', actorIndex);
  li.appendChild(newActorBlock);
  ul.appendChild(li);
  sortByInitiative();
}

function createActorBlock(actorIndex) {
  var actor = document.createElement('span');
  actor.setAttribute('id', actorIndex);
  var pc = document.createElement('input');
  pc.setAttribute('type','checkbox');
  pc.setAttribute('name','pc');
  var initiative = document.createElement('input');
  initiative.setAttribute('type','number');
  initiative.setAttribute('name','initiative');
  var nat20 = document.createElement('input');
  nat20.setAttribute('type','checkbox');
  nat20.setAttribute('name','nat20');
  var name = document.createElement('input');
  name.setAttribute('type','text');
  name.setAttribute('name','name');
  var hp = document.createElement('input');
  hp.setAttribute('type','number');
  hp.setAttribute('name','hp');
  var hpChange = document.createElement('input');
  hpChange.setAttribute('type','number');
  hpChange.setAttribute('name','hpChange');
  var damage = document.createElement('button');
  damage.setAttribute('name','damage');
  damage.appendChild(document.createTextNode('damage'));
  damage.setAttribute('onClick', 'damage(actorIndex)');
  var heal = document.createElement('button');
  heal.appendChild(document.createTextNode('heal'));
  heal.setAttribute('name','heal');
  heal.setAttribute('onClick', 'heal(actorIndex)');

  actor.appendChild(pc);
  actor.appendChild(pc);
  actor.appendChild(initiative);
  actor.appendChild(nat20);
  actor.appendChild(name);
  actor.appendChild(hp);
  actor.appendChild(hpChange);
  actor.appendChild(damage);
  actor.appendChild(heal);

  /*
    <span>
      <input type="checkbox" name="pc" value="">
      <input type="number" name="initiative" value="">
      <input type="checkbox" name="nat20" value="">
      <input type="text" name="name" value="">
      <input type="number" name="hp" value="">
      <input type="number" name="hpchange" value="">
      <button type="button" name="damage" onClick='damage(actorIndex)'>damage</button>
      <button type="button" name="heal" onClick='heal(actorIndex)'>heal</button>
    </span>
  */
  return actor;
}

function sortByInitiative() {
  //sort actors in initiative order
}

function heal(actor) {
  // get actor
  // get hp
  // get hpTotal
  // get hpChange
  //return hpTotal + hpChange
}

function damage(actor) {
  // get actor
  // get hp
  // get hpTotal
  // get hpChange
  //return hpTotal - hpChange
}

function removeSelectedActors(){}

function resetBoard(){}

function toJSON(){}
