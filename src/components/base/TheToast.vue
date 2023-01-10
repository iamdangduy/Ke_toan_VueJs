<template>
  <div class="toast">
      <div class="toast__left">
        <div class="toast__logo"></div>
        <div class="toast__text">
          <b style="color: #01836F;">Thành công!</b> {{text}}
        </div>
      </div>
      <div class="toast__close"></div>
    </div>
</template>

<script>
export default {
  name: "TheToast",
  props: {
    text: String,
  }
};
</script>

<style scoped>
@import url(../../css/toast.css);
</style>
