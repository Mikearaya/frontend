import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OtherComponent } from './pages/other/other.component';
import { SortComponent } from './component/sort/sort.component';
import { DataComponent } from './pages/data/data.component';



const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full'},
    { path: 'data/:id', component: DataComponent, data : {title : 'List'}},
    { path: 'home', component: HomeComponent, data: {title : 'Home'}},
    { path: 'other', component: OtherComponent},
    { path: 'http', component: SortComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
