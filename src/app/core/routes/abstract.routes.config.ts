import { AbstractWindowsComponent } from './../interfaces/abstract.windows.component';
import { WindowsComponent } from "src/app/components/windows/windows.component";


export class AbstractRoutesConfig {
    private _path: string
    private _component: AbstractWindowsComponent

    constructor(private path: string, private component: AbstractWindowsComponent) {
        this._path = path;
        this._component = component;
    }

    toJSON () {
        return {
            path: this._path,
            component: this._component
        }
    }
}