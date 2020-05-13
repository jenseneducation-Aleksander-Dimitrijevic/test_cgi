<template>
  <div>
    <home />
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
// reset styling
@import url("https://fonts.googleapis.com/css?family=Inter&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Inter", sans-serif;
}
</style>
