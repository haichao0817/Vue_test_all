import axios from 'axios'
import { message } from 'ant-design-vue'

//响应拦截
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 10000;

axios.interceptors.response.use(
    (response) => {
        let status = response.status;
        switch(status){
          case 222:
            message.error(response.data.msg);
            break;
          case 223:
            message.error(response.data.msg);
            break;
          case 226:
            message.error(response.data.msg);
            break;
          case 200:
            break;
          case 201:
              break;
          default:
            message.error("系统错误，请联系管理员");
            break;
        }
        return Promise.resolve(response);
    },
    (error) => {
        // message.error(error.response.msg)
        // 获取状态码
        const { status } = error.response
        switch(status) {
          case 401:
            break;
          case 460:
            message.error('请求参数错误');
            break;
          case 470:
            message.error('提交信息错误');
            break;
          case 471:
            message.error('当前数据已存在，请勿提交重复数据');
            break;
          case 472:
            message.error('数据不存在');
            break;
          case 473:
            // 数据不合法
            if(error.response.data.msg.constructor === String){
              message.error(error.response.data.msg);
            } else if (error.response.data.msg.constructor === Object){
              for(let msg in error.response.data.msg){
                message.error(msg + " : " + error.response.data.msg[msg]);
              }
            }
            break;
          case 400:
              message.error(error.response.data.msg);
              break;
          default:
            message.error('系统错误，请联系管理员');
        }
        return Promise.reject(error)
    }
)
export default axios