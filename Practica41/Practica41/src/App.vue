<script setup>
  import HolaMundo from './components/HolaMundo.vue'
</script>

<template>
  <div>
    <HolaMundo mensaje="1er Componente de VUEJS" color="bg-danger" letra="fs-3"></HolaMundo>

    <HolaMundo mensaje="2do Componente de VUEJS"/>

    <hola-mundo mensaje="KEBAB CASE de VUEJS"></hola-mundo>

    <holaMundo mensaje="CAMEL CASE de VUEJS" color="bg-primary"></holaMundo>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>