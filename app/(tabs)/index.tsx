import { StyleSheet } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
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
        // const response:any = await axios.get('/api/test');
        const response = await fetch('/api/test').then((data)=>data.json())
        setUsers(response)
      } catch (error) {
        console.error('Error fetching Users on index:', error)
      }
     }
    fetcted()
  },[])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passengers</Text>
      {users.length === 0 && <LoadingScreen />}
      <FlatList
        data={users}
        keyExtractor={(item:any)=>String(item.AccountNumber)}
        renderItem={({item})=>(
          <View style={styles.item}>
              <Text style={{color:"black"}}>{item.FirstName}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    width:200
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


