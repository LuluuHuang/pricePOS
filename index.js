const app = Vue.createApp({
    data() {
        return {
            medicine:[],
            searchInput:'',
            searchWeight:'',
            searchResult:null
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
    methods: {
        search(){
            // console.log(this.searchInput);
            console.log('搜尋');
            this.searchResult =  this.medicine.find(item => item.name.includes(this.searchInput));
            console.log(this.searchResult);
            if (this.searchResult) {
                // 更新searchResult为匹配的药品的价格
                this.searchResult = this.searchResult.prices;
                console.log(this.searchResult);
            } else {
                // 如果未找到匹配的药品，将searchResult重置为null
                this.searchResult = null;
                alert('未找到匹配的药品');
            }
        }
    },
});
app.mount('#app');