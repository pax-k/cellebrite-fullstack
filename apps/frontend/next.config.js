// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
    async redirects() {
        return [{
            source: '/phone',
            destination: '/phone/new',
            permanent: true,
        }, ];
    },
});