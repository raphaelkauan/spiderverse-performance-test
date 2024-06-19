import { ApiService, environment, ENDPOINTS, generateRandomString } from "../utils/imports.js";

const base_uri = environment.urls.url;
const apiService = new ApiService(base_uri);

export function registerManySpiderverse() {
    for(let i = 0; i <= 100; i++) {
        console.log(i)
        const data = {
            spiderManName: `${generateRandomString(15)}_testing`,
            spiderManPassword: '1P5?3K)&9NFk49998',
            earth: 12,
            powers: `Escalar paredes, Super agilidade, ${generateRandomString(10)}`,
        };

        apiService.post(ENDPOINTS.SPIDERVERSE_ENDPOINT, data);
    }
}