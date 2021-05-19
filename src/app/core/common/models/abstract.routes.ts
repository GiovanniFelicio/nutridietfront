import { Type } from '@angular/core';
import { AbstractWindows } from "../../components/window/models/abstract-windows";

export interface AbstractRoutes {
    path: string,
    component: Type<AbstractWindows>,
    outlet?: string,
    data?: object
}