<template>
  <div class="fatorial">
    <div class="container">
     <h2>Fatorial</h2>
     <input @focus="$event.target.select()" type="number" name="number" v-model="number" /> 
     <button class="animate__animated animate__shakeX btn-secondary" @click='zerar'>zerar</button>
     <h2>{{ result }}</h2>
   </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0                            
    };
  }, 
  computed: {
    result() {
      let res = 1;
      for (let i = 1; i <= this.number; i++) {
        res *= i;
      } 
      return res;
    },
    
  },
  methods: {
   zerar: function() {        
    this.number = 0        
  }
}  

};
</script>

<style scoped>
.fatorial {
  text-align: center;
  background-color: rgb(220, 60, 100);
  padding: 1rem;
  display: flex;  
  justify-content: space-around;
  color: aliceblue;
}

.container {
 max-width: 80%;
 display: flex;
 flex-direction: column;
}

.container button {
 margin-top: 1rem;
}

</style>