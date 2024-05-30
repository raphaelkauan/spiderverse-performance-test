import http from 'k6/http';
import { BaseService } from './BaseService';

export class ApiService extends BaseService {
    constructor(base_uri) {
        super(base_uri);
    }

    post(endpoint, body, headers = {}, params = {}) {
        const uri = this.base_uri + endpoint;
        const options = this.buildOptions(headers, params);
        return http.post(uri, JSON.stringify(body), options);
    }

    get(endpoint, headers = {}, params = {}) {
        const uri = this.base_uri + endpoint;
        const options = this.buildOptions(headers, params);
        return http.get(uri, options);
    }

    buildOptions(headers = {}, params = {}) {
        return {
            headers: Object.assign(
                {
                    'Content-Type': 'application/json',
                },
                headers
            ),
            params: Object.assign({}, params),
        };
    }
}
