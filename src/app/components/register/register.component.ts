import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message: string = '';
  regForm?: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.nullValidator]],
      lastName: ['', [Validators.nullValidator]],
    });
  }

  register() {
    let user: User;
    if (this.regForm) {
      user = new User(
        this.regForm.value.email,
        this.regForm.value.password,
        this.regForm.value.firstName,
        this.regForm.value.lastName
      );
      this.userService.registration(user).subscribe(response => console.log(response));
      this.regForm.reset();
    }
  }

}
