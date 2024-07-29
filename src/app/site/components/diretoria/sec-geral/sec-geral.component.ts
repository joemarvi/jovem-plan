import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sec-geral',
  standalone: true,
  imports: [CommonModule],
  template: `
        <div class="sec-geral">
      <h2>Secretaria Geral</h2>
      <p>Área responsável pelos assuntos administrativos da diretoria Jovem Plan.</p>
      <ul>
        <li>Antônio Souza - Secretário Geral</li>
        <li>Beatriz Lima - Subsecretária</li>
        <li>Cristina Oliveira - Assistente Administrativa</li>
        <li>Daniel Santos - Coordenador de Documentação</li>
        <li>Eduardo Pereira - Analista de Projetos</li>
      </ul>
    </div>
  `,
  styles: [`
    .sec-geral {
      padding: 16px;
      font-family: 'Roboto', sans-serif;
    }

    h2 {
      color: #FE6A01;
      font-size: 1.5em;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      margin-bottom: 20px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: 8px;
    }
  `]
})
export class SecGeralComponent {}
