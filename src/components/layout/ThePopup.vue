<template>
  <div class="popup">
    <div class="popup__main">
      <div class="popup__main--title">
        <h1 style="font-size: 24px; font-weight: 700; margin: 0">Thông báo</h1>
        <div class="main__title--close" @click="closePopup"></div>
      </div>
      <div class="popup__main--content">
        <p>Tài liệu bạn chọn sẽ bị xoá?</p>
      </div>
      <!-- <hr /> -->
      <div class="popup__main--footer">
        <button class="btn-delete-user" @click="deleteUser">Đồng ý</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePopup",
  methods: {
    /**
     * Hàm đóng popup
     * Author: Duy
     */
    closePopup() {
      try {
        this.$emit("onClosePopup");
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm delete nhân viên qua id
     * Author: Duy
     */
    deleteUser() {
      try {
        this.$emit("acceptDeleteUser");
        this.$emit("onClosePopup");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
