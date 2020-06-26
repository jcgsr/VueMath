<template>

  <div id="app">
   <h1 class="animate__animated animate__bounce">{{ titulo }}</h1>
   <Soma />
   <Footer />
   
  </div>
  
</template>

<script>
import Footer from './Footer.vue'
import Soma from './Soma.vue'
export default {
  data() {
    return {
      titulo: 'Math Vue'
    }
  },
  components: {
    Footer,
    Soma
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&display=swap');
  *, html, body {
    font-family: 'Inconsolata', monospace;
  }
  h1 {
    text-align: center;
  }
</style>