console.log(Vue);

const app = Vue.createApp({
    template: `
    <h1>Hola mundo</h1>
    <p> desde Vue </p>
    <p> {{ 2+ 2 }} </p>
    <p> {{ true }} </p>
    <p> {{ [1,2,3,4,5] }} </p>
    <p> {{ {nombre: 'Juan', edad : 18 } }} </p>
    <p> {{ true ? 'habilitado' : 'deshabilitado' }} </p>
    <p> {{ !true ? 'habilitado' : 'deshabilitado' }} </p>
    <p> {{ (10 < 15) ? 'Verdadero' : 'Falso' }} </p>
    `
});

app.mount('#miApp');