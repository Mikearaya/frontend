import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ScholarshipTypeComponent } from './scholarship-typ/scholarship-type.component';



const ScholarshiptypeRoutes: Routes = [
            { path: 'manage/scholarship_type',
              component: ScholarshipTypeComponent
            },
            { path: 'manage/scholarship_type/:id',
              component: ScholarshipTypeComponent
            },

];

@NgModule({
    imports: [RouterModule.forChild(ScholarshiptypeRoutes)],
    exports: [RouterModule]
})

export class ScholarshipTypeRoutingModule {}
