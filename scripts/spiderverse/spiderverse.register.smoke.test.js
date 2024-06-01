import { generateRandomNumber } from '../../support/functions/generate-random.js';
import {
    sleep,
    htmlReport,
    environment,
    ApiService,
    ENDPOINTS,
    generateRandomString,
} from '../../support/utils/imports.js';

export function handleSummary(data) {
    return {
        'register-movies-smoke.test.html': htmlReport(data),
    };
}

const base_uri = environment.urls.url;
const apiService = new ApiService(base_uri);

export const options = environment.options.spiderverse.smokes.smokeRegisterSpiderverse;

export function setup() {
    const res = apiService.get(ENDPOINTS.SPIDERVERSE_ENDPOINT);

    const spiderverse = res.json();

    spiderverse.forEach((spiderverse) => {
        const spiderverseId = spiderverse.id;
        apiService.delete(ENDPOINTS.SPIDERVERSE_ENDPOINT + `/${spiderverseId}`);
    });
}

export default function () {
    const data = {
        spiderManName: `${generateRandomString(15)}_testing`,
        spiderManPassword: '1P5?3K)&9NFk49998',
        earth: generateRandomNumber(3),
        powers: `Escalar paredes, Super agilidade, ${generateRandomString(10)}`,
    };

    const res = apiService.post(ENDPOINTS.SPIDERVERSE_ENDPOINT, data);
    console.log(res.body);

    sleep(1);
}

export function teardown() {
    const res = apiService.get(ENDPOINTS.SPIDERVERSE_ENDPOINT);

    const spiderverse = res.json();

    spiderverse.forEach((spiderverse) => {
        const spiderverseId = spiderverse.id;
        apiService.delete(ENDPOINTS.SPIDERVERSE_ENDPOINT + `/${spiderverseId}`);
    });
}
