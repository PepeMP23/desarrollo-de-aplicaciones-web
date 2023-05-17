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
                  <td>{{articulo.precio}}</td>
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
        verduras: [
            {
                codigo: 1,
                descripcion: 'papas',
                precio: 12.52
            }, 
            {
                codigo: 2,
                descripcion: 'naranjas',
                precio: 21
            }, 
            {
                codigo: 3,
                descripcion: 'peras',
                precio: 18.20
            }
        ],
        carnes: [
          {
              codigo: 1,
              descripcion: 'arrachera',
              precio: 12.52
          }, 
          {
              codigo: 2,
              descripcion: 'sirloin',
              precio: 21
          }, 
          {
              codigo: 3,
              descripcion: 'angus',
              precio: 18.20
          }
      ]
    }
  }
}).mount('#miApp');
