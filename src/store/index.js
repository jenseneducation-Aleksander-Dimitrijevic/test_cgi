import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    isLoading: false,
    doneFetching: false
  },

  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
      state.doneFetching = true;
      state.movies.Search.sort((a, b) => {
        let nameA = a.Title.toUpperCase();
        let nameB = b.Title.toUpperCase();

        if (nameA < nameB) return -1;
      });
    },

    SET_LOADING(state) {
      state.isLoading = !state.isLoading;
    },

    SORT_TITLE(state) {
      state.movies.Search.sort((a, b) => {
        let nameA = a.Title.toUpperCase();
        let nameB = b.Title.toUpperCase();

        if (nameB < nameA) return -1;
        if (nameB > nameA) return -1;
      });
    }
  },
  actions: {
    fetchMovies(context) {
      context.commit("SET_LOADING");
      // Set timeout-function to simulate delay while fetching data
      setTimeout(() => {
        axios
          .get("https://www.omdbapi.com/?s=journey&apikey=d102d4cc")
          .then(res => {
            context.commit("SET_LOADING");
            context.commit("SET_MOVIES", res.data);
          })
          .catch(error => console.log("Some error accured: ", error));
      }, 2000);
    },

    sortTitle(context) {
      context.commit("SORT_TITLE");
    }
  }
});
