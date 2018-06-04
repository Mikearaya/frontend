import { Component, OnInit } from '@angular/core';
import { SubjectService, ISubject } from '../subject.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})

export class SubjectFormComponent implements OnInit {
    subject: ISubject;
    subjectForm: FormGroup;
    id: number;
    isUpdate: boolean;
  SUBJECT_TYPE = ['Elective', 'Major', 'General'];
  constructor(
              private subjectService: SubjectService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute
            ) {
              this.generateForm();
            }

      ngOnInit() {
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id) {
          this.isUpdate = true;
          this.subjectService.getSubjects(this.id).subscribe((response: any) => this.generateForm(response.result));
        } else {
          this.isUpdate = false;
          
        }
      }

      private generateForm(currentSubject: any = '') {
        const subject = currentSubject;
        console.log(currentSubject);
        this.subjectForm = this.formBuilder.group({
          title : this.buildControl(subject.title, true),
          type : this.buildControl(subject.subject_type, true),
          creditHr : this.buildControl(subject.grade_weightage, true)
        });

      }

      private prepareData(): any {
        const formModel = this.subjectForm.value;
        const subjectData = {
          title: formModel.title ? formModel.title : '',
          type:  formModel.type ? formModel.type : '',
          creditHr: formModel.creditHr ? formModel.creditHr : ''

        };
        return subjectData;
      }

      private buildControl(value: any = '', required: boolean = false) {
        return (required) ? [value, Validators.required ] : value;
      }

      onSubmit() {
        console.log('submitted');
        this.subject = this.prepareData();
        if (this.isUpdate) {
          this.subjectService.updateSubject(this.subject, this.id)
          .subscribe((response: any) => this.handelResponse(response));
        } else {
          this.subjectService.addSubject(this.subject)
                        .subscribe((response: any) => this.handelResponse(response));
        }
      }

      private handelResponse(response: any) {
        if (response.success) {
          alert('success');
        } else {
          alert('failed');
        }
        console.log(response);
      }



}
