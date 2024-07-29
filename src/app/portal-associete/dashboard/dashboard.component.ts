import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { PlanDetailModalComponent } from '../../site/shared/plan-detail-modal/plan-detail-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    MatCardModule,
    MatDialogModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  individualPlanDescription = 'O Plano Individual oferece acesso completo às instalações e benefícios exclusivos para membros individuais. Aproveite aulas de ginástica, piscinas, quadras e muito mais.';
  familyPlanDescription = 'O Plano Família/Casal é perfeito para famílias que desejam aproveitar juntos. Inclui todos os benefícios do Plano Individual para até quatro membros da família.';
  premiumPlanDescription = 'O Plano Premium oferece benefícios exclusivos adicionais, como acesso a áreas VIP, eventos especiais e serviços personalizados. Ideal para quem busca o máximo em conforto e exclusividade.';

  constructor(private dialog: MatDialog) {}

  openPlanDetail(title: string, description: string) {
    this.dialog.open(PlanDetailModalComponent, {
      width: '500px',
      data: {
        title,
        description
      }
    });
  }
}
