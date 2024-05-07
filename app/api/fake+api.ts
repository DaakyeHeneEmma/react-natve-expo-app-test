import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import axios from 'axios';


export async function GET(req:ExpoRequest) {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
    const res = await data.data
    console.log(await res)

     return ExpoResponse.json(await res)
 }
