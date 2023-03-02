<template>
  <div>
    <span class="circle-title">今日会员消费占比</span>
    <div class="line-between"></div>
    <div id="myChartPie" class="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name:'PieTemplate',
  data() {
    return {
      chartPieData: [
        {value: 44.1, name: '会员消费占比44.1%'},
        {value: 55.9, name: '非会员消费占比55.9%'},
      ],
      money: '4200.00',
    }
  },
  computed: {
    centerText() {
      return '￥' + this.money
    },
    vipName(){
      return '会员消费占比44.1%'
    },
    notVipName(){
      return ''
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      let option = {
        title: {
          // link:'',//主标题文本超链接,默认值true
          // target: null,//指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
          // sublink: '',//副标题文本超链接
          // subtarget: null,//指定窗口打开副标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
          //itemGap: 10,主副标题纵向间隔，单位px，默认为10

          // //1.显示策略，默认值true,可选为：true（显示） | false（隐藏）
          // show:true,
          // //2.主标题文本，'\n'指定换行
          // text: '诊所收入趋势',
          // //副标题文本，'\n'指定换行
          // subtext: '单位 ( 元 )',
          //3.水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
          // x: 30,
          // //4.垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
          // y: 250,
          // //5.水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
          // textAlign: null,
          // //6.标题背景颜色，默认'rgba(0,0,0,0)'透明
          // backgroundColor: 'rgba(0,0,0,0)',
          // //7.标题边框颜色,默认'#ccc'
          // borderColor: '#ccc',
          // //8.标题边框线宽，单位px，默认为0（无边框）
          // borderWidth: 1,
          // //9.标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
          // padding: 5,
          // //10.主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
          // textStyle: {
          //   fontFamily: 'Arial, Verdana, sans...',
          //   fontSize: 12,
          //   fontStyle: 'normal',
          //   fontWeight: 'normal',
          // },
          //11.副标题文本样式{"color": "#aaa"}
          // subtextStyle: {
          //   fontFamily: 'Arial, Verdana, sans...',
          //   fontSize: 12,
          //   fontStyle: 'normal',
          //   fontWeight: 'normal',
          // },
        },
        legend: {  //图例
          // orient: 'horizontal',  //图例的布局，竖直    horizontal为水平
          // textStyle: {    //图例文字的样式
          //   color: '#333',  //文字颜色
          //   fontSize: 12    //文字大小
          // }
          //图例位置
          x: 'center',
          y: 'bottom',
          //  'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
          icon: "circle",
          // 设置图例宽度
          itemWidth:10,
          // 设置图例高度
          itemHeight: 10,
          // 设置图例间距
          itemGap: 10,
        },
        series: [
          {
            type: 'pie', //环形图的type和饼图相同
            radius: ['50%', '70%'],//饼图的半径，第一个为内半径，第二个为外半径
            avoidLabelOverlap: false,
            color: ['#D1FBEF', '#F5A7C1'],
            data: this.chartPieData,
            y:-10,
            //设置提示框
            label: {
              normal: {  //正常的样式
                show: false,
                position: 'left'
              },
              emphasis: { //选中时候的样式
                show: false,
                textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold'
                }
              }
            },
          }
        ],
        //为环形图中间添加文字
        graphic: [
          {
            type: "text",
            left: "center",
            top: "42%",
            style: {
              text: "今日消费总额",
              textAlign: "center",
              fill: "#999999",
              fontSize: 12,
            },
          },
          {
            type: "text",
            left: "center",
            top: "50%",
            style: {
              text: this.centerText,
              textAlign: "center",
              fill: "#000",
              fontSize: 23,
            },
          },
        ],
        // tooltip: {//提示框，可以在全局也可以在
        //   trigger: 'item',  //提示框的样式
        //   formatter: "{a} <br/>{b}: {c} ({d}%)",
        //   color: '#000', //提示框的背景色
        //   textStyle: { //提示的字体样式
        //     color: "black",
        //   }
        // },
      }
      let myChart = echarts.init(document.getElementById('myChartPie'));
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped lang="less">
.chart {
  width: 100%;
  height: 380px/1.25;
}

.line-between {
  border-bottom: #F6F6F6 2px solid;
  position: relative;
  top: 15px;
}
</style>