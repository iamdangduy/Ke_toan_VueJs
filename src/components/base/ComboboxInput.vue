<template>
  <el-form class="demo-form-inline errorInput">
    <el-form-item>
      <el-select v-model="departmentSelected" placeholder=" ">
        <el-option
          v-for="(department, index) in departments"
          :key="index"
          :label="department.DepartmentName"
          :value="department.DepartmentId"
          @click="selectedDepartment(department.DepartmentId)"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";
export default {
  name: "ComboboxInput",
  data() {
    return {
      departments: [],
      departmentSelected: "",
    };
  },
  methods: {
    /**
     * Hàm lấy dữ liệu department vừa select
     * Author: Duy
     */
    selectedDepartment(valueDepartment) {
      try {
        this.departmentSelected = valueDepartment;
        this.$emit('getDepartmentID', valueDepartment);
        // console.log(valueDepartment);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    axios
      .get("https://cukcuk.manhnv.net/api/v1/Departments")
      .then((res) => (this.departments = res.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
@import url(../../css/combobox.css);
</style>
