const { createApp } = Vue

createApp({
    data() {
        return {
            codigo : '',
            descripcion : '',
            precio : '',

            articulos : [
                {
                    codigo : 1,
                    descripcion : 'papa',
                    precio : 34
                },
                {
                    codigo : 2,
                    descripcion : 'manzana',
                    precio : 23
                }
            ]
        }
    },
    methods : {
        agregarArticulos(){
            this.articulos.push({
                codigo : this.codigo,
                descripcion : this.descripcion,
                precio : this.precio
            });
            this.codigo = '';
            this.descripcion = '';
            this.precio = '';
        }
    }
}).mount('#miApp');
