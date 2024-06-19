import { check } from "k6";

export class Checks {
    checkStatusCode(specification, res, myStatus) {
        check(res, {
            [specification]: (r) => r.status === myStatus
        })
    }
}