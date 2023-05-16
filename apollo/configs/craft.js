import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import schema from '~/apollo/schemas/craft.json'
const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: schema
})

let getQueryStringParams = query => {
    return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query)
            .split('&')
            .reduce((params, param) => {
                    let [key, value] = param.split('=');
                    params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                    return params;
                }, {}
            )
        : {}
};

export default ({req, app}) => {
    let response = {
        httpEndpoint: process.env.BACKEND_URL,
        tokenName: 'craft-token',
        getAuth: () => null,
        cache: new InMemoryCache({ fragmentMatcher })
    }
    
    // Craft live preview token
    if (req && 'url' in req) {
        let query = getQueryStringParams(req.url);
        if ('token' in query) {
            response.httpLinkOptions = {
                headers:{
                    'x-craft-token': query.token
                }
            }
        }
    }
    
    return response;
}