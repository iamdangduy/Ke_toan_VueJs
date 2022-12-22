<template>
  <div class="popup">
    <div class="popup__main">
      <div class="popup__main--title">
        <h1 style="font-size: 24px; font-weight: 700; margin: 0">Thông báo</h1>
        <div class="main__title--close" v-on:click="closeDialog('popup')"></div>
      </div>
      <div class="popup__main--content">
        <p>Tài liệu bạn chọn sẽ bị xoá?</p>
      </div>
      <!-- <hr /> -->
      <div class="popup__main--footer">
        <button class="btn-delete-user" v-on:click="deleteUser()">
          Đồng ý
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "ThePopup",
  methods: {
    /**
     * Hàm đóng popup
     * Author: Duy
     */
    closeDialog: function (isDisplay) {
      try {
        //Set style popup = none
        document.querySelector(`.${isDisplay}`).style.display = "none";
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm delete nhân viên qua id
     * Author: Duy
     */
    deleteUser: function () {
      try {
        let idEmployeeList = document.querySelectorAll(".id-employee");
        let id = "";
        for (let i = 0; i < idEmployeeList.length; i++) {
          //Lấy ra giá trị của ID Employee
          id = $(idEmployeeList[i]).attr("EmployeeId");
        }
        //Hàm xoá theo id
        $.ajax({
          type: "DELETE",
          url: `https://amis.manhnv.net/api/v1/Employees/${id}`,
          success: function () {
            console.log("Success!!");
          },
          error: function (error) {
            console.log(error);
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
