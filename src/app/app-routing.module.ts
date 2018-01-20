import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GridsComponent } from './pages/grids/grids.component';
import { OtherComponent } from './pages/other/other.component';
import { SortComponent } from './component/sort/sort.component';
import { DataComponent } from './pages/data/data.component';


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'data/:id', component: DataComponent},
    { path: 'home', component: HomeComponent},
    { path: 'other', component: OtherComponent},
    { path: 'http', component: SortComponent},
    { path: 'grid', component: GridsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
