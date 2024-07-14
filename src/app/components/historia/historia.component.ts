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

  events = [
    {
      year: '2017',
      title: 'Fundação da Jovem Plan',
      date: 'Março de 2017',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
      image: '../../../assets/time-line-historia/time-line-03.jpg'
    },
    {
      year: '2018',
      title: 'Primeira participação em campeonatos',
      date: 'Junho de 2018',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
      image: '../../../assets/time-line-historia/time-line-02.jpg '
    },
    {
      year: '2019',
      title: 'Crescimento da base de torcedores',
      date: 'Novembro de 2019',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
      image: '../../../assets/geleria-torcedor/torcedor-01.jpg'
    },
    {
      year: '2020',
      title: 'Primeiro título importante',
      date: 'Julho de 2020',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
      image: '../../../assets/acervo-jp/momento-01.jpg'
    },
    {
      year: '2021',
      title: 'Expansão das atividades',
      date: 'Janeiro de 2021',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
      image: '../../../assets/geleria-torcedor/torcedor-02.jpg'
    },
    {
      year: '2022',
      title: 'Parcerias e colaborações',
      date: 'Maio de 2022',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
      image: '../../../assets/destaques/dest-01.jpg'
    },
    {
      year: '2023',
      title: '1º Título no futebol Amador',
      date: 'Setembro de 2023',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
      image: '../../../assets/titulos/titulo-01.jpg'
    }
  ];

  selectedEvent: any = null;

  toggleAccordion(event: any): void {
    if (this.selectedEvent === event) {
      this.selectedEvent = null;
    } else {
      this.selectedEvent = event;
    }
  }
}
