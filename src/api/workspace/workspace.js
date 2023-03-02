import request from "@/network/request";


//查询所有患者
export function queryAllSicks() {
  // let data = [
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '21',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '22',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '23',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '24',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '25',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '26',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '27',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '28',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '29',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '30',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '31',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '32',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '33',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '34',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '35',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '35',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '35',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  //   {
  //     status: '待接诊',
  //     name: '师楠',
  //     sex: '男',
  //     age: '35',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  // ]
  return request({
    url: '/workspace/workspace',
    method: 'get'
  })
}

//通过创建时间查询病人
export function querySicksByCreateTime(begin, end) {

  // let data = [
  //   {
  //     status: '已完成',
  //     name: '师楠',
  //     sex: '男',
  //     age: '35',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  // ]

  return request({
    url: '/workspace/getSickByDate/' + begin + '/' + end,
    method: 'get'
  })
}

//通过患者姓名查询病人
export function querySicksByName(name) {
  // let data = [
  //   {
  //     status: '已完成',
  //     name: '师楠',
  //     sex: '男',
  //     age: '35',
  //     phoneNumber: '123456789',
  //     clinicType: '初诊',
  //     department: '内科',
  //     doctor: '李进',
  //     createTime: '2019-11-12 12:08:12',
  //     image: require('@/assets/image/home/workspace/headPicture.png'),
  //     vip: 'VIP3'
  //   },
  // ]
  return request({
    url: '/workspace/getSickByName/' + name,
    method: 'get'
  })
}