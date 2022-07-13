export default {
  created() {
    const titulo = this.$_getTitleMixin();
    if (titulo) {
      document.title = titulo;
    }
  },

  methods: {
    $_getTitleMixin() {
      const { titulo } = this.$options;
      if (titulo) {
        return typeof titulo === "function" ? titulo.call(this) : titulo;
      }
    },
  },
};
