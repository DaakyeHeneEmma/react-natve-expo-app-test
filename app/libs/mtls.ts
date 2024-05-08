import axios, { AxiosInstance } from 'axios'

global.Buffer = require('buffer').Buffer;

interface MtlsConfig {
  cert: string;
  key: string;
  rejectUnauthorized:boolean,
  requestCert:boolean,
}

const mtlsCert = axios.create({
  baseURL : process.env.EXPO_PUBLIC_SIT_API_DOMAIN
})

mtlsCert.interceptors.request.use(
  function(){
      const cert = process.env.EXPO_PUBLIC_SSL_CER_FILE!;
      const key = process.env.EXPO_PUBLIC_SSL_KEY_FILE!;
  
      const options: MtlsConfig = { 
        cert: Buffer.from(cert, 'base64').toString(),
        key: Buffer.from(key, 'base64').toString(),
        rejectUnauthorized:true,
        requestCert:true,
      };
      
      const axiosInstance:any = axios.create({
        httpsAgent: options
      });
      
      return axiosInstance 
  },
  function (error){
    return Promise.reject(error)
  }
)

export default mtlsCert