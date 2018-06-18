import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EventsComponent } from './event/events.component';



const EventRoutes: Routes = [
            { path: 'manage/events',
              component: EventsComponent
            },
            { path: 'manage/events/:id',
              component: EventsComponent
            },

];

@NgModule({
    imports: [RouterModule.forChild(EventRoutes)],
    exports: [RouterModule]
})

export class EventsRoutingModule {}
