import { ShareModule } from './../share/share.module';
import { ServiceLocator } from './service/locator.service';
import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class ArchitectureModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
