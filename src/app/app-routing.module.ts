import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataComponent } from './pages/data/data.component';



const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full'},
    { path: 'data/:id', component: DataComponent, data : {title : 'List'}},
    { path: 'home', component: HomeComponent, data: {title : 'Home'}}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
