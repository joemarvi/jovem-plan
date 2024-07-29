import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MessageService } from '../../core/services/message.service';

@Component({
  selector: 'app-manager-informations',
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
  templateUrl: './manager-informations.component.html',
  styleUrl: './manager-informations.component.scss'
})
export class ManagerInformationsComponent implements OnInit {

  partnerEditForm!: FormGroup;

  informationsPartner = {
    numberAssociete: '0023',
    currentPlan: 'Premium Match',
    firstName: 'Luciana',
    surname: 'Rodrigues Santos',
    cpf: '012.345.678-00',
    email: 'luciana.santos@example.com',
    phone: '61 98765 4321',
    address: 'Avenida Independência, Rua 23',
    complement: 'Apto nª 73',
    city: 'Planaltina-DF',
    state: 'Distrito Federal',
    cep: '12345-678',
    photoUrl: '../../../../assets/partners/profile-01.jpg'
  }

  estados: string[] = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
    'São Paulo', 'Sergipe', 'Tocantins'
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.partnerEditForm = this.fb.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      address: ['', Validators.required],
      complement: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^[0-9]{5}-[0-9]{3}$/)]]
    });
  }

  onSubmit(): void {
    if (this.partnerEditForm.valid) {
      this.messageService.saveMessage(this.partnerEditForm.value).subscribe(
        () => {
          this.partnerEditForm.reset();
          alert('Informações atualizadas com sucesso!');
        },
        (error) => {
          console.error('Erro ao editar informações:', error);
          alert('Erro ao editar informações. Tente novamente mais tarde.');
        }
      );
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  onCancel(): void {
    // localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
