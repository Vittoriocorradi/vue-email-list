const { createApp } = Vue;

const app = createApp({
    
})

createApp({
    data() {
        return {
            emailList: [],               //Lista email
            nameList: ['Piero',
        'Paolo','Poldo']
        }
    },
    beforeMount() {
        // Ciclo per avere dieci email
        const fragment = [];
        for (let i = 1; i <= 10; i++) {
        // Pusha email generata con API dentro emailList
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                fragment.push(response.data.response);
            })
        }
        // Montati insieme con timeout
        setTimeout(() => {
            this.emailList = [...fragment];
        }, 500);

    }
}).mount('#app');

