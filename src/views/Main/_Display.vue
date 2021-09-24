<template>
  <div class="display">
    <div>
      <display-data :title="'Tip Amount'" :sum="tip" />
      <display-data :title="'Total'" :sum="total" />
    </div>
    <button class="reset" @click="reset">RESET</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DisplayData from "./_Display.Data.vue";
export default {
  components: { DisplayData },
  computed: {
    ...mapGetters({ total: "total", tip: "tip" }),
  },
  methods: {
    ...mapActions({ reset: "reset" }),
  },
};
</script>

<style lang="less">
.display {
  width: 100%;
  min-height: 350px;
  background-color: hsl(183, 100%, 15%);
  margin: 30px 30px 30px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .reset {
    margin: 30px 30px 30px 30px;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    font-size: 16px;
    font-weight: 700;
    transition: 0.3s;
  }
  .reset:hover {
    background-color: hsl(185, 41%, 84%);
    color: hsl(183, 100%, 15%);
  }
}
@media (max-width: 830px) {
  .display {
    width: 350px;
    margin: 30px 0;
  }
}
</style>
