class Actor {
  constructor(id, init, name, currentHP) {
    this.index = id;
    this.initiative = init;
    this.name = name;
    this.hp = currentHP;
  }

  damage(amt) {
    this.hp -= amt;
  }

  heal(amt) {
    this.hp += amt;
  }

  /*
    <li id='uuid'>
      <input type='number' id='initiative' readonly/>
      <input type='text' id='name' readonly/>
      <input type='number' id='currentHP' readonly/>
      <input type='number' id='HPChange' />
      <button id='heal(actorID)'>heal</button>
      <button id='damage(actorID)'>damage</button>
    </li>
  createActorBlock() {
    var li = document.createElement('li');
    li.setAttribute('id', this.index);

    var initiative = document.createElement('input');
    initiative.setAttribute('type','number');
    initiative.setAttribute('name', this.index + '_initiative');
    initiative.setAttribute('readonly','true');
    initiative.setAttribute('value', this.initiative);

    var name = document.createElement('input');
    name.setAttribute('type','text');
    name.setAttribute('name', this.index + '_name');
    name.setAttribute('readonly','true');
    name.setAttribute('value', this.name);

    var hp = document.createElement('input');
    hp.setAttribute('type','number');
    hp.setAttribute('name','hp');
    hp.setAttribute('id', this.index + 'hp');
    hp.setAttribute('readonly','true');
    hp.setAttribute('value',this.hp);

    var hpChange = document.createElement('input');
    hpChange.setAttribute('type','number');
    hpChange.setAttribute('name','hpChange');
    hpChange.setAttribute('id', this.index + '_hpChange');

    var damage = document.createElement('button');
    damage.setAttribute('name', this.index + '_damage');
    damage.appendChild(document.createTextNode('damage'));
    damage.setAttribute('onClick', 'damage("' + this.index + '")');

    var heal = document.createElement('button');
    heal.appendChild(document.createTextNode('heal'));
    heal.setAttribute('name', this.index + '_heal');
    heal.setAttribute('onClick', 'heal("' + this.index + '")');

    if(this.hp <= 0){
      initiative.setAttribute('style','color:var(--red);');
      name.setAttribute('style','color:var(--red);');
      hp.setAttribute('style','color:var(--red);');
      hpChange.setAttribute('style','color:var(--red);');
    }

    li.appendChild(initiative);
    li.appendChild(name);
    li.appendChild(hp);
    li.appendChild(hpChange);
    li.appendChild(damage);
    li.appendChild(heal);

    return li;
  }
}
