const nameGenerator = new Vue({
    el: '#nameGen',
    data: {
        names: [],
        corpus: getNames(),
        order: 5,
        orderMax: 10,
        orderMin: 1,
        numNames: 50,
        graph: {},
        loadingNames: false
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
            this.loadingNames = true;
            this.graph = {};
            this.corpus.split('\n').forEach(name => {
                name += '%'; // append to each name so we can track the probability of the name ending. I'm making the (BAD) assume that % won't show uup in names NOTE: this is a dumb assumption. The split should be done with regex to include the \n character at the end of each line but I have other things to work on today and fighting with regex will make this take longer than a silly little app like this should take //TODO later.
                for(let i=0; i < name.length-this.orderReverse;i++) {
                    const gram = name.substring(i, i+this.orderReverse);
                    const destination = name.charAt(i+this.orderReverse);
                    if(!this.graph[gram]) {
                        this.graph[gram] = [];
                    }
                    this.graph[gram].push(destination); //TODO this should be a map of the value to its edge weight to be more memory efficient and I'll fix it when I have a second
                }
            });
            this.loadingNames = false;
        },
        markovNames() {
            for(let i=0; i<this.numNames; i++) {
                let currentGram = Object.keys(this.graph)[this.random(Object.keys(this.graph).length)];
                let name = currentGram;
                let next = '';
                do {    
                    name += next;
                    currentGram = name.substr(name.length-this.orderReverse, name.length);
                    if(this.graph[currentGram]) { 
                        if(this.graph[currentGram].length === 0) {
                            next = null
                        } else {
                            next = this.graph[currentGram][this.random(this.graph[currentGram].length)];
                        }
                        if(next === '%'){
                            next = null;
                        }
                    } else {
                        next = null;
                    }
                    
                } while (next)
                this.names.push(name.charAt(0).toUpperCase()+name.substring(1));
            }
            
        },
        getNames() {
            if(!Object.keys(this.graph).length){
                this.populateGraph();
            }
            
            this.markovNames();
        },
        copyNames(names = []){
            names = [... names].join();
            navigator.clipboard.writeText(names)
                .then(() => console.log(`Copied names to system clipboard: `, names))
                .catch(err => console.error('error copying names to system clipboard:', err));
        }
    },
    computed: {
        orderReverse() {
            return this.orderMax+1 - this.order;
        }
    }
});