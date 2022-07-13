export default {
  namespaced: true,
  state: {
    ativa: false,
    titulo: "",
    componente: "",
    sub: "",
    id: null,
  },
  getters: {
    modalBoxIsActive: (s) => s.ativa,
    getTitleModalBox: (s) => s.titulo,
    getSubTitleModalBox: (s) => s.sub,
    getIdModalBox: (s) => s.id,
    getActiveModalComponent: (s) => s.componente,
  },
  mutations: {
    activateModalBox: (s, id) => {
      if (id) s.id = id;
      else s.id = null;
      s.ativa = true;
    },
    disableModalBox: (s) => {
      s.ativa = false;
    },

    setTitleModalBox: (s, titulo) => {
      s.titulo = titulo;
    },

    defineModalComponent: (s, componente) => {
      s.componente = componente;
    },

    setSubTitleModal: (s, sub) => {
      s.sub = sub;
    },
  },
};
