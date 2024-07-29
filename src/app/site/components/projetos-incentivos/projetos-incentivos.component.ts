import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projetos-incentivos',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './projetos-incentivos.component.html',
  styleUrl: './projetos-incentivos.component.scss'
})
export class ProjetosIncentivosComponent {

}
