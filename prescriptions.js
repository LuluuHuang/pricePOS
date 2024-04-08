const app = Vue.createApp({
    data() {
        return {
            medicine:[],
            searchInput:'',
            searchResult:null,
            inputWeightNum:'',
            selectWeight:'斤',
            totalPrice:'',
            allItems:[],
            payMoney:[],
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
            const newItem = {
                searchResult: this.searchResult.name,
                inputWeightNum: this.inputWeightNum,
                selectWeight: this.selectWeight,
                totalPrice: this.totalPrice,
            };

            // 将该对象添加到 allItems 数组中
            this.allItems.push(newItem);
            this.payMoney.push(this.totalPrice);
            console.log(this.allItems);
            console.log(this.totalPrice);
            console.log(this.payMoney);
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