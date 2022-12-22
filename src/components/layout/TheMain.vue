<template>
  <div class="main">
    <TheHeader></TheHeader>
    <ThePopup></ThePopup>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import ThePopup from "./ThePopup.vue";
export default {
  name: "TheMain",
  components: {
    TheHeader,
    ThePopup
},
};
</script>

<style scoped>
@import url(../../css/content.css);
@import url(../../css/main.css);
@import url(../../css/maintable.css);
@import url(../../css/button.css);
@import url(../../css/input.css);
</style>
