<template>
  <div>
    <el-row class="first-row" justify="center">
      <div>
        <el-carousel height="250px" class="block">
          <el-carousel-item v-for="item in newDrugs" :key="item">
            <el-image
                style="width:100%; height: 100%"
                :src="item.url"
                fit="contain"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
    <el-row :gutter="10" class="second-row" justify="center">
      <el-col :offset="3" :span="18" class="second-row-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">申请</span>
          </div>
          <div v-if="!isNewDrugVolunteer">
            <p>
              基于志愿服务的自愿原则，志愿者因个人原因无法继续提供志愿服务时，
              应至少提前三日向项目管理组告知，志愿服务即行终止履行，志愿者不承担违约责任；
              但志愿者应妥善处理完毕其当次志愿服务，不至于因此给项目管理组或服务对象带来不必要的损失。
              如果因为志愿者未提前告知， 而导致正常的志愿服务活动难以开展，志愿者应承担违约责任。
            </p>
            <el-checkbox @change="isAgree" v-model="checked">同意</el-checkbox>
            <el-button style="width: 100%;margin-top: 6px" type="success" @click="applyNewDrug">申请</el-button>
          </div>
          <div v-else>
            申请成功，排队中...
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NewDrugVolunteer",
  data() {
    return {
      centerDialogVisible: false,
      recommendation: '',
      checked: 0,
      isNewDrugVolunteer: false,
      newDrugs: [
        {url: 'https://img0.baidu.com/it/u=3111850222,2906340024&fm=253&fmt=auto&app=138&f=JPEG?w=732&h=500'},
        {url: 'https://img2.baidu.com/it/u=2375213128,296838883&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
        {url: 'https://img2.baidu.com/it/u=133433622,551360029&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
        {url: 'https://img1.baidu.com/it/u=1562352589,4170662465&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=379'},
      ]
    }
  },
  methods: {
    openRecommendationBox() {
      this.centerDialogVisible = true
    },
    confirmSend() {

    },
    isAgree() {

    },
    applyNewDrug() {
      if (this.checked === 0) {
        alert("请勾选同意按钮")
        return
      }
      alert("申请成功")
    }
  }
}
</script>

<style scoped>
.box-card {
  height: 300px;
  margin-bottom: 20px;
}

.title {
  color: skyblue;
  font-size: 30px;
  font-weight: bold;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #acbdd4;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-carousel {
  border-radius: 35px;
  margin-bottom: 15px;

}


</style>
