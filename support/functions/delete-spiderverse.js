import { ApiService, environment, ENDPOINTS } from "../utils/imports.js";

const base_uri = environment.urls.url;
const apiService = new ApiService(base_uri);


export function deleteSpiderverse() {
    const res = apiService.get(ENDPOINTS.SPIDERVERSE_ENDPOINT);

    const spiderverse = res.json();

    spiderverse.forEach((spiderverse) => {
        const spiderverseId = spiderverse.id;
        apiService.delete(ENDPOINTS.SPIDERVERSE_ENDPOINT + `/${spiderverseId}`);
    });

    console.log("Spiderverse deletado com sucesso!")
}
