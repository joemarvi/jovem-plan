import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

interface Photo {
  url: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-acervo-jp',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    CommonModule,

  ],
  templateUrl: './acervo-jp.component.html',
  styleUrl: './acervo-jp.component.scss'
})
export class AcervoJpComponent {

  photos: Photo[] = [
    { url: '../../../assets/acervo-jp/momento-01.jpg', title: 'Jovem Plan Campeã no Jardim Roriz, 2017', description: 'A Jovem Plan, como um time, brilhou no campeonato do Jardim Roriz com sua determinação e paixão pelo esporte. Cada jogador contribuiu com seu talento único, formando uma unidade coesa que inspirou e encantou a todos. Juntos, eles demonstraram o verdadeiro significado de trabalho em equipe e camaradagem, deixando um legado de sucesso e memórias inesquecíveis para toda a comunidade' },
    { url: '../../../assets/acervo-jp/momento-02.jpg', title: 'Foto 2', description: 'A Jovem Plan, como um time, brilhou no campeonato do Jardim Roriz com sua determinação e paixão pelo esporte. Cada jogador contribuiu com seu talento único, formando uma unidade coesa que inspirou e encantou a todos. Juntos, eles demonstraram o verdadeiro significado de trabalho em equipe e camaradagem, deixando um legado de sucesso e memórias inesquecíveis para toda a comunidade' },
    // adicione mais fotos conforme necessário
  ];

  momentos: string[] = [
    '1º Título no Jardim Roriz ',
    'Estreia na 1º Divisão de Planaltina-DF',
    'Confraternização Família Jovem Plan',
    // adicione mais momentos conforme necessário
  ];

}



