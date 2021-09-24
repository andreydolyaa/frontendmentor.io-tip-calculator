<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: "Space Mono";
}
button {
  cursor: pointer;
}
#app {
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(185, 41%, 84%);
}
</style>
