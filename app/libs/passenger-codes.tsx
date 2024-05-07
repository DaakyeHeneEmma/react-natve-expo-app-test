// import { Keyboard, Pressable, StyleSheet, TextComponent } from 'react-native';
// import { useState, useEffect, ReactNode } from 'react';
// import { TextInput, Button, ActivityIndicator, Text, FlatList} from 'react-native';
// import TestComponent from '@/components/TextComponet';


// import {  View } from '@/components/Themed';
// import axios from 'axios';

// type UserType = {
//   FirstName:string
//   LastName:string
//   MobileNumber:number
//   AccountNumber:number
//   DateOfBirth: any
//   AccountPin:number
//   default:null
// }

// const Passenger:React.FC = () => {
//   const [inputText, setInputText] = useState('+233');
//   const [isLoading, setIsLoading]= useState(false);
//   const [users, setUsers] = useState([]);
//   const [matchedUser, setMatchedUser]= useState<UserType | null>(null) ;

//   const handleInputChange = (text:any) => {
//     setInputText(text);
//   };

//   useEffect(()=>{
//     const fetcted = async() =>{
//         try {
//         const response = await fetch('/api/test').then((data)=>data.json())
//         setUsers(await response)
//       } catch (error) {
//         console.error('Error fetching Users from passenger:', error)
//       }
//      }
//     fetcted()
//   },[])



//   const handleButtonPress = async () => {
//     setIsLoading(true);
  

//     try {
//       const foundUser = users.find((user:any) => user.MobileNumber === inputText);
//       foundUser ? setIsLoading(false) : setIsLoading(true);
//       setMatchedUser(foundUser || null); 
//     } catch (error) {
//       console.error('Error comparing users:', error);
  
//     }

//     await new Promise((resolve) => setTimeout(resolve, 2000)); 
    
//     setIsLoading(false); 
//   };

//   return (
//     <View style={styles.container}>
//         <Text> Passenger Details</Text>
//         <Text> {process.env.EXPO_PUBLIC_SIT_API_DOMAIN}</Text>   
    
//       {matchedUser && matchedUser ? (
//         <>
//         <Text> Passenger Details</Text>
//         <Text>Name: {matchedUser?.FirstName} {matchedUser?.LastName}</Text>
//         <Text>Account Number: {matchedUser?.AccountNumber}</Text>
//         <Text>Number: {matchedUser?.MobileNumber}</Text>
//         <Text>Date Of Birth: {matchedUser?.DateOfBirth}</Text>
//         <Text>Account Pin: {matchedUser?.AccountPin}</Text>
//         </>
//           ) : (
//             <Text>No matching user found.</Text>
//   )}

//       <TextInput
//         style={styles.text}
//         value={inputText}
//         onChangeText={handleInputChange}
//         placeholder="Phone Number"
//         placeholderTextColor={'grey'}
//         autoCorrect={true}
//         autoComplete="additional-name"
//         inputMode={'tel'}
//         />
//         {isLoading ? (
//           <Button onPress={handleButtonPress} disabled={true} title='Loading' />
//         ) : (
//           <Button onPress={handleButtonPress} title="Submit" />
//         )}
//     </View>
//   );
// };

// export default Passenger;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:"white"
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
//   text:{
//     width: 300,
//     height: 50,
//     margin: 12,
//     borderRadius:20,
//     borderWidth: 1,
//     padding: 10,
//     textAlign: "center",
//     color: "black"
//   }
// });
