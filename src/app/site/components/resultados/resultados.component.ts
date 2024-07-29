import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface Result {
  competition: string;
  date: string;
  homeTeam: string;
  homeLogo: string;
  awayTeam: string;
  awayLogo: string;
  score: string;
  location: string;
}

interface CompetitionResults {
  competition: string;
  results: Result[];
}

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class ResultadosComponent  {

  competitionResults: CompetitionResults[] = [
    {
      competition: '4º Copa Jardim Roriz',
      results: [
        { competition: '4º Copa Jardim Roriz 2024', date: '2024-07-01', homeTeam: 'Jovem Plan', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayTeam: 'Ipiranga', awayLogo: '../../../assets/jogos/time-01.jpg', score: '2-0', location: 'Arena Jardim Roriz' },
        { competition: '4º Copa Jardim Roriz 2024', date: '2024-07-14', homeTeam: 'Jovem Plan', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayTeam: 'Atlético', awayLogo: '../../../assets/jogos/time-03.jpg', score: '1-1', location: 'Arena Jardim Roriz' },
        { competition: '4º Copa Jardim Roriz 2024', date: '2024-07-23', homeTeam: 'Jovem Plan', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayTeam: 'Nacional', awayLogo: '../../../assets/jogos/time-04.jpg', score: '4-0', location: 'Arena Jardim Roriz' },
        { competition: '4º Copa Jardim Roriz 2024', date: '2024-07-19', homeTeam: 'Jovem Plan', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayTeam: 'AGR', awayLogo: '../../../assets/jogos/time-02.jpg', score: '3-1', location: 'Arena Jardim Roriz' },
        // Adicione os demais resultados com seus respectivos dados
      ]
    },
    {
      competition: '16º Campeonato Amador de Planaltina-DF',
      results: [
        { competition: '16º Campeonato Amador de Planaltina-DF', date: '2024-07-15', homeTeam: 'Jovem Plan', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayTeam: 'Vila Nova', awayLogo: '../../../assets/jogos/time-01.jpg', score: '2-0', location: 'Módulo Esportivo, campo 05' },
        { competition: '16º Campeonato Amador de Planaltina-DF', date: '2024-07-08', homeTeam: 'Jovem Plan', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayTeam: 'Palestra', awayLogo: '../../../assets/jogos/time-02.jpg', score: '5-0', location: 'Arena Nininho, Sintético Qd 06' },
        { competition: '16º Campeonato Amador de Planaltina-DF', date: '2024-07-19', homeTeam: 'Jovem Plan', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayTeam: 'Valência', awayLogo: '../../../assets/jogos/time-04.jpg', score: '2-1', location: 'Arena Nininho, Sintético Qd 06' },
        { competition: '16º Campeonato Amador de Planaltina-DF', date: '2024-07-02', homeTeam: 'Jovem Plan', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayTeam: 'São Paulo', awayLogo: '../../../assets/jogos/time-03.jpg', score: '4-2', location: 'Arena Nininho, Sintético Qd 06' },
        // Adicione os demais resultados com seus respectivos dados
      ]
    }
  ];

  selectedCompetition: CompetitionResults | undefined;

  constructor() {
    // Inicialmente, seleciona a primeira competição como padrão
    if (this.competitionResults.length > 0) {
      this.selectedCompetition = this.competitionResults[0];
    }
  }

  selectCompetition(competition: CompetitionResults) {
    this.selectedCompetition = competition;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const dayOfWeek = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(date);
    const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
    const year = date.getFullYear();
    return `${dayOfWeek}<br> ${month} ${year}`;
  }
  formatDateTime(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} às ${hours}:${minutes}`;
  }

  getDay(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', timeZone: 'UTC' };
    return date.toLocaleDateString('pt-BR', options);
  }
}
