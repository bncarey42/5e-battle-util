const nameGenerator = new Vue({
    el: '#nameGen',
    data: {
        names: [],
        corpus: getNames(),
        order: 5,
        orderMax: 6,
        orderMin: 2,
        numNames: 150,
        graph: {}
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
        clearNames() {
            this.names=[];
        },
        resetGraph() {
            this.graph = {};
        },
        random(max = 1) {
            return Math.floor(Math.random() * max);
        },
        populateGraph () {
            this.graph = {};
            this.corpus.split('\n').forEach(name => {
                for(let i=0; i < name.length-this.orderReverse;i++) {
                    const gram = name.substring(i, i+this.orderReverse);
                    const destination = name.charAt(i+this.orderReverse);
                    console.log(gram, destination);
                    if(!this.graph[gram]) {
                        this.graph[gram] = [];
                    }
                    if(!this.graph[destination]) {
                        this.graph[destination] = [];
                    }
                    this.graph[name.substring(i, i+this.orderReverse)].push(destination);
                }
            });
        },
        markovNames() {
            for(let i=0; i<this.numNames; i++) {
                let currentGram = Object.keys(this.graph)[this.random(Object.keys(this.graph).length)];
                let name = currentGram;
                let next = this.graph[currentGram][this.random(this.graph[currentGram].length)];
                do {
                    name += next;
                    currentGram = name.substr(name.length-this.orderReverse, name.length);
                    if(this.graph[currentGram]) { 
                        next = this.graph[currentGram][this.random(this.graph[currentGram].length)];
                    } else {
                        next = null;
                    }
                } while (next)
                this.names.push(name);
            }
            
        },
        getNames() {
            if(!Object.keys(this.graph).length){
                this.populateGraph();
            }
            
            this.markovNames();
        }
    },
    computed: {
        orderReverse() {
            return this.orderMax + 1 - this.order;
        }
    }
});