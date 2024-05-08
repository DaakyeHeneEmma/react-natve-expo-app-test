import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { Text, View } from '@/components/Themed';

import mtlsCert from '../libs/mtls';

const headers =  {
  "method": "GET",
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*',
  // "User-Agent":mtlsCert(),
}

const URL = process.env.EXPO_PUBLIC_SIT_API_DOMAIN+`/passenger/`
const URL2 ='https://jsonplaceholder.typicode.com/todos/'

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetcted = async() =>{
        try {
        const response:any = await fetch(URL,headers)
        .then(async(data:any)=> !data.ok ? console.log(data.status) : (await data.json()))
        console.log(await response)
        setUsers(response)
      } catch (error) {
        console.error('Error fetching Users on index:', error)
      }
     }
    fetcted()
  },[])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MTLS Check</Text>
              {users && users.map((user: any) => (
          <View key={user.id}>
            <Text style={styles.userTitle} numberOfLines={2} ellipsizeMode="tail">
              {user.title}
            </Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userTitle: {
    fontSize: 16, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  loadingContainer: {
    position: 'absolute',
    top: 50,
    left: '50%',
    marginLeft: -25,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
    padding: 10,
    borderRadius: 5, 
  }
});




