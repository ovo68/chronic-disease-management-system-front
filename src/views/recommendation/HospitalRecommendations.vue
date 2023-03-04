<template>
  <div>
    <el-row :gutter="10" class="first-row" justify="center">
      <el-col :offset='6' :span="12" class="first-row-item">
        <el-card class="box-card">
          <div class="info-title">
            <el-tooltip class="item" effect="dark" content="您可以对医院提出一些意见或建议" placement="top-start">
              <el-button type="text"><span class="info-title" style="color: black">意见箱</span></el-button>
            </el-tooltip>
          </div>
          <div>
            <el-row :gutter="10" justify="center">
              <el-col :offset="9" :span="6">
                <div class="describe">
                  <el-tooltip class="item" effect="dark" content="点击打开意见箱" placement="top-start">
                    <el-button type="text" @click="openRecommendationBox">
                      <i class="el-icon-s-promotion info-title" style="color: skyblue"></i>
                    </el-button>
                  </el-tooltip>
                </div>
              </el-col>
              <el-dialog
                  title="意见箱"
                  :visible.sync="centerDialogVisible"
                  width="30%"
                  center>
                <el-input type="textarea" v-model="recommendation" maxlength="500"
                          show-word-limit
                          resize="none"
                          :rows="5" class="textarea-box"></el-input>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="()=>{this.centerDialogVisible = false;this.recommendation = null}">取 消</el-button>
                  <el-button type="primary" @click="confirmSend">确 定</el-button>
                </span>
              </el-dialog>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HospitalRecommendations",
  data() {
    return {
      centerDialogVisible: false,
      recommendation: '',
    }
  },
  methods: {
    openRecommendationBox() {
      this.centerDialogVisible = true
    },
    confirmSend() {

    }
  }
}
</script>

<style scoped lang="less">
.box-card {
  height: 170px;
  margin-bottom: 20px;
}

.info-title {
  font-size: 40px;
  font-weight: bolder;
  //padding-left: 20px;
  margin-bottom: 20px;
}

.describe {
  color: #666;
  padding-left: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}

.up-and-down-div {
  padding-left: 20px;
}

.up-and-down {
  width: 20px/1.25;
  position: relative;
  top: 2px;
  margin-right: 5px;
}

</style>
