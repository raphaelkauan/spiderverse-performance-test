export const environment = {
    urls: {
        url: 'http://localhost:3000/v1',
    },
    options: {
        spiderverse: {
            smokes: {
                smokeRegisterSpiderverse: {
                    vus: 10,
                    duration: '1m',
                    thresholds: {
                        http_req_duration: ['p(95)<200'],
                        http_req_failed: ['rate<0.01'],
                    },
                },
            },

            loads: {
                loadRegisterSpiderverse: {
                    stages: [
                        { duration: '2m', target: 125 },
                        { duration: '2m', target: 125 },
                        { duration: '2m', target: 0 },
                    ],
                },
                loadSearchSpiderverses: {
                    stages: [
                        { duration: '2m', target: 100 },
                        { duration: '2m', target: 100 },
                        { duration: '2m', target: 0 },
                    ],
                },
            },

            peaks: {
                peakRegisterSpiderverse: {
                    stages: [
                        { duration: '3m', target: 10 },
                        { duration: '3m', target: 25 },
                        { duration: '3m', target: 50 },

                        { duration: '1m', target: 100 },
                        { duration: '1m', target: 150 },
                        { duration: '1m', target: 200 },

                        { duration: '3m', target: 200 },

                        { duration: '1m', target: 100 },
                        { duration: '1m', target: 50 },
                        { duration: '1m', target: 0 },
                    ],
                },
            },
        },

        earth: {
            smokes: {
                smokeEarth: {
                    vus: 2,
                    duration: '10s',
                    thresholds: {
                        http_req_duration: ['p(95)<200'],
                        http_req_failed: ['rate<0.01'],
                    },
                },
            },

            loads: {
                loadEarth: {
                    stages: [
                        { duration: '2m', target: 25 },
                        { duration: '2m', target: 50 },
                        { duration: '2m', target: 0 },
                    ],
                },
            },
        },
    },
};
