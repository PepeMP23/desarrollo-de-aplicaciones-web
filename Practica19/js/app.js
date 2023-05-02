const { createApp } = Vue

const canciones = [
    {
        author : 'Junior H',
        nombre : 'El azul'
    },
    {
        author : 'Roberto Cantores',
        nombre : 'El triste'
    },
    {
        author : 'Juan Carlos Calderón',
        nombre : 'El azul'
    }
]
createApp({
    data() {
        return {
            canciones : canciones
        }
    }
}).mount('#miApp');
