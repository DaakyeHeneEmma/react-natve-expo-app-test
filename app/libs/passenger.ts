import mtlsCert from "./mtls";
import axios from "axios";

const headers =  {
    "method": "GET",
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    // "User-Agent":`${mtlsCert()}`
  }
  
//parser for Passenger Users
const URL = process.env.EXPO_PUBLIC_SIT_API_DOMAIN+`/passenger/`

const fetchData = async (url = URL) => {
  const response = await axios.get(url, headers);
  const data = response.data;
  const allData = data.results;

  // if (data.next) {
  //   const moreData = await fetchData(data.next);
  //   allData.push(...moreData);
  // }

  return allData;
};

 async function Passenger() {
  try {
    const allData = await fetchData();
    return await allData;
  } catch (error) {
    console.error(error);
  }
}

export default Passenger