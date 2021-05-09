import { Route, Routes } from '@angular/router';
import { Type } from '@angular/core';


export class AbstractRoutesConfig {
    constructor(public path: string, public component: Type<any>, public children?: Routes, public outlet?: string) {}

    toJSON (): Route {
        return {
            path: this.path,
            component: this.component,
            children: this.children,
            outlet: this.outlet
        }
    }
}