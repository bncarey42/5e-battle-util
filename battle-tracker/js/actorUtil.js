var actors = [];
var actorIndex = 0;
//add new actor
function addActor() {
  actors.push(new Actor('actor_' + actorIndex++,
                        Number(document.getElementById('input_initiative').value),
                               document.getElementById('input_name').value,
                        Number(document.getElementById('input_hp').value)));
  updateActorBlocks();
  document.getElementById('input_initiative').value = "";
  document.getElementById('input_name').value = "";
  document.getElementById('input_hp').value = "";
}

function updateActorBlocks() {
  actors.sort((a,b) => {
    return b.initiative - a.initiative;
  })

  var ul = document.getElementById('actorList');
  ul.innerHTML = '';
  ul.appendChild(titles())

  for(var i = 0; i < actors.length; i++) {
    ul.appendChild(actors[i].createActorBlock());
  }
}

//damage character
function damage(actorIndex) {
  actors.find((actor) => {return actor.index == actorIndex})
    .damage(Number(document.getElementById(actorIndex + '_hpChange').value));
  updateActorBlocks();
}

//heal character
function heal(actorIndex) {
  actors.find((actor) => {return actor.index == actorIndex})
    .heal(Number(document.getElementById(actorIndex + '_hpChange').value));
  updateActorBlocks();
}

function titles() {
  var li = document.createElement('li');
  li.setAttribute('id','titles');
  var initiative = document.createElement('input');
  initiative.setAttribute('type','text');
  initiative.setAttribute('readonly','true');
  initiative.setAttribute('value', "Initiative");

  var name = document.createElement('input');
  name.setAttribute('type','text');
  name.setAttribute('readonly','true');
  name.setAttribute('value', "Name");

  var hp = document.createElement('input');
  hp.setAttribute('type','text');
  hp.setAttribute('readonly','true');
  hp.setAttribute('value', "Current HP");

  var hpChange= document.createElement('input');
  hpChange.setAttribute('type','text');
  hpChange.setAttribute('readonly','true');
  hpChange.setAttribute('value',"HP +/-");

  li.appendChild(initiative);
  li.appendChild(name);
  li.appendChild(hp);
  li.appendChild(hpChange);
  var strong = document.createElement('strong');
  strong.appendChild(li);
  return strong;
}
