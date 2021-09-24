<template>
  <div class="display-data">
    <div class="data">
      <p class="title">{{ title }}</p>
      <p class="secondary">/ person</p>
    </div>
    <p class="sum" v-if="!sum">$0.00</p>
    <p class="sum" v-else>${{ sum.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    sum: Number,
  },
};
</script>

<style lang="less">
.display-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 15px 30px;
  .data {
    .title {
      color: hsl(189, 41%, 97%);
      font-weight: 700;
      font-size: 14px;
    }
    .secondary {
      color: hsl(184, 14%, 56%);
      font-weight: 700;
      font-size: 12px;
    }
  }
  .sum {
    font-size: 36px;
    font-weight: 700;
    color: hsl(172, 67%, 45%);
  }
}
</style>
