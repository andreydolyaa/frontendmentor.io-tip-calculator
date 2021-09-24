<template>
  <div class="main">
    <interaction />
    <display />
  </div>
</template>

<script>
import Display from "./_Display.vue";
import Interaction from "./_Interaction.vue";
export default {
  components: { Display, Interaction },
};
</script>

<style _Interaction lang="less">
.main {
  background-color: #fff;
  width: 800px;
  min-height: 400px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
}
@media(max-width:830px){
  .main{
    flex-direction: column;
    width:400px;
    justify-content: center;
    align-items: center;
    padding:30px 0;
  }
}
</style>
