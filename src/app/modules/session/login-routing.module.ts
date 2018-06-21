import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const LoginRoutes: Routes = [
            { path: 'login',
              component: LoginComponent
            },
            { path : '', redirectTo: '/login', pathMatch : 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(LoginRoutes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}
