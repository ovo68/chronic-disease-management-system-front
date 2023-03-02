<template>
  <div class="check-out-sick-info">
    <div  class="title to-flex margin-bottom margin-left-20">
      <i class="el-icon-user-solid margin-right"/>
      <sn-title title="人员信息"/>
    </div>
    <!-- 病人信息 -->
    <div class="margin-left" >
      <div class="to-flex">
        <sn-div-has-border class="info">
          <sn-text text="患者编号 : " slot="left"/>
          <sn-text text="100100" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="info">
          <sn-text text="患者姓名 : " slot="left"/>
          <sn-text text="师楠" slot="right" class="name"/>
        </sn-div-has-border>
      </div>
      <div class="to-flex" >
        <sn-div-has-border class="info">
          <sn-text text="年龄 : " slot="left"/>
          <sn-text text="15" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="info">
          <sn-text text="性别 : " slot="left"/>
          <sn-text text="女" slot="right"/>
        </sn-div-has-border>
      </div>
      <div class="to-flex">
        <sn-div-has-border class="info">
          <sn-text text="手机 :" slot="left"/>
          <sn-text text="123456789" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="info">
          <sn-text text="会员等级 : " slot="left"/>
          <sn-text text="vip3" slot="right" class="vip"/>
        </sn-div-has-border>
      </div>
      <div class="to-flex">
        <sn-div-has-border class="info">
          <sn-text text="账户余额 : " slot="left"/>
          <sn-text text="2400.00元" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="info" >
          <sn-text text="积分 : " slot="left"/>
          <sn-text text="600" slot="right"/>
        </sn-div-has-border>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckOutSickInfo"
}
</script>

<style scoped lang="less">
.check-out-sick-info {


  .title {
    color: #666EE8;
  }

  .info{
    width: 180px;
  }

  .name{
    color: royalblue;
    font-weight: 600;
  }

  .vip{
    color: coral;
    font-size: 18px;
    font-style: italic;
    font-weight: bold;
  }
}
</style>