export const authStore = {
  state: {
    user: {
      name: '',
      imageUrl: '',
    },
  },
  getters: {
    signedIn({ state }) {
      return state.user !== null;
    },
  },
  mutations: {
    signIn(user) {
      Object.assign(this.user, user);
    },
    signOut(state) {
      // TODO(eric): Allow this in api/auth.js
    },
  },
  actions: {
    async signIn({ commit }) {
      try {
        // TODO: Handle sign in
        // commit('signIn');
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async createAccount({ commit }) {
      try {
        // commit('signIn');
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async signOut({ commit, state }) {
      if (!state.signedIn()) {
        return;
      }
      try {
        // TODO: Handle sign-out
        commit('signOut');
      } catch (e) {
        console.error(e);
        throw e;
      }
    }
  }
};