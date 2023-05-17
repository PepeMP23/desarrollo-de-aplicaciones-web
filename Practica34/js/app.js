const { createApp } = Vue
 
const articulos = {
  props: ['datos'],
  template: `
              <table class="table table-bordered">
                <tr>
                  <td>Código</td>
                  <td>Descripción</td>
                  <td>Precio</td>
                </tr>
                <tr v-for="articulo in datos">
                  <td>{{articulo.codigo}}</td>
                  <td>{{articulo.descripcion}}</td>
                  <td v-if="articulo.categoria == 'verduras'">{{articulo.precio}}</td>
                  <td v-else>Precio por kilo</td>
                </tr>
              </table>
            `
}

createApp({

  components: {
    'articulos': articulos
  },
  data() {
    return {
        articulos: [
            {
                codigo: 1,
                descripcion: 'papas',
                precio: 12.52,
                categoria: 'verduras'
            }, 
            {
                codigo: 2,
                descripcion: 'naranjas',
                precio: 21,
                categoria: 'verduras'
            }, 
            {
                codigo: 3,
                descripcion: 'peras',
                precio: 18.20,
                categoria: 'verduras'
            },
            {
                codigo: 4,
                descripcion: 'arrachera',
                precio: 12.52,
                categoria: 'carnes'
            }, 
            {
                codigo: 5,
                descripcion: 'sirloin',
                precio: 21,
                categoria: 'carnes'
            }, 
            {
                codigo: 6,
                descripcion: 'angus',
                precio: 18.20,
                categoria: 'carnes'
            }
      ],  
    }
  }
}).mount('#miApp');
