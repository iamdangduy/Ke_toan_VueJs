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
          <MenuItem
            :text="EmployeeRS.Overview"
            className="item__logo item1"
          ></MenuItem>
        </router-link>
        <MenuItem
          :text="EmployeeRS.Cash"
          className="item__logo item2"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.Banking"
          className="item__logo item3"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.Purchase"
          className="item__logo item4"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.Sales"
          className="item__logo item5"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.InvoiceManaging"
          className="item__logo item6"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.Inventory"
          className="item__logo item7"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.Equipments"
          className="item__logo item8"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.FixedAssets"
          className="item__logo item9"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.Tax"
          className="item__logo item10"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.CostOfProduction"
          className="item__logo item11"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.General"
          className="item__logo item12"
        ></MenuItem>
        <MenuItem
          :text="EmployeeRS.Budget"
          className="item__logo item13"
        ></MenuItem>
        <router-link to="/report">
          <MenuItem
            :text="EmployeeRS.Report"
            className="item__logo item14"
          ></MenuItem>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "../base/MenuItem.vue";
import EmployeeRS from "@/resourse/vn";
export default {
  name: "TheSidebar",
  data() {
    return {
      EmployeeRS,
    };
  },
  components: {
    MenuItem,
  },
};
</script>

<style scoped>
@import url(../../css/sidebar.css);
</style>
