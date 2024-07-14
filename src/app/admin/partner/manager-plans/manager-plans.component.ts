import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { UpdateModalPlansComponent } from './update-modal-plans/update-modal-plans.component';

@Component({
  selector: 'app-manager-plans',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    MatCardModule,
    MatDialogModule
  ],
  templateUrl: './manager-plans.component.html',
  styleUrl: './manager-plans.component.scss'
})
export class ManagerPlansComponent {

  member = {
    name: 'Luciana Rodrigues Santos',
    planName: 'Premium Match',
    memberInitial: 'Janeiro, 2023',
    validity: '31/12/2024',
    memberNumber: '0023',
    photoUrl: '../../../../assets/partners/profile-01.jpg'  // Replace with the actual URL of the member's photo
  };

  individualPlanDescription = 'O Plano Individual oferece acesso completo às instalações e benefícios exclusivos para membros individuais. Aproveite aulas de ginástica, piscinas, quadras e muito mais.';
  familyPlanDescription = 'O Plano Família/Casal é perfeito para famílias que desejam aproveitar juntos. Inclui todos os benefícios do Plano Individual para até quatro membros da família.';
  premiumPlanDescription = 'O Plano Premium oferece benefícios exclusivos adicionais, como acesso a áreas VIP, eventos especiais e serviços personalizados. Ideal para quem busca o máximo em conforto e exclusividade.';

  constructor(private dialog: MatDialog) {}

  openPlanDetail(title: string, description: string) {
    this.dialog.open(UpdateModalPlansComponent, {
      width: '500px',
      data: {
        title,
        description
      }
    });
  }


}
