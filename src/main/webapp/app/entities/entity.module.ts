import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Springbootweb1RegionModule } from './region/region.module';
import { Springbootweb1CountryModule } from './country/country.module';
import { Springbootweb1LocationModule } from './location/location.module';
import { Springbootweb1DepartmentModule } from './department/department.module';
import { Springbootweb1TaskModule } from './task/task.module';
import { Springbootweb1EmployeeModule } from './employee/employee.module';
import { Springbootweb1JobModule } from './job/job.module';
import { Springbootweb1JobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Springbootweb1RegionModule,
        Springbootweb1CountryModule,
        Springbootweb1LocationModule,
        Springbootweb1DepartmentModule,
        Springbootweb1TaskModule,
        Springbootweb1EmployeeModule,
        Springbootweb1JobModule,
        Springbootweb1JobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Springbootweb1EntityModule {}
