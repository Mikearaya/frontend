import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollmentComponent } from './enrollment/enrollment.component';



const EnrollmentRoutes: Routes = [
            { path: 'manage/enrollments',
              component: EnrollmentComponent
            },
            { path: 'manage/enrollments/:id',
              component: EnrollmentComponent
            },

];

@NgModule({
    imports: [RouterModule.forChild(EnrollmentRoutes)],
    exports: [RouterModule]
})

export class EnrollmentRoutingModule {}
