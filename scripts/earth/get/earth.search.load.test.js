import {
    sleep,
    htmlReport,
    environment,
    ApiService,
    ENDPOINTS,
    deleteSpiderverse,
    registerManySpiderverse,
    loginSpiderverse,
    Checks
} from '../../../support/utils/imports.js';

export function handleSummary(data) {
    return {
        'earth.search.load.test.test.html': htmlReport(data),
    };
}

const base_uri = environment.urls.url;
const apiService = new ApiService(base_uri);
const checks = new Checks();

export const options = environment.options.earth.loads.loadEarth;

export function setup() {
    deleteSpiderverse();
    registerManySpiderverse()
    return loginSpiderverse()
}

export default function (authorization) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authorization}`,
    }

    const params = "/12"

    const res = apiService.get(ENDPOINTS.EARTH_ENDPOINT + params, headers);

    checks.checkStatusCode("Status code is 200", res, 200)

    sleep(1);
}

export function teardown() {
    deleteSpiderverse();
}
