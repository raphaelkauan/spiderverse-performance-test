import {
    sleep,
    htmlReport,
    environment,
    ApiService,
    ENDPOINTS,
    generateRandomString,
    generateRandomNumber,
    deleteSpiderverse,
    Checks
} from '../../../support/utils/imports.js';

export function handleSummary(data) {
    return {
        'spiderverse.search.load.test.html': htmlReport(data),
    };
}

const base_uri = environment.urls.url;
const apiService = new ApiService(base_uri);
const checks = new Checks()

export const options = environment.options.spiderverse.loads.loadRegisterSpiderverse;

export function setup() {
    deleteSpiderverse();

    for(let i = 0; i <= 15; i++) {
        console.log(i)
        const data = {
            spiderManName: `${generateRandomString(15)}_testing`,
            spiderManPassword: '1P5?3K)&9NFk49998',
            earth: generateRandomNumber(3),
            powers: `Escalar paredes, Super agilidade, ${generateRandomString(10)}`,
        };
    
        const res = apiService.post(ENDPOINTS.SPIDERVERSE_ENDPOINT, data);
        console.log(res.body);
    }
}

export default function () {
    const res = apiService.get(ENDPOINTS.SPIDERVERSE_ENDPOINT, "?pageIndex=0");

    checks.checkStatusCode("Status code is 200", res, 200)

    sleep(1);
}

export function teardown() {
    deleteSpiderverse();
}
