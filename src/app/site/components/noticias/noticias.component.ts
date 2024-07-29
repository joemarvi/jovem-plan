import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    SlickCarouselModule,
    CommonModule,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {

  @ViewChild('sliderMain', { static: true }) sliderMain!: ElementRef;

  news = [
    { image: '../../../assets/noticias/copa-roriz/jogo-01.jpg', categoria: 'Últimas', title: 'Jovem Plan estreia com vitória na 3º Copa Jardim Roriz', subtitle: '', dataNews: '12/23/2024'},
    { image: '../../../assets/noticias/divulgacoes/jogo-04.jpg', categoria: 'Vendas disponíveis', title: 'Já estão disponíveis as novas camisas da Jovem Plan para 2024', subtitle: '', dataNews: '10/23/2024'},
    { image: '../../../assets/noticias/primeira-divisao/foto-1.jpg', categoria: 'Empate amargo', title: 'Em jogo disputado, Jovem Plan empata ...', subtitle: '', dataNews: '10/23/2024'},
    { image: '../../../assets/noticias/primeira-divisao/foto-2.jpg', categoria: 'Vem jogão por ai', title: 'Domingo é dia de clássio em Planaltina-DF ...', subtitle: '', dataNews: '10/23/2024'},
    { image: '../../../assets/destaques/dest-03.jpg', categoria: 'Faça parte', title: 'Seja um patrocinador Jovem Plan ...', subtitle: '', dataNews: '10/23/2024'},
    { image: '../../../assets/noticias/divulgacoes/jogo-06.jpg', categoria: 'Faça parte', title: 'Seja um patrocinador Jovem Plan ...', subtitle: '', dataNews: '10/23/2024'},
    { image: '../../../assets/noticias/divulgacoes/jogo-04.jpg', categoria: 'Faça parte', title: 'Seja um patrocinador Jovem Plan ...', subtitle: '', dataNews: '10/23/2024'},
    { image: '../../../assets/noticias/divulgacoes/jogo-03.jpg', categoria: 'Faça parte', title: 'Seja um patrocinador Jovem Plan ...', subtitle: '', dataNews: '10/23/2024'},

    // Adicione mais notícias conforme necessário
  ]

  scrollNext() {
    const slider = this.sliderMain.nativeElement;
    slider.scrollLeft += 450; // Ajuste o valor conforme necessário
  }

  scrollPrev() {
    const slider = this.sliderMain.nativeElement;
    slider.scrollLeft -= 450; // Ajuste o valor conforme necessário
  }

}
