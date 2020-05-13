<template>
  <div class="movie">
    <img :src="movie.Poster" alt="image-poster" />
    <section>
      <h2>{{ movie.Title }}</h2>
      <p>Year: {{ movie.Year }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: Object
  }
};
</script>

<style lang="scss" scoped>
.movie {
  padding: 10px;
  display: flex;
  margin: 1rem 0;
  transition: 0.3s;

  img {
    width: 100px;
    margin-right: 2rem;
  }
  p {
    margin: 1rem 0;
  }

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 20px rgba(#000, 0.2);
  }
}
</style>
