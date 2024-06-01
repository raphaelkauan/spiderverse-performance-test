import http from 'k6/http';
import { BaseService } from './BaseService.js';

export class ApiService extends BaseService {
    constructor(base_uri) {
        super(base_uri);
    }

    post(endpoint, body, headers = {}, params = {}) {
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.post(uri, JSON.stringify(body), options);
    }

    get(endpoint, headers = {}, params = {}) {
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.get(uri, options);
    }

    delete(endpoint, headers = {}, params = {}) {
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.del(uri, options);
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
