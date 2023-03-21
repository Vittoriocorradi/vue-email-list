const url = 'https://flynn.boolean.careers/exercises/api/random/mail'
const { createApp } = Vue;

createApp({
    data() {
        return {
            emailsNumber: 10,
            emailList: []              //Lista email
        }
    },
    mounted() {
        // Ciclo per avere dieci email
        for (let i = 1; i <= this.emailsNumber; i++) {
        // Pusha email generata con API dentro emailList
        axios.get(url)
            .then((response) => {
                this.emailList.push(response.data.response);
            })
        }
    }   
}).mount('#app');

