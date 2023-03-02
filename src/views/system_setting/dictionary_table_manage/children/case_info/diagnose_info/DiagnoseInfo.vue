<template>
  <sn-search-input
      @inputContentChange="getSearchInfo"
      input-placeholder="诊断内容" style="width:200px">
  </sn-search-input>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "DiagnoseInfo",
  computed: {
    ...mapState({
      'diagnoseInfoData': state => state.dictionary.diagnoseInfoData
    }),
  },

  methods: {

    //获取异步执行的方法
    ...mapActions([
      'asyncGetDiagnoseInfo',
      'asyncGetMedicalAdviceInfo'
    ]),

    //获取要查询的诊断信息
    getSearchInfo(content) {

      //1.判断输入库发生变化时是否为空
      //此时输入框发生变化  并且  内容为空  说明用户删掉了查询的内容  那么此时再发异步请求 来获取所有的信息
      if (content === '') {
        this.asyncGetDiagnoseInfo()
        return
      }

      //2.输入框不为空时 就显示用户查询的信息
      //2.1 创建一个数组来放查到的信息
      let searchInfo = []

      //2.2 获取信息
      for (let info of this.diagnoseInfoData) {

        //indexOf 返回0 说明 字符串中含有
        if (info.diagnoseInfo.indexOf(content) === 0) {
          searchInfo.push(info)
        }
      }

      //2.4 判断表中数据是否包含查询内容
      if (searchInfo.length === 0) {
        this.myUtils.showMessage(this, '表中未含查询数据,请重新输入')
        return
      }

      //2.5 修改vuex中的数据
      this.$store.commit(this.mutationsTypes.GET_DIAGNOSE_INFO, searchInfo)
    }
  },
}
</script>

<style scoped>

</style>