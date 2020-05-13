<template>
  <div class="wrapper" :class="{ 'done-fetching': doneFetching }">
    <section class="btn-content">
      <button @click="showMovies">
        {{ btnContent }}
        <spinner />
      </button>

      <button v-show="doneFetching" @click="sortTitle">Sort</button>
    </section>

    <article
      class="movie-list animated fadeInUp fast"
      v-for="movie in movies.Search"
      :key="movie.imdbID"
    >
      <movie :movie="movie" />
    </article>
  </div>
</template>

<script>
import Movie from "@/components/Movie.vue";
import Spinner from "@/components/Spinner.vue";
export default {
  name: "Home",
  components: {
    Movie,
    Spinner
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    doneFetching() {
      return this.$store.state.doneFetching;
    },
    btnContent() {
      return this.isLoading ? "Loading..." : "Show movies";
    }
  },
  methods: {
    showMovies() {
      this.$store.dispatch("fetchMovies");
    },
    sortTitle() {
      this.$store.dispatch("sortTitle");
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;

  &.done-fetching {
    .btn-content {
      width: 90%;
      display: flex;
      margin: 4rem auto;
      justify-content: space-between;
    }
  }
}

.btn-content {
  margin: auto;
  max-width: 560px;
}

.movie-list {
  width: 90%;
  margin: auto;
  max-width: 560px;

  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      animation-delay: $i * 0.1s;
    }
  }
}

button {
  width: 200px;
  border: none;
  padding: 20px;
  color: #fff;
  outline: none;
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  align-items: center;
  border-radius: 30px;
  justify-content: center;
  text-transform: uppercase;
  background: rgb(1, 77, 107);
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    background: darken(rgb(1, 77, 107), 10%);
  }
}
</style>
