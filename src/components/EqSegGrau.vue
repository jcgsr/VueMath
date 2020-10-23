<template>
  <div class="eq_seg_grau">
    <div class="container">
     <h2>Equação do Segundo Grau</h2>
     <h4>Completa</h4>
     Valor de 'a'
     <input @focus="$event.target.select()" type="number" name="numberA" v-model="numberA" /> 
     Valor de 'b'
     <input @focus="$event.target.select()" type="number" name="numberB" v-model="numberB" />
     Valor de 'c'
     <input @focus="$event.target.select()" type="number" name="numberC" v-model="numberC" />
     <button class="animate__animated animate__tada btn-secondary" @click='zerar'>zerar</button>
     <h2>{{ result1 }}</h2>
     <h2>{{ result2 }}</h2>
   </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      numberA: 0,
      numberB: 0,
      numberC: 0, 
      // delta: 0,
      // numberX1 : 0,
      // numberX2 : 0,
    };
  }, 
  computed: {
    result1() {

      // eslint-disable-next-line no-unreachable
      let delta = (parseFloat(this.numberB) * parseFloat(this.numberB)) - (4 *  parseFloat(this.numberA) * parseFloat(this.numberC));
      
      let numberX1 = (- this.numberB + Math.sqrt(delta)) / (2 * this.numberA);
      return numberX1;
    },

    result2() {
      let delta = (parseFloat(this.numberB) * parseFloat(this.numberB)) - (4 *  parseFloat(this.numberA) * parseFloat(this.numberC));
      
      let numberX2 = (- this.numberB - Math.sqrt(delta)) / (2 * this.numberA);
      return numberX2;
    }

  },
  methods: {
   zerar: function() {        
    this.numberA = 0
    this.numberB = 0
    this.numberC = 0

  }
}  

};
</script>

<style scoped>
.eq_seg_grau {
  text-align: center;
  background-color: orange;
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