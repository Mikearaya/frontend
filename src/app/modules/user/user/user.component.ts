import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../user/user.model';
import { Router, ActivatedRoute } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'Register';
  userForm: FormGroup;
  user: User;
  error: Array<any>;
  isUpdate: Boolean;
  id: number;
  id_no: string | number;
  hide = true;

  constructor(
    private userService: UserService,
   // private toastr: ToastrService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.generateForm();
  }

  generateForm(activeUser: any = '') {
    this.id_no = activeUser.id_no;
    console.log(activeUser);
    this.userForm = this.fb.group({
      First_Name: activeUser.First_Name ? [activeUser.First_Name, Validators.required] :
        ['', Validators.required],
      Last_Name: activeUser.First_Name ? [activeUser.First_Name, Validators.required] :
        ['', Validators.required],
      User_Name: activeUser.User_Name ? [activeUser.User_Name, Validators.required] :
        ['', Validators.required],
      Email: activeUser.Email ? [activeUser.Email, Validators.email] :
        ['', Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      Password: activeUser.Password ? [activeUser.Password, Validators.minLength(6)] :
        ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = +  this.activatedRoute.snapshot.paramMap.get('id');
    this.isUpdate = (this.id) ? true : false;
    this.userService.getData(this.id).subscribe((user: any) => this.generateForm(user));
  }

  prepareData(): any {
    const formModel = this.userForm.value;
    console.log('sign up');
    console.log(formModel);
    const userData = {
      id: this.id ? this.id : 0,
      First_Name: formModel.First_Name ? formModel.First_Name : '',
      Last_Name: formModel.Last_Name ? formModel.Last_Name : '',
      User_Name: formModel.User_Name ? formModel.User_Name : '',
      Email: formModel.Email ? formModel.Email : '',
      Password: formModel.Password ? formModel.Password : ''
    };
    return userData;
  }

  onSubmit() {
    this.user = this.prepareData();
    if (!this.isUpdate) {
      this.userService.postData(
        this.user
      ).subscribe((response: any) =>
        this.handelResponse(response));
    } else {
      this.userService.updateData(
        this.user,
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
