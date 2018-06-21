import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const UserRoutes: Routes = [
            { path: 'manage/users',
              component: UserComponent
            },
            { path: 'manage/users/:id',
              component: UserComponent
            },
];

@NgModule({
    imports: [RouterModule.forChild(UserRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}
