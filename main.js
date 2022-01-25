let app = new Vue({
    el: '#app',
    data: {
        email: []
    },
    mounted: function () {
        for (let i = 0; i < 10; i++) {
            this.creaArray();
        }

    },
    methods: {
        creaArray: function () {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
                    this.email.push(risposta.data.response);

                })
                .catch(function (error) {

                    console.log(error);
                })


        }
    },

})