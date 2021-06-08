Vue.component('actor_row', {
    props: ['pc'],
    template: `<div class="row">
                <div class="three columns">
                  <input type="number" v-model="pc.init" style="width:100%;">
                </div>
                <div class="three columns">
                  <input type="text" v-model="pc.name" style="width:100%;">
                </div>
                <div class="one columns">
                  <input type="number" v-model="pc.hp" style="width:100%;">
                </div> 
                <div class="one columns">
                  <input type="number" v-model="pc.hp_change" style="width:100%;">
                </div>
                <div class="four columns">
                  <button class="damage_btn" style="background-color:var(--red)" @click=damage>damage</button>
                  <button class="heal_btn" style="background-color:var(--green)" @click=heal>heal</button>
                </div>
              </div>`,
    methods: {
      damage: function() {this.pc.hp = Number(this.pc.hp) - Number(this.pc.hp_change)},
      heal: function() {this.pc.hp = Number(this.pc.hp) + Number(this.pc.hp_change)}
    }
})

const battle_tracker = new Vue({
el: '#actor_list',
data: {
    actors: [
        {init: 0, name:'', hp:0, hp_change: 0}
    ]
},
computed: {
    ordered_actors: function() {
    return this.actors.sort((a,b) => { return b.init - a.init})
    }
},
methods: {
    addActor: function() {
    this.actors.push({
                        init: 0,
                        name:'',
                        hp:0,
                        hp_change: 0
                    })
    }
}

})
