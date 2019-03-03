class Actor {
  constructor(init, name, currentHP) {
    this.inititive = init;
    this.name = name;
    this.hp = currentHP;
  }

  damage(amt) {
    this.hp -= amt;
  }

  heal(amt) {
    this.hp += amt;
  }
}
