import { Component, OnInit } from '@angular/core';
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
    subjectArray: FormArray;
    id: number;
    isUpdate: boolean;
  SUBJECT_TYPE = ['Elective', 'Major', 'General'];
  constructor(
              private subjectService: SubjectService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute
            ) {
              this.subjectForm = this.formBuilder.group({
                subjectArray: this.formBuilder.array([])
              });
            }
            initSubject(subject: any = '') {
              // initialize our address
              return this.formBuilder.group({
                  title: [(subject) ? subject.title : '', Validators.required],
                  creditHr: [(subject) ? subject.title : '', Validators.required ],
                  type: [(subject) ? subject.type : '', Validators.required ]
              });
          }
      ngOnInit() {
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id) {
          this.isUpdate = true;
          this.subjectService.getSubjects(this.id).subscribe((response: any) => this.generateForm(response.result));
        } else {
          this.subjectForm = this.formBuilder.group({
            subjectArray: this.formBuilder.array([this.initSubject()])
          });

          this.isUpdate = false;
        }
      }
      addSubject() {
        const add = <FormArray>this.subjectForm.controls['subjectArray'];
        add.push(this.initSubject());
      }
      removeSubject(i: number) {
        // remove address from the list
        const control = <FormArray>this.subjectForm.controls.subjectArray;
        control.removeAt(i);
    }

    get subjects() { return (<FormArray>this.subjectForm.controls.subjectArray).controls; }

    private generateForm(currentSubject: any[] = []) {
        const subject = currentSubject;
        console.log(currentSubject.length);

        currentSubject.forEach((sub) => {
                (<FormArray>this.subjectForm.controls['subjectArray']).controls
                .push(this.initSubject(sub));
        });

    /*this.subjectForm = this.formBuilder.group({
          title : this.buildControl(subject.title, true),
          type : this.buildControl(subject.subject_type, true),
          creditHr : this.buildControl(subject.grade_weightage, true)
        });
*/
      }

      private prepareData(): any {
        const formModel = <FormArray>this.subjectForm.controls.subjectArray;
        const subjectData = [];
        formModel.controls.forEach((subject, i) => {
        subjectData [i] = {
          title: subject.value.title ? subject.value.title : '',
          type:  subject.value.type ? subject.value.type : '',
          creditHr: subject.value.creditHr ? subject.value.creditHr : ''

        };
      });
      console.log(subjectData);
        return subjectData;
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
