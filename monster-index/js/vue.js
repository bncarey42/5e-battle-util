Vue.component('v-select', VueSelect.VueSelect);

const monsters = new Vue({
  el: '#monsters',
  data: {
    monsters: monster_data,
    filters: {
      alignments: [],
      crs: [],
      sources: [],
      types: []
    }
  },
  watch: {
    filters: {
      handler: function (newValue) {

      },
      deep: true,
    }

  },
  methods: {
    getDnDBeyondUrl(name){
      var dashedName = name.replace(/ /g,"-")
      return 'https://www.dndbeyond.com/monsters/' + dashedName
    },
    filterMonsters() {

    },
    getDnDBeyondUrl(name){
      var dashedName = name.replace(/\S\s/g,"-")
      return 'https://www.dndbeyond.com/monsters/' + dashedName
    }
  },
  computed: {
    filteredMonsters() {
      return this.monsters ? Object.values(this.monsters): [];
    }
  }
});
