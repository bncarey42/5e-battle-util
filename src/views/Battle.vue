<template>
  <div class="w-full">
    <app-card class="bg-yellow-50">
      <div class="flex justify-between w-full my-2">
        <div class="flex-grow w-5"></div>
        <div class="flex-grow w-14">Initiative</div>
        <div class="flex-grow w-1/2">Name</div>
        <div class="flex-grow w-14">HP</div>
        <div class="flex-grow w-14">Health Change</div>
        <div class="flex-grow">
        </div>
      </div>
      <div class="flex justify-between w-full py-2 px-1" v-for="actor in sortedActors" :key="actor.id" :id="actor.id">
        <div class="flex-grow w-5 flex justify-center my-auto">
          <button class="flex justify-center align-middle" @click="removeActor(actor)">
            <i class="fa-minus-circle-solid text-red-800 w-4"></i>
          </button>
        </div>
        <div class="mx-1 flex-grow w-14"><input class="w-full rounded px-3 py-1 border border-gray-200 bg-transparent" type="number" v-model="actor.init"/></div>
        <div class="mx-1 flex-grow w-1/2"><input class="w-full rounded px-3 py-1 border border-gray-200 bg-transparent" type="text" v-model="actor.name"/></div>
        <div class="mx-1 flex-grow w-14"><input class="w-full rounded px-3 py-1 border border-gray-200 bg-transparent" type="number" v-model="actor.hp"/></div>
        <div class="mx-1 flex-grow w-14"><input class="w-full rounded px-3 py-1 border border-gray-200 bg-transparent" type="number" v-model="actor.hp_change"/></div>
        <div class="flex justify-between">
          <button class="rounded bg-green-800 text-yellow-50 px-3 py-1 ml-1" @click="changeHealthPoints(actor, actor.hp_change, true)">Heal</button>
          <button class="rounded bg-red-800 text-yellow-50 px-3 py-1 ml-1" @click="changeHealthPoints(actor, actor.hp_change)">Damage</button>
        </div>
      </div>
      <template v-slot:footer>
        <div class="flex justify-end">
          <button class="rounded bg-yellow-600 text-yellow-50 px-3 py-1" @click="addActor()">Add Character</button>
        </div>
      </template>
    </app-card>
  </div>
</template>
<script>
import AppCard from "@/components/AppCard";

export default {
  components: {AppCard},
  name: 'Battle',
  data: () => {
    return {
      actors: []
    }
  },
  created() {
    this.addActor();
  },
  methods: {
    addActor: function () {
      const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      this.actors.push({
        id: id,
        init: 0,
        name: '',
        hp: 0,
        hp_change: 0
      });

      let actor_elm = document.querySelector(`#${id}`)
      console.log(actor_elm)
      actor_elm.classList.add('bg-green-900')
      window.setTimeout(() => {actor_elm.classList.remove('bg-green-900')}, 10000);
    },
    actorIndexById(id) {
      const index = this.actors.findIndex(character => character.id === id);
      if(index < 0) {
        this.$notify({
          title: 'Error',
          text: "Couldn't find actor",
          type: 'error'
        })
      }
      return index
    },
    removeActor(actor) {
      this.actors.splice(this.actorIndexById(actor.id), 1);
    },
    changeHealthPoints(actor, amount, heal=false) {
      const index = this.actorIndexById(actor.id);
      if(heal) {
        this.actors[index].hp+=Number(amount);
      } else {
        this.actors[index].hp-=Number(amount);
      }
    }
  },
  computed: {
    sortedActors() {
      return [... this.actors].sort((a,b) => b.init-a.init)
    }
  }
}
</script>