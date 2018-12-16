import { NgModule } from '@angular/core';

import { Springbootweb1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Springbootweb1SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Springbootweb1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Springbootweb1SharedCommonModule {}
