<template>
  <div>
    <span class="chart-title">诊所收入趋势</span>
    <div class="line-between"></div>
    <div id="myChart" class="chart">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'ManageConditionLineChart',
  props: {
    lineChartData: {
      type: Array,
      default: []
    },
  },
  watch: {
    lineChartData(val) {
      for (let day of val) {
        this.xAxisData.push(day.date)
        this.yAxisData.push(day.income)
      }
      //画线
      this.loadLine();
    }
  },
  data() {
    return {
      xAxisData: [],
      yAxisData: [],
      // xAxisData: ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07'],
      // yAxisData: [2300.01, 2800.02, 3800.03, 5000.04, 3200.05, 1800.06, 4100.07],
    }
  },
  methods: {
    loadLine() {
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
          subtext: '单位 ( 元 )',
          //3.水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
          x: 20,
          // //4.垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
          y: 15,
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
          subtextStyle: {
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal',
          },
        },
        //提示框
        tooltip: {
          // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
          trigger: 'item',
          // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          showDelay: 20,
          // 隐藏延迟，单位ms
          hideDelay: 100,
          // 动画变换时间，单位s
          transitionDuration: 0.4,
          // 提示背景颜色，默认为透明度为0.7的黑色
          backgroundColor: '#FDC822',
          // 提示边框颜色
          borderColor: '#333',
          // 提示边框圆角，单位px，默认为4
          borderRadius: 4,
          // 提示边框线宽，单位px，默认为0（无边框）
          borderWidth: 0,
          // 提示内边距，单位px，默认各方向内边距为5，
          padding: 5,
          // 接受数组分别设定上右下左边距，同css
          textStyle: {
            color: '#fff'
          },
          /*
           * 'inside'  鼠标所在图形的内部中心位置
           * 'top'  鼠标所在图形上侧
           * 'left'  鼠标所在图形左侧
           * 'right'  鼠标所在图形右侧
           * 'bottom'  鼠标所在图形底侧
           */
          position: 'top',
          formatter: function (params) {
            //图例颜色 params.color
            //x轴的名称 params.name
            //y轴数据 params.seriesName
            return '<div style="width: 80px;text-align: center;padding-right: 6px">'
                + '<div style="margin-bottom: 5px">' + params.name + '<div/>'
                + '<div style="font-size: 18px">' + '￥' + params.value + '</div>'
                + '</div>';
          }

        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          //可以防止标签标签长度动态变化时溢出容器或者覆盖其他组件
          containLabel: true
        },
        xAxis: {
          // x轴数据
          data: this.xAxisData,
          type: 'category',
          boundaryGap: false,
          //去掉坐标轴刻度
          axisTick: {
            show: false
          },
          //坐标轴线
          axisLine: {
            lineStyle: {
              type: 'solid',
              width: 0.2
            }
          }
        },
        yAxis: {
          type: 'value',
          //最小值
          min: 0,
          //最大值
          max: 6000,
          //每格多少
          interval: 1000,
          //去掉坐标轴刻度
          axisTick: {
            show: false
          },
          //网格线
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#315070'],
              width: 0.3,
              type: 'solid'
            }
          },
          //坐标轴线
          axisLine: {
            lineStyle: {
              type: 'solid',
              width: 0.2
            }
          }
        },
        series: [
          {
            // y轴数据
            data: this.yAxisData,
            type: 'line',
            //折线点设置为实心点
            symbol: 'circle',
            //让曲线变平滑的
            smooth: true,
            //折线点的大小
            symbolSize: 13,
            //设置鼠标放上去动作
            hoverAnimation: false,
            //改变折线区域颜色
            areaStyle: {
              normal: {
                //设置为渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#666EE8'
                  },
                  {
                    offset: 1,
                    color: '#F7F8FE'
                  }
                ], false)
              }
            },
            //改变折线点和折线颜色
            itemStyle: {
              normal: {
                //改变折线点的颜色
                color: '#FFC71C',
                lineStyle: {
                  //改变折线颜色
                  color: '#666EE8',
                  //设置线条粗细
                  width: 4,
                }
              }
            },
          },
        ]
      }
      // 初始化图表标签
      this.myChartOne = echarts.init(document.getElementById('myChart'))
      this.myChartOne.setOption(option)
    },
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

.chart-title {
  font-size: 20px;
  font-weight: bold;
  position: relative;
  left: 20px;
}
</style>