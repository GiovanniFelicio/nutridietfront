import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

export abstract class AbstractWindowsService {
    protected _new(_router: Router): void {
        throw new Error("Method not implemented");
    };

    protected _save(): void {
        throw new Error("Method not implemented");
    };

    protected _back(location: Location): void {
        location.back();
    };

    protected _cancel(): void {
        throw new Error("Method not implemented");
    };
}
