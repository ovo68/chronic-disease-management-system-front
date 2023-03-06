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
        <el-input type="textarea" v-model="needAnswerQuestionAnswer.content" maxlength="500" show-word-limit
                  resize="none"
                  :rows="5" class="textarea-box"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="()=>{this.centerDialogVisible = false;this.needAnswerQuestion = null}">取 消</el-button>
          <el-button type="primary" @click="confirmReply">确 定</el-button>
        </span>
      </el-dialog>
    </el-row>


    <el-row :gutter="10" class="first-row">
      <el-col :span="12" class="chart-left">
        <el-card class="">
          <div slot="header" class="clearfix">
            <span>问题列表</span>
            <el-tooltip class="item" effect="dark" content="提问" placement="top-start">
              <el-button type="primary" icon="el-icon-edit" size="small" style="float: right;" circle
                         @click="openAskQuestionsDialog"></el-button>
            </el-tooltip>
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
      <el-col :span="12" class="second-row-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>回答列表</span>
          </div>
          <el-collapse v-model="myAnswer" @change="handleChange">
            <el-collapse-item v-for="(answer,index) in this.questionAnswerList"
                              :title="answer.description" :name="index+1">
              <div>{{ answer.content }}</div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>

    </el-row>

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
      <el-input type="textarea" v-model="needAnswerQuestionAnswer.content" maxlength="500" show-word-limit
                resize="none"
                :rows="5" class="textarea-box"></el-input>
      <span slot="footer" class="dialog-footer">
          <el-button @click="()=>{this.centerDialogVisible = false;this.needAnswerQuestion = null}">取 消</el-button>
          <el-button type="primary" @click="confirmReply">确 定</el-button>
        </span>
    </el-dialog>

  </div>
</template>

<script>
import {get, post} from "@/api/request";

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
        {questionId: '1', description: "吃糖多对身体有什么危害?"},
        {questionId: '2', description: "经常吃面包对身体会有什么影响？"}
      ],
      recommendedDrugList: [
        {diseaseName: "糖尿病", recommendedDrug: "胰岛素", recommendationIndex: 3},
        {diseaseName: "夜盲症", recommendedDrug: "维生素A", recommendationIndex: 5},
      ],

      // 回答列表
      questionAnswerList: [
        {
          questionId: '1',
          description: '吃糖多对身体有什么危害?',
          answerContent: '吃糖多对身体可能会引起危害，容易导致身体过度肥胖，而且还容易诱发糖尿病，有些人还会出现蛀牙的情况。'
        },
        {
          questionId: '1',
          description: '经常吃面包对身体会有什么影响?',
          answerContent: '期吃面包对身体是有一定影响的，包括营养不均衡、长胖、血糖指数升高等。'
        },
      ],

      centerDialogVisible: false,
      askQuestionsDialogVisible: false,
      question: {description: '', user: ''},
      myAnswer: ['1'],
      needAnswerQuestion: null,
      needAnswerQuestionAnswer: {
        questionId: '',
        description: '',
        content: ''
      },
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
      post("/question/save", this.question).then(data => {
        if (data.code === 10001) {
          this.$message.success("操作成功")
          // 刷新问题列表
          this.initData()
        } else {
          this.$message.error(data.msg)
        }
      })

      this.question = {description: '', user: ''}

    },
    handleChange(val) {

    },
    confirmReply() {
      this.centerDialogVisible = false
      this.needAnswerQuestion = null

      post("/answer/save", this.needAnswerQuestionAnswer).then(data => {
        if (data.code === 10001) {
          this.$message.success("操作成功")
          // 刷新问题列表
          this.initData()
        } else {
          this.$message.error(data.msg)
        }
      })


      this.needAnswerQuestionAnswer = {questionId: '', description: '', answerContent: ''}
    },
    handleClick(question) {
      this.needAnswerQuestion = question
      this.needAnswerQuestionAnswer.questionId = this.needAnswerQuestion.id
      this.needAnswerQuestionAnswer.description = this.needAnswerQuestion.description
      console.log(question)
      console.log(this.needAnswerQuestionAnswer)
      this.centerDialogVisible = true
    },
    questionSearch() {

    },

    logout() {

    },
    initData() {
      get("/question/all").then(data => {
        // console.log(data)
        if (data.code === 10001) {
          this.questionList = data.data
          // 刷新问题列表
        } else {
          this.$message.error(data.msg)
        }
      })

      get("/answer/all").then(data => {
        console.log(data)
        if (data.code === 10001) {
          this.questionAnswerList = data.data
          // 刷新问题列表
        } else {
          this.$message.error(data.msg)
        }
      })
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style scoped>
.box-card {
  height: auto;
  margin-bottom: 20px;
}
</style>
