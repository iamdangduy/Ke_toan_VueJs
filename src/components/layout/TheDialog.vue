<template>
  <div class="dialog">
    <ThePopup
      :text="this.userMsg"
      @onClosePopup="closePopup"
      @acceptDeleteUser="closePopup"
      v-if="isShowPopup"
    ></ThePopup>
    <div class="add-form">
      <div class="dialog__header">
        <p class="dialog__title">{{ text }}</p>
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
                <div class="row__input--label">
                  Mã <span class="required-field">*</span>
                </div>
                <div class="row__input--input">
                  <input
                    v-model="newEmployee.employeeCode"
                    ref="EmployeeCode"
                    :class="{ errorInput: isErrorInputCode }"
                    class="input-id"
                    type="text"
                    m-required
                    tabindex="1"
                    bus="EmployeeCode"
                  />
                </div>
                <div class="error-notification error-id">Mã không để trống</div>
              </div>
              <div class="row__input input2">
                <div class="row__input--label">
                  Tên <span class="required-field">*</span>
                </div>
                <div class="row__input--input">
                  <input
                    type="text"
                    v-model="newEmployee.employeeName"
                    class="label-name-employee"
                    :class="{ errorInput: isErrorInputName }"
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
                  <input type="date" tabindex="5" />
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
                <div class="row__input--label">
                  Đơn vị <span class="required-field">*</span>
                </div>
                <ComboboxInput
                  tabindex="3"
                  @getDepartmentID="handleDepartmentID"
                  :class="{ errorInput: isErrorInputDepartment }"
                  :departmentName="departmentName"
                ></ComboboxInput>
                <!-- <select
                  bus="DepartmentId"
                  class="dropdown"
                  :class="{ errorInput: isErrorInputDepartment }"
                  name="cars"
                  id="cars"
                  tabindex="3"
                  v-model="newEmployee.DepartmentId"
                >
                  <option value="3f8e6896-4c7d-15f5-a018-75d8bd200d7c">
                    Phòng nhân sự
                  </option>
                  <option value="45ac3d26-18f2-18a9-3031-644313fbb055">
                    Phòng hành chính
                  </option>
                  <option value="mercedes">Mercedes</option>
                </select> -->
              </div>
            </div>
            <div class="row__right">
              <div class="row__input input-id">
                <div class="row__input--label id-label">
                  Số CMND
                  <TooltipHover text="Số chứng minh nhân dân"></TooltipHover>
                </div>
                <div class="row__input--input">
                  <input type="text" tabindex="9" />
                </div>
              </div>
              <div class="row__input input-date">
                <div class="row__input--label">Ngày cấp</div>
                <div class="row__input--input">
                  <input type="date" tabindex="10" />
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
              <div class="row__input--label id-label">
                ĐT di động
                <TooltipHover text="Điện thoại di động"></TooltipHover>
              </div>
              <div class="row__input--input">
                <input type="text" tabindex="13" />
              </div>
            </div>
            <div class="dialog__row--col">
              <div class="row__input--label">ĐT cố định</div>
              <div class="row__input--input">
                <input type="text" tabindex="14" />
              </div>
            </div>
            <div class="dialog__row--col">
              <div class="row__input--label">Email</div>
              <div class="row__input--input">
                <input
                  v-model="newEmployee.email"
                  :class="{ errorInput: isErrorInputEmail }"
                  class="input-email"
                  type="text"
                  tabindex="15"
                />
                <div class="error-notification error-email">
                  Email không được để trống
                </div>
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
  </div>
</template>

<script>
import axios from "axios";
import ComboboxInput from "../base/ComboboxInput.vue";
import TooltipHover from "../base/TooltipHover.vue";
import ThePopup from "./ThePopup.vue";
export default {
  name: "TheDialog",
  props: ["employee", "employeeId", "text"],
  created() {
    this.$nextTick(function () {
      this.$refs.EmployeeCode.focus();
    });
    if (!this.isValueEmpty(this.employeeId)) {
      console.log("add dữ liệu");
      //nếu dialog khởi tạo rỗng thì tự động lấy mã nhân viên mới.
      axios
        .get("https://localhost:7067/api/v1/Employees/maxCodeEmployee")
        .then((res) => {
          document.querySelector(".input-id").value = res.data;
          this.newEmployee.employeeCode = res.data;
        })
        .catch((error) => console.log(error));
    } else {
      this.getEmployeeWithId();
    }
  },
  data() {
    return {
      newEmployee: {},
      isErrorInputDepartment: false,
      isErrorInputName: false,
      isErrorInputCode: false,
      isErrorInputEmail: false,
      userMsg: "",
      isShowPopup: false,
      departmentName: "",
    };
  },
  components: {
    TooltipHover,
    ThePopup,
    ComboboxInput,
  },
  methods: {
    /**
     * Hàm lấy id phòng ban từ combobox
     * Author: Duy
     */
    handleDepartmentID(valueDepartment) {
      try {
        this.newEmployee.departmentId = valueDepartment;
        console.log(this.newEmployee.departmentId);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm đóng popup
     * Author: Duy
     */
    closePopup() {
      try {
        this.isShowPopup = false;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm cất dữ liệu bao gồm thêm data, validate và đóng form khi thêm thành công
     * Author: Duy
     */
    btnAddAndClose() {
      try {
        this.validateDialog();
        let isValid = this.validateDialog();
        if (isValid) {
          if (!this.isValueEmpty(this.employeeId)) {
            axios
              .post("https://localhost:7067/api/v1/Employees", this.newEmployee)
              .then((res) => {
                console.log(res);
                this.closeDialog();
                //gọi toast thông báo
                this.$emit("callToast");
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
                `https://localhost:7067/api/v1/Employees/${this.newEmployee.employeeId}`,
                this.newEmployee
              )
              .then((res) => {
                console.log(res);
                //gửi dữ liệu yêu cầu load lại data cho parent
                console.log("thêm và đóng thành công");
                this.closeDialog();
                //gọi toast thêm mới thành công
                this.$emit("callToast");
                this.$emit("reload-data");
                this.newEmployee = {};
              })
              .catch((error) => {
                console.log(error);
              });
          }
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
          .get(`https://localhost:7067/api/v1/Employees/${this.employeeId}`)
          .then((res) => {
            this.newEmployee = res.data;
            this.departmentName = res.data.departmentName;
            console.log(this.departmentName);
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
              .post("https://localhost:7067/api/v1/Employees", this.newEmployee)
              .then((res) => {
                console.log(res);
                //gọi toast thông báo
                this.$emit("callToast");
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
                `https://localhost:7067/api/v1/Employees/${this.newEmployee.employeeId}`,
                this.newEmployee
              )
              .then((res) => {
                console.log(res);
                //gửi dữ liệu yêu cầu load lại data cho parent
                console.log("thêm và đóng thành công");
                //gọi toast thêm mới thành công
                this.$emit("callToast");
                this.$emit("reload-data");
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
        if (this.isValueEmpty(this.newEmployee.employeeCode) == false) {
          errors.push("Mã nhân viên không được trống");
          this.isErrorInputCode = true;
          document.querySelector(".error-id").style.display = "block";
        } else {
          this.isErrorInputCode = false;
          document.querySelector(".error-id").style.display = "none";
        }
        //tên không đưỢc để trống
        if (this.isValueEmpty(this.newEmployee.employeeName) == false) {
          errors.push("Tên nhân viên không được trống");
          this.isErrorInputName = true;
          document.querySelector(".error-name").style.display = "block";
        } else {
          this.isErrorInputName = false;
          document.querySelector(".error-name").style.display = "none";
        }
        //email không được để trống
        // if (this.isValueEmpty(this.newEmployee.Email) == false) {
        //   errors.push("Email không được trống");
        //   this.isErrorInputEmail = true;
        //   document.querySelector(".error-email").style.display = "block";
        // } else {
        //   this.isErrorInputEmail = false;
        //   document.querySelector(".error-email").style.display = "none";
        // }
        //mã phòng ban không được để trống
        if (this.isValueEmpty(this.newEmployee.departmentId) == false) {
          errors.push("Phòng ban không được trống");
          document.querySelector(".el-input__wrapper").style.borderColor =
            "red";
          this.isErrorInputDepartment = true;
        } else {
          this.isErrorInputDepartment = false;
          document.querySelector(".el-input__wrapper").style.borderColor =
            "green";
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
};
</script>

<style scoped>
/* @import url("../../css/formadd.css"); */
@import url(../../css/input.css);
@import url(../../css/error.css);
</style>
