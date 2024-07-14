import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Associete } from '../../../interfaces/associete';
import { AssocietesService } from '../../../services/associetes.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard-member',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './dashboard-member.component.html',
  styleUrls: ['./dashboard-member.component.scss']
})
export class DashboardMemberComponent implements OnInit {

  loggedInAssociete: Associete | null = null;
  errorMessage: string = '';

  constructor(
    private associetesService: AssocietesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLoggedInAssociete();
  }

  loadLoggedInAssociete(): void {
    this.associetesService.getLoggedInAssociete().pipe(
      catchError((error: any): Observable<Associete | null> => {
        if (error instanceof Error) {
          this.errorMessage = error.message;
        } else {
          this.errorMessage = 'An unknown error occurred';
        }
        return of(null);
      })
    ).subscribe(
      (associete: Associete | null) => {
        this.loggedInAssociete = associete;
        if (this.loggedInAssociete) {
          this.loggedInAssociete.contractValidity = this.calculateContractValidity(this.loggedInAssociete.dataRegistro);
        }
      }
    );
  }

  calculateContractValidity(dataRegistro: string): string {
    const registrationDate = new Date(dataRegistro);
    const validityDate = new Date(registrationDate);
    validityDate.setFullYear(registrationDate.getFullYear() + 1);
    return validityDate.toLocaleDateString();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirecionar para a página de login após o logout
  }

  benefits = [
    { title: 'Desconto em Ingressos', description: 'Desconto exclusivo em ingressos para todos os jogos.', icon: 'fa-solid fa-ticket' },
    { title: 'Acesso ao Clube', description: 'Acesso livre ao clube para atividades recreativas.', icon: 'fa-solid fa-door-open' },
    { title: 'Participação em Eventos', description: 'Convites para eventos especiais e reuniões de associados.', icon: 'fa-solid fa-calendar-check' },
    { title: 'Brindes Exclusivos', description: 'Receba brindes exclusivos em datas comemorativas.', icon: 'fa-solid fa-gift' }
  ];
}
