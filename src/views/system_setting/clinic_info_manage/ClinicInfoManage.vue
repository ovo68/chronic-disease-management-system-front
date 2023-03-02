<!-- 诊所信息管理 -->
<template>
  <sn-card-no-title>
    <div slot="content">
      <sn-row-has-four-col :one="6" :two="6" :three="6">
        <sn-input slot="one-col" :is-disabled="clinicNo" :input-placeholder="10030">
          <sn-text slot="title" text="诊所编号"/>
        </sn-input>
        <sn-input slot="two-col" :input-placeholder="'蓝天社区诊所'">
          <sn-must-text slot="title" text="诊所名称"/>
        </sn-input>
        <div slot="three-col">
          <sn-text text="诊所Logo:"/>
          <div class="to-flex">
            <div class="title-img-div">
              <el-image :src="logo" class="title-img"/>
            </div>
            <el-link type="primary" :underline="false">
              <sn-text text="修改" :move-down="3"/>
            </el-link>
          </div>
        </div>

      </sn-row-has-four-col>
      <sn-row-has-four-col :one="6" :two="6" :three="6">
        <sn-input slot="one-col" :input-placeholder="clinicOwner">
          <sn-text slot="title" text="诊所所有人"/>
        </sn-input>
        <sn-input slot="two-col" :input-placeholder="clinicOwnerTel">
          <sn-text slot="title" text="诊所所有人电话"/>
        </sn-input>
        <sn-input slot="three-col" :input-placeholder="clinicOwnerEmail">
          <sn-text slot="title" text="诊所所有人邮箱"/>
        </sn-input>
      </sn-row-has-four-col>
      <sn-row-has-two-col :left="6" :right="12">
        <sn-select-has-select slot="one-col">
          <sn-text slot="title" text="地址"/>
        </sn-select-has-select>
        <sn-input slot="two-col" :input-placeholder="'请输入详细地址'">
          <sn-text text="详细地址" slot="title"/>
        </sn-input>
      </sn-row-has-two-col>
      <div style="margin-bottom: 15px">
        <span>诊所介绍</span>
        <el-input style="margin-top: 10px" type="textarea" :rows="1" v-model="clinicDesc"></el-input>
      </div>
      <div>
        <span>诊所状态：</span>
        <el-switch
            v-model="clinicStatus"
            active-color="#13ce66"
            inactive-color="#ff4949"
            style="margin-right: 100px"

        />
        <span style="margin-right: 50px">到期时间：{{ outOfDate }}</span>
        <span>总用户数：{{ userCount }}</span>
      </div>
    </div>
  </sn-card-no-title>
</template>
<script>
export default {
  name: "ClinicInfoManage",
  data() {
    return {
      clinicNo: '10030',
      clinicOwner: '李明',
      clinicOwnerTel: '18890918900',
      clinicOwnerEmail: '18890918900@163.com',
      address: '请输入详细地址',
      clinicStatus: true,
      clinicDesc: '',
      userCount: 33,
      outOfDate: '2021-02-14 10:22:55',
      //诊所logo
      logo: require('@/assets/image/home/sidebar/home0.png')
    }
  },

}

</script>

<style scoped lang="less">
.title-img-div {
  width: 50px/1.25;
  height: 50px/1.25;
  background-color: #F7F8FE;
  text-align: center;
  margin: 10px 30px 10px 10px;
  border-radius: 50px/1.25/2;
  box-shadow: 0 4px 5px #83A0BC;

  .title-img {
    margin-top: 6px;
  }
}


</style>