import { useQuery, ApolloProvider, ApolloClient, gql } from '@apollo/client';
import { graphql } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import AppSyncConfig from '../graphql/AppSyncConfig'; 


const BackendConnector = () => {
    const url = AppSyncConfig.ApiUrl;
    const region = AppSyncConfig.Region;
    const auth = {
        type: 'API_KEY',
        apiKey: AppSyncConfig.ApiKey
    };

    const link = ApolloLink.from([
        createAuthLink({ url, region, auth }), 
        createHttpLink({ uri: url })
    ]);

    const client = new ApolloClient({
        link,
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={BackendConnector}>
            
        </ApolloProvider>
    )
}


export default BackendConnector;