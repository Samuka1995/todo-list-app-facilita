<template>
  <div class="usuario">
    <img class="user-photo" :src="fotoUsuario" :alt="nomeUsuario" />
    <div class="user-information">
      <h4 class="user-name">
        {{ nomeUsuario }}
      </h4>
      <p class="user-job">
        {{ cargoUsuario }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nomeUsuario: String,
    cargoUsuario: String,
    fotoUsuario: String,
  },
};
</script>

<style lang="stylus" scoped>
.usuario {
  box-sizing: border-box;
  grid-template-columns: 50px auto;
  display: grid;
}

.user-photo {
  height: 100%;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.user-information {
  box-sizing: border-box;
  padding: 0px 15px;
  align-self: center;
  text-align: left;
}

.user-name, .user-job {
  padding: 0px;
  margin: 0px;
}

.user-name {
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
}

.user-job {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  color: var(--cor-principal);
}

@media (max-width: 500px) {
  .user-photo {
    height: 50px;
  }
}
</style>
