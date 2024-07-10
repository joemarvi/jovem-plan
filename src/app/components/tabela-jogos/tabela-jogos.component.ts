import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Component, LOCALE_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NextMatchesComponent } from '../../shared/banners/next-matches/next-matches.component';

// Registrando a localidade pt-BR
registerLocaleData(localePt, 'pt-BR');

interface Match {
  competition: string;
  date: string;
  homeLogo: string;
  awayLogo: string;
  timeLocation: string;
  details: string;
}

interface Classification {
  position: number;
  team: string;
  j: number;
  v: number;
  e: number;
  d: number;
  gp: number;
  gc: number;
  sg: number;
  pt: number;
}

interface CompetitionData {
  titleHeader: string;
  numberRodada: string;
  competition: string;
  matches: Match[];
  classification: Classification[];
}

@Component({
  standalone: true,
  selector: 'app-tabela-jogos',
  templateUrl: './tabela-jogos.component.html',
  styleUrls: ['./tabela-jogos.component.scss'],
  imports: [
    NextMatchesComponent,
    CommonModule,
    MatCardModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class TabelaJogosComponent {

  competitions: CompetitionData[] = [
    {
      numberRodada: '2° Rodada',
      titleHeader: 'Próximos jogos',
      competition: '4º Copa Jardim Roriz',
      matches: [
        { competition: '4º Copa Jardim Roriz', date: '01/07/2024', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayLogo: '../../../assets/jogos/time-01.jpg', timeLocation: '20:10 - Arena Jardim Roriz', details: '2º Rodada' },
        { competition: '4º Copa Jardim Roriz', date: '06/07/2024', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayLogo: '../../../assets/jogos/time-04.jpg', timeLocation: '18:40 - Arena Jardim Roriz', details: '3º Rodada' },
        { competition: '4º Copa Jardim Roriz', date: '07/29/2024', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayLogo: '../../../assets/jogos/time-01.jpg', timeLocation: '21:30 - Arena Jardim Roriz', details: '5º Rodada' },
        { competition: '4º Copa Jardim Roriz', date: '12/08/2024', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayLogo: '../../../assets/jogos/time-04.jpg', timeLocation: '19:30 - Arena Jardim Roriz', details: '4º Rodada' },
        { competition: '4º Copa Jardim Roriz', date: '08/26/2024', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayLogo: '../../../assets/jogos/time-02.jpg', timeLocation: '17:30 - Arena Jardim Roriz', details: '7º Rodada' },
      ],
      classification: [
        { position: 1, team: 'Jovem Plan', j: 10, v: 8, e: 2, d: 0, gp: 25, gc: 10, sg: 15, pt: 26 },
        { position: 2, team: 'Adversário 1', j: 10, v: 7, e: 1, d: 2, gp: 22, gc: 10, sg: 12, pt: 22 },
        { position: 3, team: 'Adversário 2', j: 10, v: 6, e: 2, d: 2, gp: 20, gc: 12, sg: 8, pt: 20 },
        { position: 4, team: 'Adversário 3', j: 10, v: 5, e: 3, d: 2, gp: 18, gc: 14, sg: 4, pt: 18 },
        { position: 5, team: 'Adversário 4', j: 10, v: 5, e: 3, d: 2, gp: 17, gc: 15, sg: 2, pt: 18 },
        { position: 6, team: 'Adversário 5', j: 10, v: 5, e: 2, d: 3, gp: 16, gc: 16, sg: 0, pt: 17 },
        { position: 7, team: 'Adversário 6', j: 10, v: 4, e: 4, d: 2, gp: 15, gc: 13, sg: 2, pt: 16 },
        { position: 8, team: 'Adversário 7', j: 10, v: 4, e: 4, d: 2, gp: 14, gc: 14, sg: 0, pt: 16 },
        { position: 9, team: 'Adversário 8', j: 10, v: 3, e: 5, d: 2, gp: 13, gc: 12, sg: 1, pt: 14 },
        { position: 10, team: 'Adversário 9', j: 10, v: 3, e: 5, d: 2, gp: 12, gc: 13, sg: -1, pt: 14 },
        { position: 11, team: 'Adversário 10', j: 10, v: 3, e: 4, d: 3, gp: 11, gc: 14, sg: -3, pt: 13 },
        { position: 12, team: 'Adversário 11', j: 10, v: 2, e: 6, d: 2, gp: 10, gc: 11, sg: -1, pt: 12 },
      ],
    },
    {
      numberRodada: '° Rodada',
      titleHeader: 'Próximos jogos',
      competition: '16º Campeonato Amador de Planaltina-DF',
      matches: [
        { competition: '16º Campeonato Amador de Planaltina-DF', date: '08/07/2024', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayLogo: '../../../assets/jogos/time-02.jpg', timeLocation: '09:00 - Módulo Esportivo, campo 06', details: '4º Rodada' },
        { competition: '16º Campeonato Amador de Planaltina-DF', date: '10/23/2024', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayLogo: '../../../assets/jogos/time-03.jpg', timeLocation: '11:00 - Módulo Esportivo, campo 06', details: '5º Rodada' },
        { competition: '16º Campeonato Amador de Planaltina-DF', date: '05/08/2024', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayLogo: '../../../assets/jogos/time-02.jpg', timeLocation: '09:00 - Módulo Esportivo, campo 06', details: '6º Rodada' },
        { competition: '16º Campeonato Amador de Planaltina-DF', date: '08/19/2024', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayLogo: '../../../assets/jogos/time-01.jpg', timeLocation: '11:00 - Módulo Esportivo, campo 06', details: '6º Rodada' },
        { competition: '16º Campeonato Amador de Planaltina-DF', date: '02/09/2024', homeLogo: '../../../assets/logo/logo-jovemPlan-new.png', awayLogo: '../../../assets/jogos/time-03.jpg', timeLocation: '09:00 - Módulo Esportivo, campo 06', details: '5º Rodada' },
      ],
      classification: [
        { position: 1, team: 'Jovem Plan', j: 10, v: 8, e: 2, d: 0, gp: 25, gc: 10, sg: 15, pt: 26 },
        { position: 2, team: 'Adversário 1', j: 10, v: 7, e: 1, d: 2, gp: 22, gc: 10, sg: 12, pt: 22 },
        { position: 3, team: 'Adversário 2', j: 10, v: 6, e: 2, d: 2, gp: 20, gc: 12, sg: 8, pt: 20 },
        { position: 4, team: 'Adversário 3', j: 10, v: 5, e: 3, d: 2, gp: 18, gc: 14, sg: 4, pt: 18 },
        { position: 5, team: 'Adversário 4', j: 10, v: 5, e: 3, d: 2, gp: 17, gc: 15, sg: 2, pt: 18 },
        { position: 6, team: 'Adversário 5', j: 10, v: 5, e: 2, d: 3, gp: 16, gc: 16, sg: 0, pt: 17 },
        { position: 7, team: 'Adversário 6', j: 10, v: 4, e: 4, d: 2, gp: 15, gc: 13, sg: 2, pt: 16 },
        { position: 8, team: 'Adversário 7', j: 10, v: 4, e: 4, d: 2, gp: 14, gc: 14, sg: 0, pt: 16 },
        { position: 9, team: 'Adversário 8', j: 10, v: 3, e: 5, d: 2, gp: 13, gc: 12, sg: 1, pt: 14 },
        { position: 10, team: 'Adversário 9', j: 10, v: 3, e: 5, d: 2, gp: 12, gc: 13, sg: -1, pt: 14 },
        { position: 11, team: 'Adversário 10', j: 10, v: 3, e: 4, d: 3, gp: 11, gc: 14, sg: -3, pt: 13 },
        { position: 12, team: 'Adversário 11', j: 10, v: 2, e: 6, d: 2, gp: 10, gc: 11, sg: -1, pt: 12 },
        { position: 13, team: 'Adversário 12', j: 10, v: 2, e: 5, d: 3, gp: 9, gc: 12, sg: -3, pt: 11 },
        { position: 14, team: 'Adversário 13', j: 10, v: 2, e: 4, d: 4, gp: 8, gc: 13, sg: -5, pt: 10 },
        { position: 15, team: 'Adversário 14', j: 10, v: 1, e: 6, d: 3, gp: 7, gc: 12, sg: -5, pt: 9 },
        { position: 16, team: 'Adversário 15', j: 10, v: 1, e: 5, d: 4, gp: 6, gc: 13, sg: -7, pt: 8 },
        { position: 17, team: 'Adversário 16', j: 10, v: 1, e: 4, d: 5, gp: 5, gc: 14, sg: -9, pt: 7 },
        { position: 18, team: 'Adversário 17', j: 10, v: 0, e: 6, d: 4, gp: 4, gc: 15, sg: -11, pt: 6 },
      ],
    }
  ];

  currentMatchesIndex = [0, 0];

  nextMatch(competitionIndex: number) {
    if (this.currentMatchesIndex[competitionIndex] < this.competitions[competitionIndex].matches.length - 1) {
      this.currentMatchesIndex[competitionIndex]++;
    }
  }

  prevMatch(competitionIndex: number) {
    if (this.currentMatchesIndex[competitionIndex] > 0) {
      this.currentMatchesIndex[competitionIndex]--;
    }
  }
}
