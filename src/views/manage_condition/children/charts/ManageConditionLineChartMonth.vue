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
  name: 'ManageConditionLineChartMonth',
  data() {
    return {
      xAxisDataMonth: [],
      yAxisDataMonth: []
      // xAxisDataMonth: ['11-30', '12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07', '12-08',
      //   '12-09', '12-10', '12-11', '12-12', '12-13', '12-14', '12-15', '12-16', '12-17',
      //   '12-18', '12-19', '12-20', '12-21', '12-22', '12-23', '12-24', '12-25', '12-26', '12-27', '12-28', '12-29', '12-30'],
      // yAxisDataMonth: ['2000.01', '2300.00', '3000.03', '3200.23', '4000.23',
      //   '3800.56', '3500.66', '4100.00', '5000.00', '4800.00', '4400.00', '4200.00', '4700.00',
      //   '6000.00', '5500.00', '5200.00', '3200.00', '2200.00', '2800.00', '2900.00', '3100.00',
      //   '3200.00', '3500.00', '3950.00', '4150.00', '4350.00', '5000.00', '5105.00', '5350.00', '5550.00', '3000.00']
    }
  },
  props: {
    lineChartData: {
      type: Array,
      default: []
    },
  },
  watch: {
    lineChartData(val) {
      for (let day of val) {
        this.xAxisDataMonth.push(day.date)
        this.yAxisDataMonth.push(day.income)
      }
      //画线
      this.loadLine();
    }
  },
  methods: {
    loadLine() {
      let option = {

        title: {
          subtext: '单位 ( 元 )',
          x: 20,
          y: 15,
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
          data: this.xAxisDataMonth,
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
            data: this.yAxisDataMonth,
            type: 'line',
            //折线点设置为实心点
            // symbol: 'circle',
            //让曲线变平滑的
            smooth: true,
            //折线点的大小
            symbolSize: 10,
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