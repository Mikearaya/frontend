import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FeeTypeComponent } from '../fee-type/fee-type/fee-type.component';



const FeeTypeRoutes: Routes = [
            { path: 'manage/feetype',
              component: FeeTypeComponent
            },
            { path: 'manage/feetype/:id',
              component: FeeTypeComponent
            },

];

@NgModule({
    imports: [RouterModule.forChild(FeeTypeRoutes)],
    exports: [RouterModule]
})

export class FeeTypeRoutingModule {}
