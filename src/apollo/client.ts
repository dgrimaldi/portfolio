import {ApolloClient, ApolloLink, createHttpLink, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";



const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `http://localhost:3000/api/v1/news` //&apikey=${API_KEY}



const client = new ApolloClient({
    link: new HttpLink({
        uri: API_URL,
        useGETForQueries: true
    }),
    cache: new InMemoryCache(),
})

export default client