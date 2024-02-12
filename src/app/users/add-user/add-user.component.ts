import { Component } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ICreateUser, IGetUsers } from '../../../services/models/user';
import { UserService } from '../../../services/users/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  user: ICreateUser | undefined;
  myForm: FormGroup;
  error: string | undefined;
  constructor(
    private router: Router,
    private FormBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.myForm = this.FormBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      website: [''],
      street: [''],
      suite: [''],
      city: [''],
      zipCode: [''],
      companyName: [''],
      catchPhrase: [''],
      companyBusiness: [''],
    });
  }

  get registerFormControl() {
    return this.myForm.controls;
  }

  submitForm(): void {
    if (this.myForm.valid) {
      const {
        name,
        catchPhrase,
        phone,
        city,
        email,
        street,
        suite,
        username,
        website,
        companyName,
        companyBusiness,
        zipCode,
      } = this.myForm.value;
      const id =
        Math.floor(Math.random() * 100) <= 10
          ? 11
          : Math.floor(Math.random() * 100);
      this.user = {
        id: id,
        name,
        username,
        phone,
        email,
        website,
        address: {
          street,
          suite,
          zipcode: zipCode,
          city,
        },
        company: {
          name: companyName,
          bs: companyBusiness,
          catchPhrase,
        },
      };

      this.userService.addUser(this.user);
      this.router.navigate(['/']);
    } else {
      this.error = 'Please fill in the details';
    }
  }

  clicked() {
    console.log('i was clicked by someone');
  }
}
