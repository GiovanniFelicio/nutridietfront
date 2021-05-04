import { WindowsComponent } from "../windows/models/windows.component";

export class AbstractRoutesConfig {
    private _path: string
    private _component: WindowsComponent

    constructor(private path: string, private component: WindowsComponent) {
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