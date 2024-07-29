import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-news',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register-news.component.html',
  styleUrls: ['./register-news.component.scss']
})
export class RegisterNewsComponent implements OnInit {

  registerNewsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router

  ) {}

  ngOnInit(): void {
    this.registerNewsForm = this.fb.group({
      titleNews: [''],
      image: [null],
      content: [''],
      datePublished: [''],
      category: ['']
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.registerNewsForm.patchValue({
        image: file
      });
    }
  }

  onSubmit(): void {
    // handle form submission
  }

  onCancel(): void {
    this.registerNewsForm.reset();
    this.route.navigate(['/']);
  }
}
