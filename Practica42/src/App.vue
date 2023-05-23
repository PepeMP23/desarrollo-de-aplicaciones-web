<template>
  <div>
    <h2>Contador</h2>
    <p>{{ contador }} elevado a la segunda potencia es: {{ calcularMejor }}</p>
    <p>{{ contador }} elevado a la segunda potencia es: {{ calcularMejor }}</p>
    <p>{{ contador }} elevado a la segunda potencia es: {{ calcularMejor }}</p>
    <p>{{ contador }} elevado a la segunda potencia es: {{ calcularMejor }}</p>
    <p>{{ contador }} elevado a la segunda potencia es: {{ calcularMejor }}</p>
    <p>{{ contador }} elevado a la segunda potencia es: {{ calcularMejor }}</p>
    <p>{{ contador }} elevado a la segunda potencia es: {{ calcularMejor }}</p>
    <p>{{ contador }} elevado a la segunda potencia es: {{ calcularMejor }}</p>
    <p>{{ contador }} elevado a la segunda potencia es: {{ calcularMejor }}</p>
    <p>{{ contador }} elevado a la segunda potencia es: {{ calcularMejor }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      contador: 2,
    }
  },
  methods:{
    calcular(){
      console.log('Entro a calcular');
      return this.contador * this.contador
    }
  },
  computed: {
    calcularMejor() {
      console.log('Entro a calcular mejor');
      return this.contador * this.contador;
    }
  }
}
</script>

<style>

</style>