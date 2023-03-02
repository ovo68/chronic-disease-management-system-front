//封装axios
//1.导入axios
import Axios from "axios";
//2.导出封装的axios
//当外部调用request方法时 需要传入 发送请求的信息
const instance = Axios.create({
  baseURL: 'http://127.0.0.1',
})

//使用拦截器 只返回获取的数据
instance.interceptors.response.use(result => {
  return result.data
})

export default function request(config) {
  return instance(config)
}

