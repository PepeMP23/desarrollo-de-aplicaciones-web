const { createApp } = Vue
 
createApp({
 
  data() { 
    return {
      tamanoFuente : 10,
      colorParrafo : "#000",
      colorBorde : "#000"
    }
  },
  computed : {
    nombreCompleto(){
      return this.nombre + ' ' + this.apellido;
    }
  }
}).mount('#miApp');