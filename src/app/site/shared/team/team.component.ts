import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  @ViewChild('sliderMain', { static: true }) sliderMain!: ElementRef;

  players = [
    { number: 1, name: 'Luiz Augusto Santana', position: 'Goleiro', image: '../../../assets/team/goleiros/goleiro-01.jpg' },
    { number: 12, name: 'Carlos Eduardo', position: 'Goleiro', image: '../../../assets/team/goleiros/goleiro-01.jpg' },
    { number: 14, name: 'Leonardo Fernandes Cunha', position: 'Zagueiro', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 18, name: 'William Macedo Coimbra', position: 'Zagueiro', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 3, name: 'Rodrigo Pereira Gomes', position: 'Zagueiro', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 4, name: 'João Paulo Souza', position: 'Lateral Esquerdo', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 6, name: 'Renato Silva Santos', position: 'Lateral Direito', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 32, name: 'Diogo Carlos', position: 'Volante', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 10, name: 'André Santana Melo', position: 'Volante', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 23, name: 'Alessandro Magno Ferreira', position: 'Meio Campo', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 17, name: 'Rogério Alencar', position: 'Meio Campo', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 9, name: 'Luciano Bruno', position: 'Atacante', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 17, name: 'Wallace Breno Campos', position: 'Atacante', image: '../../../assets/team/meio-campo/meio-campo-01.jpg' },
    { number: 0, name: 'Jorge Franco Antunes', position: 'Treinador', image: '../../../assets/team/comissao/treinador-01.jpg' },
    { number: 0, name: 'Antônio Carlos Farias', position: 'Auxiliar Técnico', image: '../../../assets/team/comissao/treinador-02.jpg' },
    // Adicione os outros jogadores aqui
  ];

  scrollNext() {
    const slider = this.sliderMain.nativeElement;
    slider.scrollLeft += 450; // Ajuste o valor conforme necessário
  }

  scrollPrev() {
    const slider = this.sliderMain.nativeElement;
    slider.scrollLeft -= 450; // Ajuste o valor conforme necessário
  }

}
