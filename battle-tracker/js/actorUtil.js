var actors = [];

//add new actor
function addActor() {
  var init = document.getElementById('input_initiative').value;
  var name = document.getElementById('input_name').value;
  var hp = document.getElementById('input_hp').value;
  actors['actor_' + actors.length] = new Actor(init, name, hp);

  //var ul = document.getElementById('actorList');
  //var actorIndex = 'actor'+ ;

  //var li = document.createElement('li');
  //var newActorBlock = createActorBlock(actorIndex);
  //li.setAttribute('id', 'actorID_' + actorIndex);
  //li.appendChild(newActorBlock);
  //ul.appendChild(li);

  //sortByInitiative();
  for (var variable in actors) {
    console.log(JSON.stringify(variable) + ":" + JSON.stringify(actors[variable]) );
  }
}
