import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './components/data/data.component';
import { LoginComponent } from './modules/session/login/login.component';
import { AuthGuard } from './modules/session/guards/auth.guard';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full'},
    { path: 'data/:id', component: TableComponent , data : {title : 'List'}},
    { path: 'home', component: HomeComponent, data: {title : 'Home'} },
    { path: 'login', component: LoginComponent}

];
// , canActivate: [AuthGuard]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
