const app = Vue.createApp({
    data(){
        return{
            nombre : 'Mario'
        }
    },
    methods: {
        cambiarNombre(){
            this.nombre = 'Luigi'
            this.cambiarMayusculas();
        },
        cambiarMayusculas(){
            this.nombre = this.nombre.toUpperCase();
        },
        cambiarMinusculas(){
            this.nombre = this.nombre.toLowerCase();
        }
    }
});

app.mount('#miApp');