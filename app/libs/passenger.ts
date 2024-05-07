import mtlsCert from "./mtls";
import axios from "axios";

const config:any = {
 headers :  {
      "method": "GET",
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      // "User-Agent":mtlsCert(),
      Authorization:mtlsCert(),
    }
}

  const URL = process.env.EXPO_PUBLIC_SIT_API_DOMAIN+`/passenger/`
  
//parser for Passenger Users

const fetchData = async (url = URL) => {
  const response = await axios.get(url, config);
  const data = response.data;
  const allData = data.results;

  if (data.next) {
    const moreData = await fetchData(data.next);
    await allData.push(...moreData);
  }

  return await allData;
};



export const getNUMBER = async(phone:string) =>{
  const response = await fetch(`${URL}?search=${phone}`).then((data)=>data.json())
  return await response.results;
 }

 async function Passenger() {
  try {
    const allData = await fetchData();
    return await allData;
  } catch (error) {
    console.error(error);
  }
}

export default Passenger