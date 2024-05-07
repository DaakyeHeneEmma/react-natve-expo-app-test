import { StyleSheet } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, View } from '@/components/Themed';

// const LoadingScreen = () => {
//   return (
//     <View style={styles.loadingContainer}>
//       <ActivityIndicator size="large" color="#0000ff" />
//     </View>
//   );
// };


export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetcted = async() =>{
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/').then(async(data)=> await data.json())
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
      <Text style={styles.title}>Fake Api Check</Text>
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
    fontSize: 16, // Set a smaller maximum size for user titles
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


















// import * as React from 'react';
// import * as WebBrowser from 'expo-web-browser';
// import { useAuthRequest, exchangeCodeAsync, revokeAsync, ResponseType } from 'expo-auth-session';
// import { Button, Alert } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';

// WebBrowser.maybeCompleteAuthSession();

// const clientId = `${process.env.EXPO_PUBLIC_COGNITO_CLIENT_ID}`;
// const userPoolUrl =
// `${process.env.EXPO_PUBLIC_Management_Portal_Domain}.auth.${process.env.EXPO_PUBLIC_COGNITO_CLIENT_REGION}.amazoncognito.com`;
// const redirectUri = `${process.env.EXPO_PUBLIC_Management_Portal_Domain}login/?r=1&ReturnUrl=`

// export default function App() {
//   const [authTokens, setAuthTokens] = React.useState<any>(null);
//   const discoveryDocument = React.useMemo(() => ({
//     authorizationEndpoint: userPoolUrl + '/oauth2/authorize',
//     tokenEndpoint: userPoolUrl + '/oauth2/token',
//     revocationEndpoint: userPoolUrl + '/oauth2/revoke',
//   }), []);

//   const [request, response, promptAsync]:any = useAuthRequest(
//     {
//       clientId,
//       responseType: ResponseType.Code,
//       redirectUri,
//       usePKCE: true,
//     },
//     discoveryDocument
//   );

//   React.useEffect(() => {
//     const exchangeFn = async (exchangeTokenReq:any) => {
//       try {
//         const exchangeTokenResponse = await exchangeCodeAsync(
//           exchangeTokenReq,
//           discoveryDocument
//         );
//         setAuthTokens(exchangeTokenResponse);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     if (response) {
//       if (response.error) {
//         Alert.alert(
//           'Authentication error',
//           response.params.error_description || 'something went wrong'
//         );
//         return;
//       }
//       if (response.type === 'success') {
//         exchangeFn({
//           clientId,
//           code: response.params.code,
//           redirectUri,
//           extraParams: {
//             code_verifier: request.codeVerifier,
//           },
//         });
//       }
//     }
//   }, [discoveryDocument, request, response]);

//   const logout = async () => {
//     const revokeResponse = await revokeAsync(
//       {
//         clientId: clientId,
//         token: authTokens.refreshToken,
//       },
//       discoveryDocument
//     );
//     if (revokeResponse) {
//       setAuthTokens(null);
//     }
//   };
//   console.log('authTokens: ' + JSON.stringify(authTokens));
//   return authTokens ? (
//     <Button title="Logout" onPress={() => logout()} />
//   ) : (
//     <Button disabled={!request} title="Login" onPress={() => promptAsync()} />
//   );
// }