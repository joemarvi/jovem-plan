import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { Associete } from '../../interfaces/associete';
import { AssocietesService } from '../../services/associetes.service';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    RouterLink,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private associetesService: AssocietesService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.associetesService.getAssocietes().subscribe((associetes: Associete[]) => {
      const associete = associetes.find(u => u.email === email && u.password === password);
      if (associete) {
        this.authService.login(associete);
        this.router.navigate(['/partner-admin']);
      } else {
        this.errorMessage = 'Usuário ou senha incorretos';
      }
    });
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
