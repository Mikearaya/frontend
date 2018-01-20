import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  answer = '';
  answerDisplay = '';
  showSpinner = false;

showAnswer() {
  this.showSpinner = true;

  setTimeout(() => {
    this.answerDisplay = this.answer;
    this.showSpinner = false;
  }, 2000);
}

  constructor() { }

  ngOnInit() {
  }

}
