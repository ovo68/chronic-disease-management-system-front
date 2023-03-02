<template>
  <div>
    <base-setting-item>
      <div slot="left">

        <sn-text text="处方单价锁定"
                 :move-down="10"
                 :font-size="20"
                 :move-right="20" font-color="#03030A"/>

        <sn-text text="开启后，处方结算时无法修改药品及附加费用等费用项目价格"
                 :move-down="20" :move-right="20" font-color="#A599A6"/>
      </div>
      <div slot="right">
        <base-setting-button/>
      </div>
    </base-setting-item>

    <base-setting-item>
      <div slot="left">

        <sn-text text="费加费用设置"
                 :move-down="10"
                 :font-size="20"
                 :move-right="20" font-color="#03030A"/>

        <sn-text text="开启后，开具处方及药品零售时支持添加附件费"
                 :move-down="20" :move-right="20" font-color="#A599A6"/>
      </div>
      <div slot="right">
        <base-setting-button/>
      </div>
    </base-setting-item>

    <base-setting-item style="height:160px">
      <div slot="left">

        <sn-text text=" 挂号功能设置"
                 :move-down="10"
                 :font-size="20"
                 :move-right="20" font-color="#03030A"/>
        <br/>
        <el-divider/>
        <div class="to-flex">

          <sn-input input-value-from-parent="22" :is-disabled="true" class="to-flex margin-left-20" style="width: 170px">
            <sn-text text="挂号有效天数"
                     slot="title"
                     font-color="#000000" style="width: 90px" :move-down="10" />
          </sn-input>
          <sn-text text="天" :move-down="10" class="margin-right-20"/>
          <el-link type="primary" :underline="false">
            <sn-text text="修改"/>
          </el-link>
        </div>

        <sn-text text="0为当天，-1不限天数，>0有效天数" font-color="#A599A6" :move-right="20" :move-down="10"/>

      </div>

      <div slot="right">
        <base-setting-button style="margin-top: 10px"/>
      </div>
    </base-setting-item>

    <base-setting-item>
      <div slot="left">
        <sn-text text="金额精度"
                 :move-down="10"
                 :font-size="20"
                 :move-right="20" font-color="#03030A"/>

        <div class="money-precision">
          <el-radio v-model="radio" label="1">分</el-radio>
          <el-radio v-model="radio" label="2">角</el-radio>
          <el-radio v-model="radio" label="3">元</el-radio>
        </div>
      </div>
    </base-setting-item>

    <base-setting-item style="height: 200px">
      <div slot="left">

        <sn-text text="病例字段设置"
                 :move-down="10"
                 :font-size="20"
                 :move-right="20" font-color="#03030A"/>
        <sn-text text="系统默认(不可修改)" :move-down="20" :move-right="20"/>
        <div class="default-setting">
          <el-checkbox v-model="checked1" disabled checked>诊断</el-checkbox>
          <el-checkbox v-model="checked2" disabled checked>医嘱</el-checkbox>
          <el-checkbox v-model="checked3" disabled checked>主诉</el-checkbox>
          <el-checkbox v-model="checked4" disabled checked>发病日期</el-checkbox>
          <el-checkbox v-model="checked5" disabled checked>体格信息</el-checkbox>
          <el-checkbox v-model="checked6" disabled checked>现病史</el-checkbox>
          <el-checkbox v-model="checked7" disabled checked>既往史</el-checkbox>
          <el-checkbox v-model="checked8" disabled checked>过敏史</el-checkbox>
          <el-checkbox v-model="checked9" disabled checked>个人史</el-checkbox>
          <el-checkbox v-model="checked10" disabled checked>家族史</el-checkbox>
          <el-checkbox v-model="checked11" disabled checked>辅助检查</el-checkbox>
          <el-checkbox v-model="checked12" disabled checked>治疗意见</el-checkbox>
          <el-checkbox v-model="checked13" disabled checked>备注</el-checkbox>
        </div>

        <sn-text text="自定义设置" :move-down="10" :move-right="20"/>
        <div class="money-precision">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="望闻问切"></el-checkbox>
            <el-checkbox label="疾病详情"></el-checkbox>
            <el-checkbox label="辩证分析"></el-checkbox>
            <el-checkbox label="治疗意见"></el-checkbox>
            <el-checkbox label="文件"></el-checkbox>
            <el-checkbox label="门诊处理"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </base-setting-item>
  </div>



</template>

<script>
import BaseSettingItem
  from "@/views/system_setting/base_setting/children/prescription_unit_price_locking/children/BaseSettingItem";
import BaseSettingButton
  from "@/views/system_setting/base_setting/children/prescription_unit_price_locking/children/BaseSettingButton";
export default {
  name: "PrescriptionUnitPriceLocking",
  components: {
    BaseSettingItem,
    BaseSettingButton,
  },
  data () {
    return {
      radio: '1',
      checkList: []
    };
  }
}
</script>

<style scoped>
.money-precision{
  padding-left: 20px;
  margin-top: 20px
}
.default-setting{
  padding-left: 20px;
  margin-top: 30px
}

</style>