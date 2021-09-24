<template>
  <div class="input-main">
    <div class="title-wrapper">
      <p class="title">{{ title }}</p>
      <p class="title error" v-if="peopleError">Can't be zero</p>
    </div>
    <div class="input">
      <input
        type="text"
        v-model="value"
        @input="emitData"
        :class="{ err: peopleError }"
      />
      <p class="sign">{{ icon }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    title: String,
    icon: String,
  },
  data() {
    return {
      value: null,
    };
  },
  computed: {
    ...mapGetters({ error: "error" }),
    clear() {
      return this.reset;
    },
    peopleError() {
      return this.title === "Number Of People" && this.error;
    },
  },
  methods: {
    ...mapActions({ reset: "reset" }),
    emitData() {
      this.$emit("data", this.value);
    },
  },
  watch: {
    "$store.state.reset": function() {
      this.value = null;
    },
  },
};
</script>

<style lang="less">
.input-main {
  .title {
    font-size: 14px;
    font-weight: 700;
    margin: 5px 0;
    color: hsl(184, 14%, 56%);
  }
  .input {
    position: relative;
    input {
      width: 100%;
      max-width: 100%;
      background-color: hsl(189, 41%, 97%);
      border: none;
      height: 50px;
      border-radius: 5px;
      text-align: right;
      outline-color: hsl(172, 67%, 45%);
      font-size: 20px;
      color: hsl(183, 100%, 15%);
      font-weight: bold;
      margin-right: 20px;
    }
    .err {
      outline-color: rgb(255, 132, 132);
    }
  }
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    .error {
      color: rgb(255, 132, 132);
    }
  }
  .sign {
    text-align: left;
    position: absolute;
    font-size: 16px;
    margin: auto 0 auto 0;
    color: hsl(184, 14%, 56%);
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
}
</style>
