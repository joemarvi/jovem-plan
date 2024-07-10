import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Event {
  title: string;
  year: string;
  date: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent {

  events: Event[] = [
    { title: 'Disputa dos primeiros amistosos', year: '2017', date: '2017-2018', description: 'Descrição do evento 1', image: 'url_da_imagem_1.jpg'},
    { title: 'Disputa do 1º campeonato, terminando em 3º lugar', year: '2018', date: '2018-2019', description: 'Descrição do evento 2', image: 'url_da_imagem_2.jpg'},
    { title: 'Crescimento da torcida Jovem Plan', year: '2020', date: '2020-2021', description: 'Descrição do evento 3', image: 'url_da_imagem_3.jpg'},
    { title: '1º Título, campeonato Jardim Roriz', year: '2021 - 2022', date: '2021-2022', description: 'Descrição do evento 4', image: 'url_da_imagem_4.jpg'},
    { title: 'Estreia na 1º divisão de Planaltina-DF', year: '2022 - 2023', date: '2022-2023', description: 'Descrição do evento 5', image: 'url_da_imagem_5.jpg'},
    { title: '3º Lugar no campeonato da 1º Divisão de Planaltina', year: '2023', date: '2023', description: 'Descrição do evento 6', image: 'url_da_imagem_6.jpg'},
    { title: '2º Colocado no campeonato da 1º Divisão de Planaltina', year: '2024', date: '2024', description: 'Descrição do evento 7', image: 'url_da_imagem_7.jpg'}
  ];

  selectedEvent: Event | null = null;

  toggleAccordion(event: Event) {
    this.selectedEvent = this.selectedEvent === event ? null : event;
  }
}
