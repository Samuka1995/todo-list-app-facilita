<template>
  <div class="logo">
    <a :href="url">
      <img class="image-logo" src="@/assets/img/logo.svg" :alt="titulo" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    url: String,
  },
};
</script>

<style lang="stylus" scoped>
.logo {
  text-align: center;
  padding: 15px;
}

.image-logo {
  max-width: 80%;
  margin-left: 9px;
}
</style>
