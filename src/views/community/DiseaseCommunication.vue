<template>
  <div>
    <el-row :gutter="10" class="second-row" style="padding-bottom: 30px">
      <el-col :span="24" class="chart-left">
        <el-card class="">
          <div slot="header" class="clearfix">
            <span>新药推荐</span>
          </div>
          <el-table
              :data="recommendedDrugList"
              border
              style="width: 100%">
            <el-table-column
                fixed
                prop="diseaseName"
                label="病名">
            </el-table-column>
            <el-table-column
                fixed
                prop="recommendedDrug"
                width="300"
                label="推荐药物">
            </el-table-column>
            <el-table-column
                fixed
                prop="recommendationIndex"
                width="250"
                label="推荐指数">
              <template slot-scope="scope">
                <el-rate
                    v-model="scope.row.recommendationIndex"
                    disabled
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
              </template>
            </el-table-column>
          </el-table>


        </el-card>
      </el-col>
      <el-dialog
          title="回复"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>
        <el-tag>问题描述</el-tag>
        <span>{{ this.needAnswerQuestion !== null ? this.needAnswerQuestion.description : '' }}</span>
        <div>
          <el-tag>您的回答</el-tag>
        </div>
        <el-input type="textarea" v-model="needAnswerQuestionAnswer.answerContent" maxlength="500" show-word-limit
                  resize="none"
                  :rows="5" class="textarea-box"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="()=>{this.centerDialogVisible = false;this.needAnswerQuestion = null}">取 消</el-button>
          <el-button type="primary" @click="confirmReply">确 定</el-button>
        </span>
      </el-dialog>
    </el-row>


    <el-row :gutter="10" class="first-row">
      <el-col :span="8" class="first-row-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的提问</span>
          </div>
          <div v-for="question in this.currentUserQuestionList" class="text item">
            {{ question.description }}
            <el-divider></el-divider>
          </div>
          <el-row justify="center">
            <el-col :offset="10" :span="4">
              <el-tooltip class="item" effect="dark" content="提问" placement="top-start">
                <el-button type="primary" icon="el-icon-edit" circle @click="openAskQuestionsDialog"></el-button>
              </el-tooltip>
            </el-col>
            <el-dialog
                title="提问"
                :visible.sync="askQuestionsDialogVisible"
                width="30%"
                center>
              <el-input type="textarea" v-model="question.description" maxlength="500" show-word-limit
                        resize="none"
                        :rows="5" class="textarea-box"></el-input>
              <span slot="footer" class="dialog-footer">
                <el-button
                    @click="()=>{this.askQuestionsDialogVisible = false;this.question.description = ''}">取 消</el-button>
                <el-button type="primary" @click="submitQuestion">确 定</el-button>
              </span>
            </el-dialog>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="8" class="second-row-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的回答</span>
          </div>
          <el-collapse v-model="myAnswer" @change="handleChange">
            <el-collapse-item v-for="(answer,index) in this.currentUserQuestionAnswerList"
                              :title="answer.description" :name="index+1">
              <div>{{ answer.answerContent }}</div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :span="8" class="third-row-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的消息</span>
          </div>
          <el-collapse v-model="myInformation" @change="handleChange">
            <el-collapse-item v-for="(answer,index) in this.otherUserQuestionAnswerList"
                              :title="answer.description" :name="index+1">
              <div>{{ answer.answerContent }}</div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>


    <el-row :gutter="10" class="second-row" style="padding-top: 20px">
      <el-col :span="24" class="chart-left">
        <el-card class="">
          <div slot="header" class="clearfix">
            <span>问题列表</span>
          </div>

          <el-table
              :data="questionList"
              border
              style="width: 100%">
            <el-table-column
                fixed
                prop="description"
                label="描述">
            </el-table-column>
            <el-table-column
                fixed
                prop="user"
                width="100"
                label="提问人">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">回复</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-dialog
          title="回复"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>
        <el-tag>问题描述</el-tag>
        <span>{{ this.needAnswerQuestion !== null ? this.needAnswerQuestion.description : '' }}</span>
        <div>
          <el-tag>您的回答</el-tag>
        </div>
        <el-input type="textarea" v-model="needAnswerQuestionAnswer.answerContent" maxlength="500" show-word-limit
                  resize="none"
                  :rows="5" class="textarea-box"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="()=>{this.centerDialogVisible = false;this.needAnswerQuestion = null}">取 消</el-button>
          <el-button type="primary" @click="confirmReply">确 定</el-button>
        </span>
      </el-dialog>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "DiseaseCommunication",
  data() {
    return {
      user: {
        avatarUrl:
            'https://img0.baidu.com/it/u=4088935163,1071843555&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
        unreadCount: 'unreadCount',
        loginStatus: true,
      },
      // 所有问题列表
      questionList: [
        {questionId: '1', description: "吃糖多对身体有什么危害?", user: 'u01'},
        {questionId: '2', description: "经常吃面包对身体会有什么影响？", user: 'u02'}
      ],
      recommendedDrugList: [
        {diseaseName: "糖尿病", recommendedDrug: "胰岛素", recommendationIndex: 3},
        {diseaseName: "夜盲症", recommendedDrug: "维生素A", recommendationIndex: 5},
      ],
      // 当前用户自己提出的问题列表
      currentUserQuestionList: [
        {questionId: '2', description: "经常吃面包对身体会有什么影响1？", user: 'u02'},
        {questionId: '3', description: "经常吃面包对身体会有什么影响2？", user: 'u02'},
      ],
      // 当前用户自己的回答
      currentUserQuestionAnswerList: [
        {
          questionId: '1',
          description: '吃糖多对身体有什么危害?',
          answerContent: '吃糖多对身体可能会引起危害，容易导致身体过度肥胖，而且还容易诱发糖尿病，有些人还会出现蛀牙的情况。',
          replyUserId: 'u02'
        },
      ],
      // 其他用户回复当前用户的回答
      otherUserQuestionAnswerList: [
        {
          questionId: '2',
          description: '经常吃面包对身体会有什么影响1?',
          answerContent: '经常吃的人们将面临黏液堵塞问题，让鼻子和呼吸道受到影响，也容易导致严重的消化不良，尤其是儿童和老人。',
          replyUserId: 'u01'
        },
      ],

      centerDialogVisible: false,
      askQuestionsDialogVisible: false,
      question: {description: '', user: ''},
      myAnswer: ['1'],
      myInformation: ['1'],
      needAnswerQuestion: null,
      needAnswerQuestionAnswer: {questionId: '', description: '', answerContent: '', replyUserId: ''},
    }
  },
  methods: {
    openAskQuestionsDialog() {
      this.question = {description: '', user: ''}
      this.askQuestionsDialogVisible = true
    },
    submitQuestion() {
      this.askQuestionsDialogVisible = false
      // 提交问题

      this.question = {description: '', user: ''}

    },
    handleChange(val) {

    },
    confirmReply() {
      this.centerDialogVisible = false
      this.needAnswerQuestion = null
      this.needAnswerQuestionAnswer = {questionId: '', description: '', answerContent: '', replyUserId: ''}
    },
    handleClick(question) {
      this.needAnswerQuestion = question
      this.needAnswerQuestionAnswer.questionId = this.needAnswerQuestion.questionId
      console.log(question)
      this.centerDialogVisible = true
    },
    questionSearch() {

    },

    logout() {

    },
    initData() {

    }
  }
}
</script>

<style scoped>
.box-card {
  height: auto;
  margin-bottom: 20px;
}
</style>
