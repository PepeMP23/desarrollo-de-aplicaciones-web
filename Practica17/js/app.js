const { createApp } = Vue
    createApp({
        data() {
            return {
                articulos : [
                    {
                    codigo : 1,
                    descripcion : 'papas',
                    precio : 12.52
                    },
                    {
                        codigo : 2,
                        descripcion : 'naranjas',
                        precio : 21
                    },
                    {
                        codigo : 3,
                        descripcion : 'peras',
                        precio : 18.20
                    }
                ],
                suma : 0
            }
        },
        mounted() {
            this.sumarValores();
        },
        methods : {
            sumarValores() {
                for (let i = 0; i < this.articulos.length; i++) {
                    console.log('Suma: '+this.suma);
                    console.log('Producto: ' + this.articulos[i].codigo + 
                                ', Precio: '+ +this.articulos[i].precio)
                    this.suma += this.articulos[i].precio;
                }
            }
        }
    }).mount('#miApp');
