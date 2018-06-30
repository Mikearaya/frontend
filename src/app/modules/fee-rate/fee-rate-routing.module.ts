import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeeRateComponent } from '../fee-rate/fee-rate/fee-rate.component';

const FeeRateRoutes: Routes = [
    {
        path: 'manage/feerate',
        component: FeeRateComponent
    },
    {
        path: 'manage/feerate/:id',
        component: FeeRateComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(FeeRateRoutes)],
    exports: [RouterModule]
})

export class FeeRateRoutingModule { }
