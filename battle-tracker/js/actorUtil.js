var actors = [];
var actornum = 0;
//add new actor
function addActor() {
  var actorIndex = 'actor_' + actornum++;
  actors[actorIndex] = new Actor(document.getElementById('input_initiative').value,
                                document.getElementById('input_name').value,
                                document.getElementById('input_hp').value);
  sortByInitiative();

  var ul = document.getElementById('actorList');

  for (var actor in actors) {
    console.log(JSON.stringify(actor) + ":" + JSON.stringify(actors[actor]) );
    var li = document.createElement('li');
    var newActorBlock = createActorBlock(actor, actors[actor]);
    li.setAttribute('id', 'actorID_' + actorIndex);
    li.innerHTML = newActorBlock;
    ul.childNodes = li;
  }
}

function sortByInitiative() {
  actors.sort(function(actors, actors){
    console.log(a.initiative + " , " + b.initiative)
    return a.initiative - b.initiative
  });
}

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
function createActorBlock(actorIndex, actor) {
  var initiative = document.createElement('input');
  initiative.setAttribute('type','number');
  initiative.setAttribute('name', actorIndex + '_initiative');
  initiative.setAttribute('readonly','true');
  initiative.setAttribute('value', actor.initiative);
  var name = document.createElement('input');
  name.setAttribute('type','text');
  name.setAttribute('name', actorIndex + '_name');
  name.setAttribute('readonly','true');
  name.setAttribute('value', actor.name);
  var hp = document.createElement('input');
  hp.setAttribute('type','number');
  hp.setAttribute('name','hp');
  hp.setAttribute('id', actorIndex + 'hp');
  hp.setAttribute('readonly','true');
  hp.setAttribute('value',actor.hp);
  var hpChange = document.createElement('input');
  hpChange.setAttribute('type','number');
  hpChange.setAttribute('name','hpChange');
  hpChange.setAttribute('id', actorIndex + 'hpChange');
  var damage = document.createElement('button');
  damage.setAttribute('name', actorIndex + '_damage');
  damage.appendChild(document.createTextNode('damage'));
  damage.setAttribute('onClick', 'damage("' + actorIndex + '")');
  var heal = document.createElement('button');
  heal.appendChild(document.createTextNode('heal'));
  heal.setAttribute('name', actorIndex + '_heal');
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
