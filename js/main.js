const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: []
        }
    },
    beforeMount() {
        for (let i = 1; 1 <= 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
            })
        }
    }
}).mount('#app');

