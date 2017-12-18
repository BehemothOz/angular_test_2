import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent {

  submitForm(form: NgForm) {
    console.log(`submited`, form);
    window.location.href = location.href + `/workflow`;
  }
}
