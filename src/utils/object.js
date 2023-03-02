//定义一个处方项对象
export function PrescriptionItem(
  id,//id
  groupId,//组号
  name,//名称
  onceUse,//单次用量
  onceUseUnit,//单次用量单位
  useMethod,//用法
  frequency,//频率
  days,//天数
  total,//总量
  totalUnit,//总量单位
  price//价格
) {
  this.id = id
  this.groupId = groupId
  this.name = name
  this.onceUse = onceUse
  this.onceUseUnit = onceUseUnit
  this.useMethod = useMethod
  this.frequency = frequency
  this.days = days
  this.total = total
  this.totalUnit = totalUnit
  this.price = price
}

//定义一个挂号信息对象
export function RegistrationInfoObject(
  registrationId,//挂号单号
  department,//科室
  diagnoseType,//接诊类型
  diagnoseDoctor,//接诊医生
  registrationCost,//挂号费
  therapyCost,//诊疗费
  registrationDate,//挂号日期
  registrationWorker,//挂号员
) {
  this.registrationId = registrationId
  this.department = department
  this.diagnoseType = diagnoseType
  this.diagnoseDoctor = diagnoseDoctor
  this.registrationCost = registrationCost
  this.therapyCost = therapyCost
  this.registrationDate = registrationDate
  this.registrationWorker = registrationWorker
}

//定义一个患者对象
export function Sick(
  name,//姓名
  vipNumber,//患者卡号
  age,//年龄
  birthday,//出生日期
  gender,//性别
  phoneNumber,//电话
  idCard,//证件号码
  address,//地址
  addressDetail,//详细地址
  vip,//会员等级
  dueDate,//到期时间
) {
  this.name = name
  this.vipNumber = vipNumber
  this.age = age
  this.birthday = birthday
  this.gender = gender
  this.phoneNumber = phoneNumber
  this.idCard = idCard
  this.address = address
  this.addressDetail = addressDetail
  this.vip = vip
  this.dueDate = dueDate
}