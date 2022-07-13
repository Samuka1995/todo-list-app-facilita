export default {
  namespaced: true,
  state: {
    busca: "",
  },
  getters: {
    getSearchValue: (s) => s.busca,
  },
  mutations: {
    updateSearch: (s, busca) => {
      s.busca = busca;
    },
  },
};
