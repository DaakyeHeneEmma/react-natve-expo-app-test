import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import Passenger from '../libs/passenger';

 export async function GET(req:ExpoRequest) {
  return ExpoResponse.json(await Passenger())
 }