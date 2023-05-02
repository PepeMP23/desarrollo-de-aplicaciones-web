const { createApp } = Vue

const frases = [
    {
        id : 1,
        texto : 'El derecho al respeto ajeno es la paz',
        autor: 'Benito Juarez'
    },
    {
        id : 2,
        texto : 'La medida del amor es amar sin medida',
        autor: 'San Agustín'
    },
    {
        id : 3,
        texto : 'El dinero no puede comprar la felicidad',
    }
]

createApp({
    data() {
        return {
            frases : frases,
            nueva : 'ingresa una nueva frase'
        }
    },
    methods : {
        agregarFrase( event ){
            console.log(event);
            if(event.charCode == 13)
            {
                console.log('Enter');
                // this.frases.unshift({
                this.frases.push({
                    texto: this.nueva
                });
                this.nueva = '';
            }
        }
    }
}).mount('#miApp');
