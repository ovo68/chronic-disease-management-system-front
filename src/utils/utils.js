//根据下拉框的value 获取下拉框的label
import moment from "moment";

export function getSelectOption(value, selectData) {

  let label

  for (let select of selectData) {

    if (select.value === value) {
      label = select.label
    }
  }

  return {
    value: value,
    label: label
  }
}

//判断表格是否有数据
export function judgeTableHasData(data) {
  return data.length > 0
}

//弹出框  提示信息
export function showMessage(component, content) {
  component.$alert(content, '温馨提示', {
    confirmButtonText: '确定',
  });
}

//判断字符串是否为空
export function stringIsEmpty(string) {

  return string === ''
}

//删除确认
export function deleteConfirm(component, success) {
  component.$confirm('确定删除吗?o(╥﹏╥)o', '温馨提示o(^^)o', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    success()
    component.$message({
      type: 'success',
      message: '删除成功!'
    });
  }).catch(() => {
    component.$message({
      type: 'info',
      message: '已取消删除'
    });
  });
}

//日期格式化
export function dateTimeFormat(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
}

export function dateFormat(date) {

  if (date instanceof Date && !isNaN(date.getTime())) {
    return moment(date).format('YYYY-MM-DD')
  } else {
    return 0
  }
}

export function dateFormatString(date) {
  return moment(date).format('YYYYMMDD')
}

//将字符串根据条件拆分为数组
export function splitString(string, condition) {
  return string.split(condition)
}

//判断对象是否为空
export function judgeObjectIsEmpty(object) {
  return Object.keys(object).length === 0
}

export function saveTwoNumber(number) {
  return Math.floor(number * 100) / 100
}