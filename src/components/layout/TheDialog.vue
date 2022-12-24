<template>
  <div class="dialog">
    <div class="add-form">
      <div class="dialog__header">
        <p class="dialog__title">Thêm mới nhân viên</p>
        <div class="confirm__role">
          <div class="role__employee">
            <input type="checkbox" name="" id="input-checkbox" />
            <p class="role__label">Là nhân viên</p>
          </div>
          <div class="role__customer">
            <input type="checkbox" name="" id="input-checkbox" />
            <p class="role__label">Là khách hàng</p>
          </div>
        </div>
        <div class="dialog__icon">
          <div class="dialog__icon--request"></div>
          <div
            class="dialog__icon--close"
            v-on:click="closeDialog('dialog')"
          ></div>
        </div>
      </div>
      <div class="dialog__content">
        <div class="dialog__row">
          <div class="dialog__row--item">
            <div class="row__left">
              <div class="row__input input1">
                <div class="row__input--label">Mã <span>*</span></div>
                <div class="row__input--input">
                  <input
                    v-model="newEmployee.EmployeeCode"
                    ref="EmployeeCode"
                    class="input-id"
                    type="text"
                    placeholder="NV-1644"
                    m-required
                    tabindex="1"
                    bus="EmployeeCode"
                  />
                </div>
                <div class="error-notification error-id">Mã không để trống</div>
              </div>
              <div class="row__input input2">
                <div class="row__input--label">Tên <span>*</span></div>
                <div class="row__input--input">
                  <input
                    type="text"
                    v-model="newEmployee.FullName"
                    class="label-name-employee"
                    m-required
                    tabindex="2"
                    bus="EmployeeName"
                  />
                </div>
                <div class="error-notification error-name">
                  Họ tên không được để trống
                </div>
              </div>
            </div>
            <div class="row__right">
              <div class="row__input input1">
                <div class="row__input--label">Ngày sinh</div>
                <div class="row__input--input">
                  <input type="date" placeholder="NV-1644" tabindex="5" />
                </div>
              </div>
              <div class="row__input input2">
                <div class="row__input--label">Giới tính</div>
                <div class="row__input--radio">
                  <div class="input__radio--row">
                    <input
                      type="radio"
                      name="gender"
                      class="radio-input"
                      tabindex="6"
                    />
                    <div class="radio__label">Nam</div>
                  </div>
                  <div class="input__radio--row">
                    <input
                      type="radio"
                      name="gender"
                      class="radio-input"
                      tabindex="7"
                    />
                    <div class="radio__label">Nữ</div>
                  </div>
                  <div class="input__radio--row">
                    <input
                      type="radio"
                      name="gender"
                      class="radio-input"
                      tabindex="8"
                    />
                    <div class="radio__label">Khác</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog__row">
          <div class="dialog__row--item">
            <div class="row__left">
              <div class="row__input">
                <div class="row__input--label">Đơn vị <span>*</span></div>
                <select
                  v-model="newEmployee.DepartmentId"
                  bus="DepartmentId"
                  class="dropdown"
                  name="cars"
                  id="cars"
                  tabindex="3"
                >
                  <option value="715ba47e-1e30-3be8-458f-4d82f3a13455">
                    Phòng nhân sự
                  </option>
                  <option value="45ac3d26-18f2-18a9-3031-644313fbb055">
                    Phòng hành chính
                  </option>
                  <option value="mercedes">Mercedes</option>
                </select>
              </div>
            </div>
            <div class="row__right">
              <div class="row__input input-id">
                <div class="row__input--label id-label">
                  Số CMND
                  <div class="identity">Số Chứng Minh Nhân Dân</div>
                </div>
                <div class="row__input--input">
                  <input type="text" tabindex="9" />
                </div>
              </div>
              <div class="row__input input-date">
                <div class="row__input--label">Ngày cấp</div>
                <div class="row__input--input">
                  <input
                    type="date"
                    placeholder="Nguyễn Thị Ánh Bằng"
                    tabindex="10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog__row">
          <div class="dialog__row--item">
            <div class="row__left">
              <div class="row__input">
                <div class="row__input--label">Nơi cấp</div>
                <div class="row__input--input">
                  <input type="text" tabindex="4" />
                </div>
              </div>
            </div>
            <div class="row__right">
              <div class="row__input">
                <div class="row__input--label">Chức danh</div>
                <div class="row__input--input">
                  <input type="text" tabindex="11" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog__row">
          <div class="row__input--label">Địa chỉ</div>
          <div class="row__input--input">
            <input class="address-input" type="text" tabindex="12" />
          </div>
        </div>
        <div class="dialog__row">
          <div class="dialog__row--grid">
            <div class="dialog__row--col">
              <div class="row__input--label">ĐT di động</div>
              <div class="row__input--input">
                <input type="text" placeholder="0333133942" tabindex="13" />
              </div>
            </div>
            <div class="dialog__row--col">
              <div class="row__input--label">ĐT cố định</div>
              <div class="row__input--input">
                <input type="text" placeholder="(764) 749-6478" tabindex="14" />
              </div>
            </div>
            <div class="dialog__row--col">
              <div class="row__input--label">Email</div>
              <div class="row__input--input">
                <input
                  class="input-email"
                  type="text"
                  placeholder="nguyendangduy@gmail.com"
                  tabindex="15"
                  v-model="newEmployee.Email"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="dialog__row">
          <div class="dialog__row--grid">
            <div class="dialog__row--col">
              <div class="row__input--label">Tài khoản ngân hàng</div>
              <div class="row__input--input">
                <input type="text" tabindex="16" />
              </div>
            </div>
            <div class="dialog__row--col">
              <div class="row__input--label">Tên ngân hàng</div>
              <div class="row__input--input">
                <input type="text" tabindex="17" />
              </div>
            </div>
            <div class="dialog__row--col">
              <div class="row__input--label">Chi nhánh</div>
              <div class="row__input--input">
                <input type="text" tabindex="18" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="dialog__hr" />
      <div class="dialog__footer">
        <div class="dialog__footer-left">
          <button class="btn-cancel" @click="btnCancel" tabindex="21">
            Huỷ
          </button>
        </div>
        <div class="dialog__footer-right">
          <button class="btn-hide" @click="btnAddAndClose" tabindex="20">
            Cất
          </button>
          <button
            class="btn-hide-and-add"
            @click="btnSaveOnClick"
            tabindex="19"
          >
            Cất và Thêm
          </button>
        </div>
      </div>
    </div>
    <TheToast v-if="isShowToast"></TheToast>
  </div>
</template>

<script>
import axios from "axios";
import TheToast from "../base/TheToast.vue";
export default {
  name: "TheDialog",
  props: ["employee", "employeeId"],
  created() {
    this.$nextTick(function () {
      this.$refs.EmployeeCode.focus();
    });
    if (!this.isValueEmpty(this.employeeId)) {
      console.log("add dữ liệu");
    } else {
      this.getEmployeeWithId();
    }
  },
  data() {
    return {
      newEmployee: {},
    };
  },
  methods: {
    /**
     * Hàm cất dữ liệu bao gồm thêm data, validate và đóng form khi thêm thành công
     * Author: Duy
     */
    btnAddAndClose() {
      try {
        this.validateDialog();
        let isValid = this.validateDialog();
        if (isValid) {
          console.log(this.newEmployee);
          axios
            .post(
              "https://cukcuk.manhnv.net/api/v1/Employees",
              this.newEmployee
            )
            .then((res) => {
              console.log(res);
              //gửi dữ liệu yêu cầu load lại data cho parent
              this.closeDialog();
              this.$emit("reload-data");
            })
            .catch((error) => console.log(error));
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm xoá dữ liệu khi click vào btn Huỷ
     * Author: Duy
     */
    btnCancel() {
      try {
        // this.newEmployee = {};
        this.closeDialog();
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm get thông tin nhân viên theo ID truyền từ TheTable
     * Author: Duy
     */
    getEmployeeWithId() {
      try {
        //Lấy dữ liệu từ api qua id
        axios
          .get(`https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeId}`)
          .then((res) => {
            this.newEmployee = res.data;
            this.$nextTick(function () {
              this.$refs.EmployeeCode.focus();
            });
          })
          .catch((res) => {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm save dữ liệu sau khi sửa hoặc thêm
     * Author: Duy
     */
    btnSaveOnClick() {
      try {
        //validate dữ liệu
        let isValid = this.validateDialog();
        if (isValid) {
          if (!this.isValueEmpty(this.employeeId)) {
            axios
              .post(
                "https://cukcuk.manhnv.net/api/v1/Employees",
                this.newEmployee
              )
              .then((res) => {
                console.log(res);
                //hiện toast báo thành công
                this.isShowToast = true;
                //gửi dữ liệu yêu cầu load lại data cho parent
                setTimeout((this.isShowToast = false), 5000);
                this.$emit("reload-data");

                this.newEmployee = {};
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            // console.log(this.newEmployee.employeeId);
            axios
              .put(
                `https://cukcuk.manhnv.net/api/v1/Employees/${this.newEmployee.EmployeeId}`,
                this.newEmployee
              )
              .then((res) => {
                console.log(res);
                //hiện toast báo thành công
                this.isShowToast = true;
                //gửi dữ liệu yêu cầu load lại data cho parent
                this.$emit("reload-data");
                setTimeout((this.isShowToast = false), 5000);

                this.newEmployee = {};
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
        //add dữ liệu
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm hiển thị dialog gọi từ parent component
     * Author: Duy
     */
    closeDialog() {
      this.$emit("onClose");
    },
    /**
     * Hàm validate dữ liệu
     * Author: Duy
     */
    validateDialog() {
      try {
        let errors = [];
        //mã nv không được để trống
        if (this.isValueEmpty(this.newEmployee.EmployeeCode) == false) {
          errors.push("Mã nhân viên không được trống");
          document.querySelector(".input-id").classList.add("input--error");
          document.querySelector(".error-id").style.display = "block";
        } else {
          document.querySelector(".input-id").classList.remove("input--error");
          document.querySelector(".error-id").style.display = "none";
        }
        //tên không đưỢc để trống
        if (this.isValueEmpty(this.newEmployee.FullName) == false) {
          errors.push("Tên nhân viên không được trống");
          document
            .querySelector(".label-name-employee")
            .classList.add("input--error");
          document.querySelector(".error-name").style.display = "block";
        } else {
          document
            .querySelector(".label-name-employee")
            .classList.remove("input--error");
          document.querySelector(".error-name").style.display = "none";
        }
        // console.log(this.newEmployee.Email);
        if (/^[^@]+@\w+(\.\w+)+\w$/.test(this.newEmployee.Email)) {
          console.log("Work!!");
        }
        if (errors.length > 0) {
          return false;
        } else {
          return true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm kiểm tra trường trống
     * Author: Duy
     */
    isValueEmpty(value) {
      try {
        //kiểm tra những trường để trống hoặc null
        if (value == "" || value == null || value == undefined) {
          return false;
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: { TheToast },
};
</script>

<style scoped>
/* @import url("../../css/formadd.css"); */
@import url(../../css/input.css);
@import url(../../css/error.css);
</style>
