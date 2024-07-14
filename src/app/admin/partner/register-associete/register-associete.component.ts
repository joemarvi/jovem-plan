import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Associete } from '../../../interfaces/associete';
import { AssocietesService } from '../../../services/associetes.service';

@Component({
  selector: 'app-register-associete',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './register-associete.component.html',
  styleUrls: ['./register-associete.component.scss']
})
export class RegisterAssocieteComponent implements OnInit {
  registerAssocieteForm: FormGroup;
  passwordForm: FormGroup;
  associeteId?: number;
  currentStep: number = 1;

  constructor(
    private fb: FormBuilder,
    private associetesService: AssocietesService,
    private router: Router,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar
  ) {
    this.registerAssocieteForm = this.fb.group({
      photo: ['', Validators.required],
      nomeCompleto: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', Validators.required],
      endereco: ['', Validators.required],
      numeroEndereco: ['', Validators.required],
      cidade: ['', Validators.required],
      planType: ['', Validators.required],
      dataRegistro: ['', Validators.required]
    });

    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    this.associeteId = this.route.snapshot.params['id'];
    if (this.associeteId) {
      this.associetesService.getAssocietes().subscribe(associetes => {
        const associete = associetes.find(e => e.id === this.associeteId);
        if (associete) {
          this.registerAssocieteForm.patchValue(associete);
        }
      });
    }
  }

  onSubmitStep1(): void {
    if (this.registerAssocieteForm.valid) {
      this.currentStep = 2;
    } else {
      this.matSnackBar.open('Preencha todos os campos corretamente.', 'Fechar', {
        duration: 3000
      });
    }
  }

  onSubmitStep2(): void {
    if (this.passwordForm.valid) {
      const password = this.passwordForm.get('password')?.value;
      const confirmPassword = this.passwordForm.get('confirmPassword')?.value;

      if (password === confirmPassword) {
        const formData: Associete = {
          ...this.registerAssocieteForm.value,
          password: password
        };

        this.associetesService.addAssociete(formData).subscribe(() => {
          this.matSnackBar.open('Cadastro realizado com sucesso!', 'Fechar', {
            duration: 3000
          });
          this.router.navigate(['/partner-dash']);
        });
      } else {
        this.matSnackBar.open('As senhas não coincidem.', 'Fechar', {
          duration: 3000
        });
      }
    } else {
      this.matSnackBar.open('Preencha todos os campos corretamente.', 'Fechar', {
        duration: 3000
      });
    }
  }
}
