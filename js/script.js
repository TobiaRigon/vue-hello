const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      immagine: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
      icona:'icon',
    }
  }
}).mount('#app')
