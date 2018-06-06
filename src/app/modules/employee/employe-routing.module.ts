import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EmployeeComponent } from '../employee/employe/employee.component';



const EmployeeRoutes: Routes = [
            { path: 'manage/employee',
              component: EmployeeComponent
            },
            { path: 'manage/employee/:id',
              component: EmployeeComponent
            },

];

@NgModule({
    imports: [RouterModule.forChild(EmployeeRoutes)],
    exports: [RouterModule]
})

export class EmployeeRoutingModule {}
