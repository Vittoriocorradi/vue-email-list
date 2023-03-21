const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: []               //Lista email
        }
    },
    beforeMount() {
        // Ciclo per avere dieci email
        for (let i = 1; i <= 10; i++) {
        // Pusha email generata con API dentro emailList
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emailList.push(response.data.response);
            })
        }
    }
}).mount('#app');

