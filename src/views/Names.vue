<template>
  <div class="w-full">
    <app-card class="bg-yellow-50 w-full mb-4">
      <label for="corpus" class="text-xl font-semibold">Input Source Names Here:</label>
      <textarea name="corpus" v-model="corpus" id="corpus" class="w-full h-80 rounded px-3 py-1 border border-gray-300"></textarea>
      <p class="italic">NOTE: Each name should be on a new line to account for multi part names</p>
      <div class="flex flex-between w-full my-4">
        <a href="javascript:void(0)" @click="decrementOrder()">Less Random</a>
        <div class="flex-grow mx-2">
          <input type="range" :min="orderMin" :max="orderMax" v-model="order"
                 class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-full"/>
        </div>
        <a href="javascript:void(0)" @click="incrementOrder()">More Random</a>
      </div>
      <label class="w-100 my-4">
        Generate <input name="numNames" type="number" id="number-names" class="rounded py-1 px-3 border border-gray-300" v-model="numNames"/> names
      </label>
      <button class="w-full bg-green-700 rounded text-yellow-50 py-2 my-4 hover:bg-green-600" @click="getNames()">Generate {{
          Object.keys(graph).length ?
              'More' : ''
        }}
      </button>
      <div v-if="loadingNames">
        <div class="flex justify-center ">
          <img id="heart-to-beat" src="@/assets/images/70sDice.png" alt="dice-loading-animation">
        </div>
      </div>
      <div v-else-if="names.length > 0">
        <div class="flex justify-end">
          <a class="underline " href="javascript:void(0)" @click="clearNames()">Clear Names</a>
        </div>
        <ul class="border rounded p-3 my-4 group-even:bg-gray-700">
          <li v-for="(name, i) in names" :key="i" class="flex justify-between items-stretch px-2 py-1 rounded hover:bg-opacity-25 hover:bg-gray-800">
            <div>{{ name }}</div>
            <!-- USING FONT AWESOME 'far fa-copy' ICON IN ITS SVG FORM HERE. NO CHANGE HAS BEEN MADE TO THE ICON. LINK TO LICENSE: https://fontawesome.com/license -->
            <div>
              <a href="javascript:void(0)" @click="copyNames([name])"><i class="fa-copy-regular w-4 my-auto"></i></a>
            </div>
          </li>
        </ul>
      </div>
    </app-card>
  </div>
</template>
<script>
import getNames from '@/assets/data/names'
import AppCard from "@/components/AppCard";

export default {
  components: {AppCard},
  data() {
    return {
      names: [],
      corpus: getNames,
      order: 5,
      orderMax: 10,
      orderMin: 1,
      numNames: 50,
      graph: {},
      loadingNames: false
    }
  },
  watch: {
    corpus() {
      this.resetGraph()
    },
    order() {
      this.resetGraph()
    }
  },
  methods: {
    incrementOrder() {this.order++;},
    decrementOrder() {this.order--;},
    clearNames() {
      this.names = [];
    },
    resetGraph() {
      this.graph = {};
    },
    random(max = 1) {
      return Math.floor(Math.random() * max);
    },
    populateGraph() {
      this.loadingNames = true;
      this.graph = {};
      this.corpus.split('\n').forEach(name => {
        name += '%'; // append to each name so we can track the probability of the name ending. I'm making the (BAD) assume that % won't show uup in names NOTE: this is a dumb assumption. The split should be done with regex to include the \n character at the end of each line but I have other things to work on today and fighting with regex will make this take longer than a silly little app like this should take //TODO later.
        for (let i = 0; i < name.length - this.orderReverse; i++) {
          const gram = name.substring(i, i + this.orderReverse);
          const destination = name.charAt(i + this.orderReverse);
          if (!this.graph[gram]) {
            this.graph[gram] = [];
          }
          this.graph[gram].push(destination); //TODO this should be a map of the value to its edge weight to be more memory efficient and I'll fix it when I have a second
        }
      });
      this.loadingNames = false;
    },
    markovNames() {
      for (let i = 0; i < this.numNames; i++) {
        let currentGram = Object.keys(this.graph)[this.random(Object.keys(this.graph).length)];
        let name = currentGram;
        let next = '';
        do {
          name += next;
          currentGram = name.substr(name.length - this.orderReverse, name.length);
          if (this.graph[currentGram]) {
            if (this.graph[currentGram].length === 0) {
              next = null
            } else {
              next = this.graph[currentGram][this.random(this.graph[currentGram].length)];
            }
            if (next === '%') {
              next = null;
            }
          } else {
            next = null;
          }

        } while (next)
        this.names.push(name.charAt(0).toUpperCase() + name.substring(1));
      }

    },
    getNames() {
      if (!Object.keys(this.graph).length) {
        this.populateGraph();
      }

      this.markovNames();
    },
    copyNames(names = []) {
      names = [...names].join();
      navigator.clipboard.writeText(names)
          .then(() => console.log(`Copied names to system clipboard: `, names))
          .catch(err => console.error('error copying names to system clipboard:', err));
    }
  },
  computed: {
    orderReverse() {
      return this.orderMax + 1 - this.order;
    }
  }
}
</script>
<style>
input[type="range"]::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  appearance: none;
  cursor: ew-resize;
  background: #FFF;
  box-shadow: -1005px 0 0 1000px #605E5C;
  border-radius: 50%;
}
</style>
