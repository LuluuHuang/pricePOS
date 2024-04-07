const app = Vue.createApp({
    data() {
        return {
            medicine:[],
            searchInput:'',
            searchResult:null,
            inputWeightNum:'',
            selectWeight:'斤',
            totalPrice:'',
            allItems:[]
        }
    },
    methods: {
        search(){
            this.searchResult =  this.medicine.find(item => item.name.includes(this.searchInput));
            console.log(this.searchResult);
        },
        calculate(){
            console.log(this.selectWeight);
            this.totalPrice = this.inputWeightNum*(this.searchResult.prices.find(item => item.weight === this.selectWeight).price);
            console.log(this.totalPrice);
        }
    },
    mounted() {
        axios.get('./data.json')
        .then(response => {
            this.medicine = response.data;
            console.log(this.medicine);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },
});
app.mount('#app');