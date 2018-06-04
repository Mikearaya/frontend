import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class IGuardian {
  student_id: number;
  full_name: string;
  phone: string;
  house_no: string;
  relation: string;
  sub_city: string;
  city: string;
  wereda: string;
  gender: string;
  date_of_birth: string;

}

@Injectable()
export class GuardianService {
  private url = 'http://localhost/smart_school/index.php/api/guardian';
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  data: URLSearchParams;

    constructor(private httpClient: HttpClient) { }



    private setDataModel(formModel: any): URLSearchParams {
      const dataModel = new URLSearchParams();
      dataModel.set('student_code', formModel.studentId);
        dataModel.set('full_name', formModel.fullName);
        dataModel.set('gender', formModel.gender);
        // dataModel.set('birthdate', formModel.birthdate);
        dataModel.set('region', formModel.region );
        dataModel.set('wereda', formModel.wereda );
        dataModel.set('phone', formModel.phoneNumber );
        dataModel.set('city', formModel.city );
        dataModel.set('sub_city', formModel.subCity );
        dataModel.set('mobile', formModel.mobile );
        dataModel.set('house_no', formModel.houseNo );
        dataModel.set('relation', formModel.relation );
    return dataModel;

      }
      getGardian(id: number = 0): Observable<IGuardian[]> {
        if (id) {
          return this.httpClient.get<IGuardian[]>(`${this.url}/${id}`);
        } else {
          return this.httpClient.get<IGuardian[]>(`${this.url}`);
        }
      }
      addGuardian(newGuardian: IGuardian): Observable<IGuardian> {
        const options = { 'headers': this.header };
        this.data = this.setDataModel(newGuardian);
    return this.httpClient.post<IGuardian>(`${this.url}`, this.data.toString(), options);
    }

    updateGuardian(updatedGuardian: IGuardian, id: number): Observable<IGuardian> {
        this.data = this.setDataModel(updatedGuardian);
        const options = { 'headers': this.header };
    return this.httpClient.post<IGuardian>(`${this.url}/${id}`, this.data.toString(), options);
    }

}

