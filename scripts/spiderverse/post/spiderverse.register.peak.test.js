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
        'spiderverse.register.peak.test.html': htmlReport(data),
    };
}

const base_uri = environment.urls.url;
const apiService = new ApiService(base_uri);
const checks = new Checks();

export const options = environment.options.spiderverse.peaks.peakRegisterSpiderverse;

export function setup() {
    deleteSpiderverse();
}

export default function () {
    const data = {
        spiderManName: `${generateRandomString(15)}_testing`,
        spiderManPassword: '1P5?3K)&9NFk49998',
        earth: generateRandomNumber(3),
        powers: `Escalar paredes, Super agilidade, ${generateRandomString(10)}`,
    };

    const res = apiService.post(ENDPOINTS.SPIDERVERSE_ENDPOINT, data);

    checks.checkStatusCode("Status code is 201", res, 201)

    sleep(1);
}

export function teardown() {
    deleteSpiderverse();
}
