import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VRViewComponent } from './vrview.component';

export * from './vrview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VRViewComponent
  ],
  exports: [
    VRViewComponent
  ]
})
export class VRViewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VRViewModule,
    };
  }
}
