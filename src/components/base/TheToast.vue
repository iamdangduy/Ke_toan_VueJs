<template>
  <div class="toast">
      <div class="toast__left">
        <div class="toast__logo"></div>
        <div class="toast__text">
          <b style="color: #01836F;">Thành công!</b> Công việc đã bị xoá.
        </div>
      </div>
      <div class="toast__close"></div>
    </div>
</template>

<script>
export default {
  name: "TheToast",
};
</script>

<style scoped>
@import url(../../css/toast.css);
</style>
