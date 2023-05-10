const { createApp } = Vue
 
const HolaMundo = {
  props: ['color', 'size'],
  template: `
              <div>
                <p :style="{color: color, fontSize: size}">Hola Mundo</p>
              </div>
            `
}

createApp({

  components: {
    'hola-mundo-feliz': HolaMundo
  },

}).mount('#miApp');