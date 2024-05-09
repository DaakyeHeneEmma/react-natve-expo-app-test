import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import Passenger from '../libs/passenger';

export async function GET(req:ExpoRequest) {
    if(await Passenger() == undefined || await Passenger() == null || await Passenger() == String){
        return {}
    }
     return ExpoResponse.json(await Passenger())
 }
