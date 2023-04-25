const app = Vue.createApp({
    data(){
        return{
            mensaje : 'Este es un texto generado por Vue!',
            nombre : 'Mario',
            profesion : 'Plomero'
        }
    }
});

app.mount('#miApp');