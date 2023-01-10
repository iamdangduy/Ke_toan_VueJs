<template>
  <div class="tooltip">{{ text }}</div>
</template>

<script>
export default {
  name: "TooltipHover",
  props: {
    text: String,
  },
};
</script>

<style scoped>
@import url(../../css/tooltip.css);
</style>
