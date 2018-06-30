import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ScholarshipTypeComponent } from './scholarship-typ/scholarship-type.component';
import { ScholarshipCoverageComponent } from './../scholarship-coverage/scholarship-coverage/scholarship-coverage.component';



const ScholarshiptypeRoutes: Routes = [
            { path: 'manage/scholarship_type',
              component: ScholarshipTypeComponent
            },
            { path: 'manage/scholarship_type/:id',
              component: ScholarshipTypeComponent
            },
            { path: 'manage/scholarship_coverage',
              component: ScholarshipCoverageComponent
            },
            { path: 'manage/scholarship_coverage/:id',
              component: ScholarshipCoverageComponent}

];

@NgModule({
    imports: [RouterModule.forChild(ScholarshiptypeRoutes)],
    exports: [RouterModule]
})

export class ScholarshipTypeRoutingModule {}
