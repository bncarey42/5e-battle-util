var actors = [];

//add new actor
function addActor() {
  actors.push(new Actor(uuidv4(),
                        Number(document.getElementById('input_initiative').value),
                        document.getElementById('input_name').value,
                        Number(document.getElementById('input_hp').value)));
  updateActorBlocks();
}

function updateActorBlocks() {
  actors.sort((a,b) => {
    return b.initiative - a.initiative;
  })
  console.log(JSON.stringify(actors));
  var ul = document.getElementById('actorList');
  ul.innerHTML = '';
  for(var i = 0; i < actors.length; i++) {
  //for (var key in actors) {
    console.log(JSON.stringify(actors[i]));
    ul.appendChild(titles())
    ul.appendChild(actors[i].createActorBlock());
  }
}

//damage character
function damage(actorIndex) {
  actors[actorIndex].damage(Number(document.getElementById(actorIndex + '_hpChange').value));
  updateActorBlocks();
}

//heal character
function heal(actorIndex) {
  actors[actorIndex].heal(Number(document.getElementById(actorIndex + '_hpChange').value));
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
  hp.setAttribute('value', "Name");

  var hpChange= document.createElement('input');
  hpChange.setAttribute('type','text');
  hpChange.setAttribute('readonly','true');
  hpChange.setAttribute('value',"HP +/-");

  li.appendChild(initiative);
  li.appendChild(name);
  li.appendChild(hp);
  li.appendChild(hpChange);

  return li;
}
