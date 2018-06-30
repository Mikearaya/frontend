import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScholarshipCoverageComponent } from './scholarship-coverage/scholarship-coverage.component';
import { ScholarshipTypeComponent } from './../scholarship-type/scholarship-typ/scholarship-type.component';



const ScholarshipCoverageRoutes: Routes = [
    {
        path: 'manage/scholarship_coverage',
        component: ScholarshipCoverageComponent
    },
    {
        path: 'manage/scholarship_coverage/:id',
        component : ScholarshipCoverageComponent
    },
    {
        path: 'manage/scholarship_type',
        component: ScholarshipTypeComponent
    },
    {
        path: 'manage/scholarship_type/:id',
        component: ScholarshipTypeComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(ScholarshipCoverageRoutes)],
    exports: [RouterModule]
})

export class ScholarshipCoverageRoutingModule { }
