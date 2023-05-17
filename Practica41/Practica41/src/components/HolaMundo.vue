<script setup>
    defineProps({
        mensaje : {
            type : String,
            required : true
        },
        color : {
            type : String,
            required : false
        },
        letra : {
            type : String,
            required : false
        }
    })
</script>

<template>
  <div class="container" :class="color">
    <div class="row">
        <div class="col-12">
            <h1> {{ mensaje }} </h1>
            <h1> {{ color }} </h1>
            <h1 :class="letra"> {{ letra }} </h1>
        </div>
    </div>
  </div>
</template>
