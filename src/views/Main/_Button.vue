<template>
  <div class="percent-button">
    <button @click="tip(percent)">{{ percent }}%</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    percent: Number,
  },
  methods: {
    ...mapActions({ tip: "tip" }),
  },
};
</script>

<style lang="less">
.percent-button {
  button {
    width: 110px;
    font-size: 20px;
    background-color: hsl(183, 100%, 15%);
    border-radius: 5px;
    border: none;
    color: white;
    padding: 8px;
    margin-top: 15px;
    font-weight: 700;
    color: hsl(185, 41%, 84%);
    transition: 0.3s;
  }
  button:hover {
    background-color: hsl(185, 41%, 84%);
    color: hsl(183, 100%, 15%);
  }
}
</style>
