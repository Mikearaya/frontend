import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SubjectService, ISubject } from '../subject.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
    subjects: FormArray;
    isUpdate: boolean;
  SUBJECT_TYPE = ['Elective', 'Major', 'General'];
  constructor(
              private subjectService: SubjectService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute
            ) {
              this.subjectForm = this.formBuilder.group({
                subjects : this.formBuilder.array([this.createSubject()])
              });
            }
          createSubject(): FormGroup {
            return this.formBuilder.group(
              { title: this.buildControl('', true),
                type : this.buildControl('', true),
                creditHr : this.buildControl('', true)
              }
            );
          }

      addSubject(): void {
        this.subjects = this.subjectForm.get('subjects') as FormArray;
        this.subjects.push(this.createSubject());
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

      private generateForm(currentSubject: ISubject[] ) {
        (<FormArray>this.subjectForm.controls['subjects']).removeAt(0);
        currentSubject.map(sub => (<FormArray>this.subjectForm.controls['subjects']).push(
          this.formBuilder.group({
            title : [sub.title , Validators.required],
          type: [sub.subject_type, Validators.required ],
          creditHr: [sub.grade_weightage, Validators.required]
        })
      ));
    }



      private prepareData(): any {
        const formModel = this.subjectForm.value;
        const dataModel: ISubject = formModel.subjects.map((subject: ISubject) =>
      Object.assign({}, subject));
        console.log(dataModel);
      return dataModel;
      }

      private buildControl(value: any = '', required: boolean = false) {
        return (required) ? [value, Validators.required ] : value;
      }

      onSubmit() {
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
