import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {IEvent} from '../events.model';
import {EventsService} from '../events.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  title = 'Events';
  eventsForm: FormGroup;
  event: IEvent;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;
  id_no: string | number;
  constructor( private fb: FormBuilder,
               private activatedRoute: ActivatedRoute,
               private eventsService: EventsService, ) {
                 this.generateForm();
               }
  generateForm(activeEvent: any = '') {
         this.id_no = activeEvent.id_no;
           console.log(activeEvent);
             this.eventsForm = this.fb.group({
               Event_name: activeEvent.Event_name ? [activeEvent.Event_name, Validators.required] :
                                                              ['', Validators.required],
               Description: activeEvent.Description ? [activeEvent.Description, Validators.required] :
                                                          ['', Validators.required],
               Start_date: activeEvent.Start_date ? [activeEvent.Start_date, Validators.required] :
                                                          ['', Validators.required],
               End_date: activeEvent.End_date ? [activeEvent.End_date, Validators.required] :
                                                            ['', Validators.required],
               Start_time: activeEvent.Start_time ? [activeEvent.Start_time, Validators.required] :
                                                           ['', Validators.required],
               End_time: activeEvent.End_time ? [activeEvent.End_time, Validators.required] :
                                                           ['', Validators.required]
                 });
                }

 ngOnInit(): void {
    this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
    this.isUpdate = (this.id) ? true : false;
    this.eventsService.getData(this.id)
        .subscribe((event: any) => this.generateForm(event));
  }
prepareData(): any {

    const formModel = this.eventsForm.value;
      console.log('event form' );
      console.log(formModel);
      const eventsData = {
        id: this.id ? this.id : 0,
        Event_name: formModel.Event_name ? formModel.Event_name : '',
        Description: formModel.Description ? formModel.Description : '' ,
        Start_date: formModel.Start_date ? formModel.Start_date : '',
        End_date: formModel.End_date ? formModel.End_date : '',
        Start_time: formModel.Start_time ? formModel.Start_time : '',
        End_time: formModel.End_time ? formModel.End_time : ''
      };
      return eventsData;
    }

    onSubmit() {
      this.event = this.prepareData();
          if (!this.isUpdate) {
        this.eventsService.postData (
        this.event
      ).subscribe((response: any) =>
      this.handelResponse(response));
      } else {
        this.eventsService.updateData (
        this.event,
        this.id
      ).subscribe((response: any) =>
        this.handelResponse(response));
      }
    }

    handelResponse(response: any) {
      if (response.success) {
        console.log('submited');
      } else {
        this.error = response;
      }
    }

}
