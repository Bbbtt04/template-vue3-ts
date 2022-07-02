<template>
  <img src="@/assets/pic/background.png" class="bgc" />

  <div class="mid">
    <img src="@/assets/pic/logo.png" alt="" />
    <h1>{{ name }}</h1>
    <p class="text">Welcom to bint-Cli !!</p>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
const store = useStore();
const name = store.state.name;
</script>

<style scoped lang="scss">
.bgc {
  position: absolute;
  z-index: -999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.mid {
  display: flex;
  margin: 100px auto;
  width: 500px;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text {
    margin: 1em 0 0.6em 0;
    padding: 0 0 0 20px;
    font-weight: 1000;
    background-image: linear-gradient(to right, orange, purple);
    font-family: "Hammersmith One", sans-serif;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 30px;
    position: relative;
  }
  font-size: 18px;
  font-family: "Questrial", sans-serif;
}
</style>
