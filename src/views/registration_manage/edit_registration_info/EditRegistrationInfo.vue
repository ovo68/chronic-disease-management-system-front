<template>
  <div>
    <sn-row-has-two-col :left="17" :right="7" class="margin-bottom-20">
      <sn-text
          font-weight="bold"
          :font-size="20"
          :move-down="7"
          slot="one-col"
          text="编辑挂号信息">
      </sn-text>
      <div slot="two-col" class="move-right">
        <el-button type="danger" plain>
          <sn-text text="退号"/>
        </el-button>
        <el-button type="primary" plain>
          <sn-text text="保存"/>
        </el-button>
        <el-button type="primary" plain @click="toRegistrationRecord">
          <sn-text text="返回"/>
        </el-button>
      </div>
    </sn-row-has-two-col>

    <!-- 挂号的订单信息-->
    <registration-order-info/>

    <sn-card-no-title>
      <div slot="content">
        <sn-title title="挂号信息" :title-style="{'color':'#1C79F7'}" class="margin-bottom-20"/>
        <registration-info-first-row
            :show-registration-id="false"/>
        <registration-info-second-row
            :show-registration-date="false"
            :show-registration-worker="false"
            :is-disabled-therapy-cost="true"
            :is-disabled-registration-cost="true"/>
      </div>
    </sn-card-no-title>
    <!-- 患者基本信息 -->
    <person-info :show-family="false" class="margin-top-20"/>
  </div>
</template>

<script>
import RegistrationInfoFirstRow
  from "@/views/registration_manage/new_add_registration/children/RegistrationInfoFirstRow";
import RegistrationInfoSecondRow
  from "@/views/registration_manage/new_add_registration/children/RegistrationInfoSecondRow";

import RegistrationOrderInfo
  from "@/views/registration_manage/edit_registration_info/children/RegistrationOrderInfo";

import PersonInfo from "@/components/content/sick/person_info/PersonInfo";


export default {
  name: "EditRegistrationInfo",
  components: {
    RegistrationInfoFirstRow,
    RegistrationInfoSecondRow,
    PersonInfo,
    RegistrationOrderInfo
  },
  methods: {
    toRegistrationRecord() {
      history.back()
    },
  },
}
</script>

<style scoped>
.el-button {
  width: 100px;
}

.move-right {
  position: relative;
  left: 40px;
}
</style>