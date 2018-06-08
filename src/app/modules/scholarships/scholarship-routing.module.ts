import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScholarshipsComponent } from './scholarship/scholarships.component';



const ScholarshipRoutes: Routes = [
    {
        path: 'manage/scholarships',
        component: ScholarshipsComponent
    },
    {
        path: 'manage/scholarships/:id',
        component: ScholarshipsComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(ScholarshipRoutes)],
    exports: [RouterModule]
})

export class ScholarshipRoutingModule { }
