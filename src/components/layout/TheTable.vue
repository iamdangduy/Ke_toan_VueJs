<template>
  <div class="content">
    <div class="content__main">
      <div class="content__main--bookmark">
        <div
          class="bookmark__text"
          style="font-size: 22px; font-weight: 700; line-height: 26px"
        >
          Nhân viên
        </div>
        <button id="btn-adduser" class="bookmark__btn" @click="showDialog">
          Thêm mới nhân viên
        </button>
      </div>
      <div class="content__main--table">
        <div class="main__search">
          <div class="main__refresh" v-on:click="reloadData()"></div>
          <div class="main__input">
            <input
              class="input input-search"
              type="text"
              placeholder="Tìm theo mã, tên nhân viên"
            />
          </div>
        </div>
        <div class="main__progress">
          <div class="main__progress--dialog">
            <div class="main__progress--title">
              Khởi tạo dữ liệu, vui lòng đợi..
            </div>
            <div class="progress">20%</div>
          </div>
        </div>
        <div class="main__table">
          <table class="trEmployee">
            <tbody>
              <tr>
                <th>
                  <!-- <input type="checkbox" class="checkbox-input" /> -->
                </th>
                <th style="width: 100px">MÃ NHÂN VIÊN</th>
                <th style="width: 200px">TÊN NHÂN VIÊN</th>
                <th>GIỚI TÍNH</th>
                <th class="dob">NGÀY SINH</th>
                <th>SỐ CMND</th>
                <th>CHỨC DANH</th>
                <th>TÊN ĐƠN VỊ</th>
                <th>SỐ TÀI KHOẢN</th>
                <th>TÊN NGÂN HÀNG</th>
                <th>CHI NHÁNH TK NGÂN HÀNG</th>
                <th>CHỨC NĂNG</th>
              </tr>
              <tr class="tr-employee-data">
                <td class="td-input">
                  <input type="checkbox" class="checkbox-input" />
                </td>
                <td class="id-employee">00012</td>
                <td>Nguyễn Văn Liệt</td>
                <td>Nam</td>
                <td class="dob">31/12/1969</td>
                <td>001201005936</td>
                <td>Trưởng nhóm</td>
                <td>Xay keo, phối trộn</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div class="btn-delete">Xoá</div>
                </td>
              </tr>
            </tbody>
            <tr
              v-for="(employee, index) in employees"
              :key="index"
              class="tr-employee-data"
              @dblclick="onDbClick(employee)"
            >
              <td>
                <input
                  type="checkbox"
                  class="checkbox-input"
                  v-on:click="getInfor()"
                />
              </td>
              <td
                class="id-employee"
                employeeid="6c40eb98-7b91-11ed-9263-00163e06abee"
              >
                {{ employee.EmployeeCode }}
              </td>
              <td>{{ employee.FullName }}</td>
              <td></td>
              <td class="dob">
                {{ formatDate(employee.DateOfBirth) }}
              </td>
              <td>001201005936</td>
              <td>Trưởng nhóm</td>
              <td>{{ employee.DepartmentName }}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="btn-delete" v-on:click="showPopup()">Xoá</div>
              </td>
            </tr>
          </table>
          <TheDialog
            v-if="displayDialog"
            :employee="employeeSelected"
            @onClose="closeDialog"
            :employeeId="employeeSelectedId"
            @reload-data="loadData"
          ></TheDialog>
        </div>
        <ThePagination></ThePagination>
        <TheLoad v-if="isLoading"></TheLoad>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TheDialog from "./TheDialog.vue";
import TheLoad from "./TheLoad.vue";
export default {
  name: "TheTable",
  components: {
    TheDialog,
    TheLoad,
  },
  data() {
    return {
      employees: [],
      errors: [],
      displayDialog: false,
      employeeSelected: null,
      employeeSelectedId: null,
      isLoading: false,
    };
  },
  methods: {
    /**
     * Hàm double click hiển thị thông tin nhân viên
     * Author: Duy
     */
    onDbClick(employee) {
      try {
        //hiển thị dialog
        this.displayDialog = true;
        this.employeeSelected = employee;
        this.employeeSelectedId = employee.EmployeeId;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm hiển thị dialog
     * Author: Duy
     */
    showDialog() {
      try {
        //hiển thị dialog khi click vào btn
        this.displayDialog = true;
        this.employeeSelectedId = null;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm đóng dialog
     * Author: Duy
     */
    closeDialog() {
      try {
        this.displayDialog = false;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm hiển thị popup khi click vào xoá dữ liệu
     * Author: Duy
     */
    showPopup() {
      try {
        document.querySelector(".popup").style.display = "flex";
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm format date of birth
     * Author: Duy
     */
    formatDate(date) {
      try {
        if (date) {
          date = new Date(date);
          let day = date.getDate();
          day = day < 10 ? `0${day}` : day;
          let month = date.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
          let year = date.getFullYear();
          return `${day}/${month}/${year}`;
        } else {
          return "";
        }
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm get data từ link API có sẵn
     * Author: Duy
     */
    loadData() {
      //sử dụng axios để get data
      axios
        .get("https://cukcuk.manhnv.net/api/v1/Employees")
        .then((this.isLoading = true))
        .then((res) => {
          this.employees = res.data;
          setTimeout((this.isLoading = false), 500);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },

  created() {
    //gọi hàm load data
    console.log("created");
    this.loadData();
  },
};
</script>

<style scoped>
/* @import url(../../css/table.css); */
/* @import url(../../css/formadd.css); */
/* @import url(../../css/button.css); */
</style>
