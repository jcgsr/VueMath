<template>
  <div class="soma">
    <h2>Soma</h2>
    <input onClick="this.select()" type="number" name="number1" v-model="number1" /> +
    <input onClick="this.select()" type="number" name="numbr2" v-model="number2" />
    <button class="animate__animated animate__tada btn-secondary">zerar</button>
    <h2>{{ result }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0                    
    };
  }, 
  computed: {
    result() {
      return parseFloat(this.number1) + parseFloat(this.number2);
    },
    
  },
  methods: {
     zerar: function() {        
        return  this.result = 0
     }
  }  
  
};
</script>

<style scoped>
.soma {
  text-align: center;
  background-color: blue;
  padding: 1rem;
  display: flex;  
  justify-content: space-around;
}
</style>