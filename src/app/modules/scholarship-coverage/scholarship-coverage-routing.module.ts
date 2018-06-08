import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScholarshipCoverageComponent } from './scholarship-coverage/scholarship-coverage.component';



const ScholarshipCoverageRoutes: Routes = [
    {
        path: 'manage/scholarship_coverage',
        component: ScholarshipCoverageComponent
    },
    {
        path: 'manage/scholarship_coverage/:id',
        component : ScholarshipCoverageComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(ScholarshipCoverageRoutes)],
    exports: [RouterModule]
})

export class ScholarshipCoverageRoutingModule { }
