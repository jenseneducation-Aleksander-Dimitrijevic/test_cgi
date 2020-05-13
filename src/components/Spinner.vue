<template>
  <div :class="{ spinner: isLoading }"></div>
</template>

<script>
export default {
  name: "Spinner",
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>

<style lang="scss" scoped>
.spinner {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 0.5rem;
  border-color: #000;
  border: 2px solid #fff;
  border-top: 2px solid #000;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
