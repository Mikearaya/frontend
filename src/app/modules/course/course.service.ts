import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IStudent } from '../student/student.service';



export interface ICourse {
  selected?: boolean;
  id?: number;
  name: string;
  fees_term: string;
  section: string;
  grade: string;

}


@Injectable()
export class CourseService {
  private url = 'http://localhost/smart_school/index.php/api/courses';
  private header = new HttpHeaders()
  .set('Content-Type', 'application/x-www-form-urlencoded');

    constructor(
      private httpClient: HttpClient
    ) {

     }


  getCourse(id: number = 0 ): Observable<any> {
    console.log('course service id' + id);
    if (id === 0) {
      return this.httpClient.get<ICourse[]>(`${this.url}`);
    } else {
     return this.httpClient.get<any>(`${this.url}/${id}`);
    }
  }

  addCourse(newCourse: ICourse) {
      const courseData = this.setDataModel(newCourse);
      const options = {'headers' : this.header};
    return this.httpClient.post<ICourse>(`${this.url}`, courseData.toString() , options );
  }

  updateCourse(updatedCourse: ICourse, id: number) {
      const courseData = this.setDataModel(updatedCourse);
      const options = {'headers' : this.header};
    return this.httpClient.post<ICourse>(`${this.url}/${id}`, courseData.toString(), options);
  }

  setDataModel(formModel: ICourse): URLSearchParams {

    const data = new URLSearchParams();
      data.set('name', formModel.name);
      data.set('section', formModel.section);
      data.set('grade', formModel.grade);
      data.set('fees_term', formModel.fees_term);
    return data;
  }

}
