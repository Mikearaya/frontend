import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-student-guardian',
  templateUrl: './student-guardian.component.html',
  styleUrls: ['./student-guardian.component.css']
})
export class StudentGuardianComponent implements OnInit {
@Input() public form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
