import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CourseService, ICourse } from '../course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  course: ICourse;
  private id: number;
  courseForm: FormGroup;
  private isUpdate: Boolean;
  SECTIONS = ['A', 'B', 'C', 'D', 'E', 'F'];
  GRADES = ['1', '2', '3', '4', '5'];

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
      this.generateForm();
  }

  ngOnInit() {
    this.id = + this.activatedRoute.snapshot.paramMap.get('id');
    console.log('course Id ' + this.id);
    this.isUpdate = (this.id) ? true : false;
      this.courseService.getCourse(this.id).subscribe((course: any) => this.generateForm(course.result));
  }

  generateForm(currentCourse: any = '') {
    console.log('current Course');
    console.log(currentCourse);
      this.id = currentCourse.id;
      this.courseForm = this.formBuilder.group({
        name: currentCourse.name ? [currentCourse.name , Validators.required ] : ['', Validators.required],
        section: currentCourse.section ? [currentCourse.section, Validators.required] : ['', Validators.required],
        grade: currentCourse.grade ? [currentCourse.grade, Validators.required ] : ['', Validators.required],
        fees_term: currentCourse.fees_term ? [currentCourse.fees_term, Validators.required ] : ['', Validators.required]
      });
  }

  prepareData(): ICourse {
    const formModel = this.courseForm.value;
    const courseData = {
      id : this.id,
      name: formModel.name,
      section: formModel.section,
      grade: formModel.grade,
      fees_term: formModel.fees_term
    };
    return courseData;
  }
  onSubmit() {
    this.course = this.prepareData();
  }


}



