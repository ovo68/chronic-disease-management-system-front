<template>
  <sn-card-with-title>
    <div slot="title">
      <sn-title title="就诊信息" :title-style="titleStyle"/>
    </div>
    <div slot="content">
      <registration-info-first-row
          ref="first"
          class="margin-bottom"/>
      <registration-info-second-row ref="second"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import RegistrationInfoFirstRow
  from "@/views/registration_manage/new_add_registration/children/RegistrationInfoFirstRow";
import RegistrationInfoSecondRow
  from "@/views/registration_manage/new_add_registration/children/RegistrationInfoSecondRow";

export default {
  name: "RegistrationInfo",
  components: {
    RegistrationInfoFirstRow,
    RegistrationInfoSecondRow
  },
  data() {
    return {
      titleStyle: {
        'color': '#21A3F1',
        'font-size': '18px'
      }
    }
  },
}
</script>

<style scoped>

</style>
