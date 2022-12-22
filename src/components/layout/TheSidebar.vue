<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <div class="toggle"></div>
      <div class="logo">
        <img
          src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
          alt=""
          style="height: 36px"
        />
      </div>
    </div>
    <div class="sidebar__tools">
      <div class="tools-item">
        <router-link to="/">
          <MenuItem text="Tổng quan" className="item__logo item1"></MenuItem>
        </router-link>
        <MenuItem text="Tiền mặt" className="item__logo item2"></MenuItem>
        <MenuItem text="Tiền gửi" className="item__logo item3"></MenuItem>
        <MenuItem text="Mua hàng" className="item__logo item4"></MenuItem>
        <MenuItem text="Bán hàng" className="item__logo item5"></MenuItem>
        <MenuItem
          text="Quản lí hoá đơn"
          className="item__logo item6"
        ></MenuItem>
        <MenuItem text="Kho" className="item__logo item7"></MenuItem>
        <MenuItem
          text="Công cụ dụng cụ"
          className="item__logo item8"
        ></MenuItem>
        <MenuItem
          text="Tài sản cố định"
          className="item__logo item9"
        ></MenuItem>
        <MenuItem text="Thuế" className="item__logo item10"></MenuItem>
        <MenuItem text="Giá thành" className="item__logo item11"></MenuItem>
        <MenuItem text="Tổng hợp" className="item__logo item12"></MenuItem>
        <MenuItem text="Ngân sách" className="item__logo item13"></MenuItem>
        <router-link to="/report">
          <MenuItem text="Báo cáo" className="item__logo item14"></MenuItem>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "../base/MenuItem.vue";
export default {
  name: "TheSidebar",
  components: {
    MenuItem,
  },
};
</script>

<style scoped>
@import url(../../css/sidebar.css);
</style>
