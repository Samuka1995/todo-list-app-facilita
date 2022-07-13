<template>
  <div>
    <label class="input-label" :for="'input_' + nome">{{ descricao }}</label>
    <input
      :id="'input_' + nome"
      class="input-base input-input"
      :type="tipo || 'text'"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    descricao: String,
    nome: String,
    placeholder: String,
    tipo: String,
  },
};
</script>
