<template>
  <div class="main__pagination">
    <div class="pagination__left">
      Tổng số: <b style="font-weight: bold">1035</b> bản ghi
    </div>
    <div class="pagination__right">
      <div class="pagination__dropdown">
        <select
          class="dropdown"
          name="cars"
          id="cars"
          style="height: 36px; padding-left: 12px; padding-right: 12px"
        >
          <option value="volvo">20 bản ghi trên một trang</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div class="pagination__page">
        <div class="page__item">Trước</div>
        <div class="page__item">1</div>
        <div class="page__item">2</div>
        <div class="page__item">3</div>
        <div class="page__item">...</div>
        <div class="page__item">52</div>
        <div class="page__item">Sau</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
};
</script>

<style scoped>
@import url(../../css/main.css);
</style>
