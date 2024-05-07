import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import Passenger from '../libs/passenger';

// private function onComplete(msg):void {
//     console.log('data ' + msg.data + ', response ' + msg.response.statusCode + ', request ' + msg.request.method);
// }

export async function GET(req:ExpoRequest) {
    //  console.log(await Passenger())
     return ExpoResponse.json(await Passenger())
 }
