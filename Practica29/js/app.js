const { createApp } = Vue
 
createApp({
 
  data() { 
    return {
      nombre : "",
      apellido : ""
    }
  },
  computed : {
    nombreCompleto(){
      return this.nombre + ' ' + this.apellido;
    }
  }
}).mount('#miApp');