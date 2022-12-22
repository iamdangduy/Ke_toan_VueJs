<template>
  <div class="item">
    <div :class="className"></div>
    <div class="item__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    text: String,
    className: String,
  },
};
</script>

<style scoped></style>
