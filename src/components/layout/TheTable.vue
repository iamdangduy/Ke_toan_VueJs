<template>
  <div class="content">
    <div class="content__main">
      <div class="content__main--bookmark">
        <div
          class="bookmark__text"
          style="font-size: 22px; font-weight: 700; line-height: 26px"
        >
          {{ EmployeeRS.Employee }}
        </div>
        <button id="btn-adduser" class="bookmark__btn" @click="showDialog">
          {{ EmployeeRS.AddNewEmployee }}
        </button>
      </div>
      <div class="content__main--table">
        <div class="main__search">
          <div class="main__left">
            <div class="main__left--selected">
              {{ EmployeeRS.Selected }}: <b>{{ selectedUser.length }}</b>
            </div>
            <div class="main__left--undo" @click="resetMultiSelected">
              {{ EmployeeRS.UndoSelected }}
            </div>
          </div>
          <div class="main__right">
            <div class="main__input">
              <input
                class="input input-search"
                type="text"
                placeholder="Tìm theo mã, tên nhân viên"
              />
            </div>
            <div class="main__refresh" @click="loadData"></div>
          </div>
        </div>
        <div class="main__table">
          <table class="trEmployee">
            <tbody>
              <tr>
                <th>
                  <input type="checkbox" class="checkbox-input" />
                </th>
                <th style="width: 100px">{{EmployeeRS.EmployeeID}}</th>
                <th style="width: 200px">{{ EmployeeRS.EmployeeName }}</th>
                <th>{{ EmployeeRS.Gender }}</th>
                <th class="dob">{{ EmployeeRS.DateOfBirth }}</th>
                <th class="id-label">
                  {{ EmployeeRS.IdentityNumber }}
                  <TooltipHover text="Số chứng minh nhân dân"></TooltipHover>
                </th>
                <th>{{ EmployeeRS.JobTitle }}</th>
                <th>{{ EmployeeRS.DepartmentName }}</th>
                <th>{{ EmployeeRS.AccountNumber }}</th>
                <th>{{ EmployeeRS.BankName }}</th>
                <th>{{ EmployeeRS.BankAddress }}</th>
                <th>{{ EmployeeRS.Freature }}</th>
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
                  :value="employee.EmployeeId"
                  class="checkbox-input"
                  v-model="selectedUser"
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
                <div class="btn-delete">
                  <div class="btn-fix-dropdown">
                    <div class="btn-fix" @click="onDbClick(employee)">{{ EmployeeRS.Fix }}</div>
                    <div class="btn-dropdown">
                      <div class="dropdown__menu">
                        <div class="dropdown__menu--duplicated">{{ EmployeeRS.Duplicate }}</div>
                        <div
                          class="dropdown__menu--delete"
                          @click="showPopup(employee)"
                        >
                          {{ EmployeeRS.Delete }}
                        </div>
                        <div class="dropdown__menu--stop">{{ EmployeeRS.StopUse }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <TheDialog
            v-if="displayDialog"
            :text="textTitleDialog"
            :employee="employeeSelected"
            @onClose="closeDialog"
            :employeeId="employeeSelectedId"
            @reload-data="loadData"
            @callToast="showToastMessage"
          ></TheDialog>
        </div>
        <ThePagination></ThePagination>
        <ThePopup
          v-if="isShowPopup"
          text="Bạn có chắc muốn xoá?"
          @onClosePopup="closePopup"
          @acceptDeleteUser="deleteUser"
        ></ThePopup>
        <TheLoad v-if="isLoading"></TheLoad>
        <TheToast v-if="isShowToast"></TheToast>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeRS from "@/resourse/vn";
import axios from "axios";
import TheToast from "../base/TheToast.vue";
import TooltipHover from "../base/TooltipHover.vue";
import TheDialog from "./TheDialog.vue";
import TheLoad from "./TheLoad.vue";
import ThePagination from "./ThePagination.vue";
import ThePopup from "./ThePopup.vue";
export default {
  name: "TheTable",
  components: {
    TheDialog,
    TheLoad,
    ThePopup,
    ThePagination,
    TheToast,
    TooltipHover,
  },
  data() {
    return {
      EmployeeRS,
      employees: [],
      errors: [],
      displayDialog: false,
      employeeSelected: null,
      employeeSelectedId: null,
      isLoading: false,
      isShowPopup: false,
      isShowToast: false,
      selectedUser: [],
      textOfToastMessage: "",
      textTitleDialog: "",
    };
  },
  methods: {
    /**
     * Hàm xoá những select đã chọn
     * Author: Duy
     */
    resetMultiSelected() {
      try {
        this.selectedUser = [];
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm show toast thông báo cho người dùng sau khi thực hiện CrUD
     * Author: Duy
     */
    showToastMessage() {
      try {
        console.log(1);

        this.isShowToast = true;
        setTimeout(() => (this.isShowToast = false), 5000);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm delete user theo id
     * Author: Duy
     */
    deleteUser() {
      try {
        this.isLoading = true;
        this.isShowPopup = false;
        console.log(this.employeeSelected.EmployeeId);
        axios
          .delete(
            `https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeSelected.EmployeeId}`
          )
          .then((res) => {
            console.log(res);
            this.loadData();
            this.textOfToastMessage = "Đã xoá người dùng khỏi hệ thống!";
            this.showToastMessage();
          })
          .then(setTimeout((this.isLoading = false), 1000))
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    },
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
        this.textTitleDialog = "Sửa nhân viên";
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
        this.textTitleDialog = "Thêm mới nhân viên";
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
    showPopup(employee) {
      try {
        this.isShowPopup = true;
        this.employeeSelected = employee;
        console.log(this.employeeSelected);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm đóng popup
     */
    closePopup() {
      try {
        this.isShowPopup = false;
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
    this.loadData();
    //gọi hàm load data
  },
};
</script>

<style scoped>
/* @import url(../../css/table.css); */
/* @import url(../../css/formadd.css); */
/* @import url(../../css/button.css); */
</style>
