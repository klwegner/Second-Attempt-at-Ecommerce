import Commerce from '@chec/commerce.js';

const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
const devEnvironment = process.env.NODE_END === 'development';

const commerceConfig = {
    axiosConfig: {
        headers: {
            'X-Chec-Agent': 'commerce.js/v2',
            'Chec-Version': '2021-09-20',
        },
    },
};

if (devEnvironment && !checAPIKey) {
    throw Error('Your public API key must be provided as an environmental variable named NEXT_PUBLIC_CHEC_PUBLIC_KEY. Obtain your Chec public key by logging into your Chec account and navigating to Setup > Developer.')
}

export default new Commerce(
    checAPIKey,
    devEnvironment,
    commerceConfig,
);