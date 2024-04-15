import { StyleSheet } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, View } from '@/components/Themed';

const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};


export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetcted = async() =>{
        try {
        // const response = await axios.get('/test');
        const response = await fetch('/api/test').then((data)=>data.json())
        setUsers(response)
      } catch (error) {
        console.error('Error fetching Users:', error)
      }
     }
    fetcted()
  },[])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passengers</Text>
      {users.length === 0 && <LoadingScreen />}
      {users && users.map((user:any)=>(
        <View key={user.AccountNumber}>
          <Text>{user.FirstName}</Text>
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


