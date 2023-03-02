import request from "@/network/request";

//获取今日概况 和会员消费占比
export function getTodayConditionAndVipPercent() {
  return request({
    url: '/manage/getFirstModel'
  })
}

//获取近7天收入概况
export function getIncomeConditionForSeven() {

  // let data = [
  //   {
  //     incomeDate: '12-01',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-02',
  //     income: '1000',
  //   },
  //   {
  //     incomeDate: '12-03',
  //     income: '3000',
  //   },
  //   {
  //     incomeDate: '12-04',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-05',
  //     income: '4000',
  //   },
  //   {
  //     incomeDate: '12-06',
  //     income: '5000',
  //   },
  //   {
  //     incomeDate: '12-07',
  //     income: '2000',
  //   },
  // ]
  return request({
    url: '/manage/getSevenDays',
    method: 'get'
  })
}

//获取近30天收入概况
export function getIncomeConditionForThirty() {

  // let data = [
  //   {
  //     incomeDate: '12-01',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-02',
  //     income: '1000',
  //   },
  //   {
  //     incomeDate: '12-03',
  //     income: '3000',
  //   },
  //   {
  //     incomeDate: '12-04',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-05',
  //     income: '4000',
  //   },
  //   {
  //     incomeDate: '12-06',
  //     income: '5000',
  //   },
  //   {
  //     incomeDate: '12-07',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-08',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-09',
  //     income: '1000',
  //   },
  //   {
  //     incomeDate: '12-10',
  //     income: '3000',
  //   },
  //   {
  //     incomeDate: '12-11',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-12',
  //     income: '4000',
  //   },
  //   {
  //     incomeDate: '12-13',
  //     income: '5000',
  //   },
  //   {
  //     incomeDate: '12-14',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-15',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-16',
  //     income: '1000',
  //   },
  //   {
  //     incomeDate: '12-17',
  //     income: '3000',
  //   },
  //   {
  //     incomeDate: '12-18',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-19',
  //     income: '4000',
  //   },
  //   {
  //     incomeDate: '12-20',
  //     income: '5000',
  //   },
  //   {
  //     incomeDate: '12-21',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-22',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-23',
  //     income: '1000',
  //   },
  //   {
  //     incomeDate: '12-24',
  //     income: '3000',
  //   },
  //   {
  //     incomeDate: '12-25',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-26',
  //     income: '4000',
  //   },
  //   {
  //     incomeDate: '12-27',
  //     income: '5000',
  //   },
  //   {
  //     incomeDate: '12-28',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-29',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '12-30',
  //     income: '1000',
  //   },
  //   {
  //     incomeDate: '12-31',
  //     income: '3000',
  //   },
  //   {
  //     incomeDate: '1-01',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '1-02',
  //     income: '4000',
  //   },
  //   {
  //     incomeDate: '1-03',
  //     income: '5000',
  //   },
  //   {
  //     incomeDate: '1-04',
  //     income: '2000',
  //   },
  //   {
  //     incomeDate: '1-05',
  //     income: '2000',
  //   },
  // ]
  return request({
    url: '/manage/getThirtyDays',
    method: 'get'
  })
}


//获取今日门诊记录
export function getOutpatientServiceRecord() {

  // let data = [
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  //   {
  //     id: 1,
  //     meetDoctorStatus: {
  //       status: '接诊中'
  //     },
  //     sickId: 12,
  //     name: '陈平安',
  //     sex: {
  //       sex: '男'
  //     },
  //     age: 25,
  //     phoneNumber: '1234567890',
  //     clinicType: {
  //       clinicType: '初诊',
  //     },
  //     department: {
  //       department: "儿科"
  //     },
  //     doctor: '宁姚',
  //     updateTime: '1996-12-25 12:57:55'
  //   },
  // ]
  return request({
    url: '/manage/findAll',
    method: 'get'
  })
}