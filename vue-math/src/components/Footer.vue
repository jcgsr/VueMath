<template>
  <div class="footer">
    &copy;{{ footer }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: "2020 - Primeiro App em Vue"
    };
  }
};
</script>

<style scoped>
.footer {
  text-align: center;
  background-color: grey;
  padding: 1rem;
}
</style>