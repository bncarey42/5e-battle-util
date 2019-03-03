/*
<li id='uuid'>
  <button id='delete()'>D</button>
  <input type='number' id='initiative' readonly/>
  <input type='text' id='name' readonly/>
  <input type='number' id='currentHP' readonly/>
  <input type='number' id='HPChange' />
  <button id='heal()'>heal</button>
  <button id='damage()'>damage</button>
</li>
*/
//add Actor
//create new actor
function createActorBlock(actorIndex) {
  var initiative = document.createElement('input');
  initiative.setAttribute('type','number');
  initiative.setAttribute('name','initiative');
  initiative.setAttribute('id','initiative');
  initiative.setAttribute('readonly');
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
