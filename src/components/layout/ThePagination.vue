<template>
  <div class="main__pagination">
    <div class="pagination__left">
      {{ EmployeeRS.Total }}: <b style="font-weight: bold">{{ totalRecord }}</b>
      {{ EmployeeRS.Record }}
    </div>
    <div class="pagination__right">
      <div class="pagination__dropdown">
        <el-form class="demo-form-inline errorInput">
          <el-form-item>
            <el-select v-model="RecordOf100" placeholder=" ">
              <el-option
                @click="getValueOfRecord(20)"
                label="20 bản ghi trên 1 trang"
                value="20"
              />
              <el-option
                @click="getValueOfRecord(10)"
                label="10 bản ghi trên 1 trang"
                value="10"
              />
              <el-option
                @click="getValueOfRecord(30)"
                label="30 bản ghi trên 1 trang"
                value="30"
              />
              <el-option
                @click="getValueOfRecord(50)"
                label="50 bản ghi trên 1 trang"
                value="50"
              />
              <el-option
                @click="getValueOfRecord(100)"
                label="100 bản ghi trên 1 trang"
                value="100"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="pagination__page">
        <div class="page__item">{{ EmployeeRS.Previous }}</div>
        <div class="page__item">1</div>
        <div class="page__item">2</div>
        <div class="page__item">3</div>
        <div class="page__item">...</div>
        <div class="page__item">52</div>
        <div class="page__item">{{ EmployeeRS.Next }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeRS from "@/resourse/vn";

export default {
  name: "ThePagination",
  props: ["totalRecord"],

  data() {
    return {
      EmployeeRS,
      RecordOf20: `${20} ${EmployeeRS.RecordsInPage}`,
      RecordOf10: `${10} ${EmployeeRS.RecordsInPage}`,
      RecordOf30: `${30} ${EmployeeRS.RecordsInPage}`,
      RecordOf50: `${50} ${EmployeeRS.RecordsInPage}`,
      RecordOf100: `${100} ${EmployeeRS.RecordsInPage}`,
    };
  },
  methods: {
    /**
     * Hàm lấy value của combobox
     * Author: Duy
     */
    getValueOfRecord(value) {
      try {
        this.$emit("get-value-record", value);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
