<template>
  <div class="interaction">
    <input-main :title="'Bill'" :icon="'$'" @data="setBill" />
    <div class="tip-wrapper">
      <p class="title">Select Tip %</p>
      <div class="tip">
        <percent-button v-for="num in percent" :key="num" :percent="num" />
        <custom-input />
      </div>
    </div>
    <input-main :title="'Number Of People'" :icon="'@'" @data="setPeople" />
  </div>
</template>

<script>
import PercentButton from "./_Button.vue";
import CustomInput from "./_Custom.Input.vue";
import InputMain from "./_Input.vue";
import { mapActions } from "vuex";
export default {
  components: { PercentButton, CustomInput, InputMain },
  data() {
    return {
      percent: [5, 10, 15, 25, 50],
    };
  },
  methods: {
    ...mapActions({ bill: "bill", people: "people" }),
    setBill(amount) {
      this.bill(amount);
    },
    setPeople(amount) {
      this.people(amount);
    },
  },
};
</script>

<style lang="less">
.interaction {
  width: 100%;
  height: 380px;
  margin: 30px 15px 30px 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .tip {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .title {
    color: hsl(184, 14%, 56%);
    font-size: 14px;
    font-weight: 700;
  }
}
@media (max-width: 830px) {
  .interaction {
    width: 350px;
    margin: 0;
  }
}
</style>
