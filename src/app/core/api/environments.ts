import { AbstractPath } from './abstract-path';
export const base = {
    production: false,
    v1: {
        baseUrl: 'http://localhost:8000/api/v1/'
    },
    module: {
        core: 'core/'
    }
};

export const paths = {
    auth: {
        login: (): AbstractPath => {return { method: 'POST', base: base.v1.baseUrl, module: '', path: 'auth/login/'}}
    },
    person: {
        base: (): AbstractPath => {return { base: base.v1.baseUrl, module: base.module.core, path: 'person/'}}
    }
}

