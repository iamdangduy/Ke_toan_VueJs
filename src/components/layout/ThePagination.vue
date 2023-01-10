<template>
  <div class="main__pagination">
    <div class="pagination__left">
      {{ EmployeeRS.Total }}: <b style="font-weight: bold">1035</b>
      {{ EmployeeRS.Record }}
    </div>
    <div class="pagination__right">
      <div class="pagination__dropdown">
        <select
          class="dropdown"
          name="cars"
          id="cars"
          style="height: 36px; padding-left: 12px; padding-right: 12px"
        >
          <option value="volvo">20 {{ EmployeeRS.RecordsInPage }}</option>
          <option value="saab">10 {{ EmployeeRS.RecordsInPage }}</option>
          <option value="mercedes">50 {{ EmployeeRS.RecordsInPage }}</option>
          <option value="audi">100 {{ EmployeeRS.RecordsInPage }}</option>
        </select>
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
  data() {
    return {
      EmployeeRS,
    };
  },
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
