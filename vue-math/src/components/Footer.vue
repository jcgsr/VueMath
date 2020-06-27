<template>
  <div class="footer">
    &copy;{{ footer }} <a class="btn-info" :href="link">Jovane</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: "2020 - Primeiro App em Vue criado por ",
      link: 'https://jcgsr.github.io/'
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

a:link{
  text-decoration: none;
}
</style>