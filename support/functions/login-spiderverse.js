import { ApiService, environment, ENDPOINTS, generateRandomString } from "../utils/imports.js";

const base_uri = environment.urls.url;
const apiService = new ApiService(base_uri);

export function loginSpiderverse() {
    const data = {
        spiderManName: `rap_testing`,
        spiderManPassword: '1P5?3K)&9NFk49998',
        earth: 12,
        powers: `Escalar paredes, Super agilidade, ${generateRandomString(10)}`,
    };

    const dataLogin = {
        spiderManName: `rap_testing`,
        spiderManPassword: '1P5?3K)&9NFk49998'
    }

    apiService.post(ENDPOINTS.SPIDERVERSE_ENDPOINT, data);
    const res = apiService.post(ENDPOINTS.LOGIN_ENDPOINT, dataLogin)

    const authorization = res.json().access_token

    console.log(authorization)

    return authorization
}