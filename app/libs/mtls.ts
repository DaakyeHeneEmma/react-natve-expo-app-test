import axios, { AxiosInstance } from 'axios'

interface MtlsConfig {
  cert: string;
  key: string;
  rejectUnauthorized:boolean,
  requestCert:boolean,
}

export function mtlsCert(environmentName: string = 'production'): AxiosInstance| null {
  if (environmentName === 'localhost' || environmentName === 'preview' ) {
    const cert = process.env.EXPO_PUBLIC_SSL_CER_FILE!;
    const key = process.env.EXPO_PUBLIC_SSL_KEY_FILE!;

    
    const options: MtlsConfig = { 
      cert: Buffer.from(cert, 'base64').toString(),
      key: Buffer.from(key, 'base64').toString(),
      rejectUnauthorized:false,
      requestCert:false,
    };
    
    const axiosInstance:any = axios.create({
      httpsAgent: options
    });
    
    return axiosInstance
    
  } else {
    return null;
  }
}

export default mtlsCert