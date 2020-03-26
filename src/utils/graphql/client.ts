import ApolloClient from 'apollo-boost';

export const apolloClient = new ApolloClient({
    uri: 'http://graphql2.aasaanjobs.net/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3R5cGUiOiJQQSIsIm5hbWUiOiJSYWNoaXQgU3JpdmFzdGF2YSIsImlkIjoiODhjZTNjY2QtZDNmYi00OTRlLWFmM2ItZjM3ZGY3MGRiZDFlIiwiZW50aXR5X2lkIjoiMzM5NCJ9.4l3umT5t_VvR5drCdjUBRRPtcalA0Tb69dKEx4-fqns',
    },
});

export default apolloClient;
