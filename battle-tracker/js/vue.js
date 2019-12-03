Vue.component('actor_row', {
    props: ['pc'],
    template: '<div class="row">' +
                '<div class="three columns">' +
                  '<input type="number" v-model="pc.init">'+
                '</div>' +
                '<div class="four columns">' +
                  '<input type="text" v-model="pc.name">' +
                '</div>'+
                '<div class="one columns">' +
                  '<input type="number" v-model="pc.hp">' +
                '</div>' + 
                '<div class="one columns">' +
                  '<input type="number" v-model="pc.hp_change">' +
                '</div>' + 
                '<div class="three columns">' +
                  '<button :class="damage_btn" @click=damage>damage</button>' +
                  '<button :class="heal_btn" @click=heal>heal</button>' +
                '</div>' + 
              '</div>',
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
