import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { User } from '../models/user';
import { GetUsers } from '../services/get-users';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})

export class UserDetail implements OnInit {

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
  this.employeeForm=this.fb.group({
  firstName: ["", Validators.required],
  lastName: ["", Validators.required],
  email: ["", [Validators.required, Validators.email]],
  phone: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
  department: ["", Validators.required]
  });
}
  onSave() {
    if (this.employeeForm.valid) {
      console.log('Submitted')
    }
    else {
      this.employeeForm.markAllAsTouched();
    }
  }

  onReset() {
    this.employeeForm.reset();
  }
}