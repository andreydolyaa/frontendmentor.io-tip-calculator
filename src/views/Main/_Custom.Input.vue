<template>
  <div class="custom-input">
    <input type="text" placeholder="CUSTOM" @input="customTip" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({ tip: "tip" }),
    customTip(amount) {
      this.tip(amount.target.value);
    },
  },
};
</script>

<style lang="less">
.custom-input {
  input {
    width: 90px;
    font-size: 22px;
    background-color: hsl(189, 41%, 97%);
    outline-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin-top: 15px;
    text-align: right;
    height: 25px;
    font-weight: 700;
  }
  ::placeholder {
    text-align: center;
    font-size: 18px;
    color: hsl(183, 100%, 15%);
    font-weight: bold;
  }
}
</style>
