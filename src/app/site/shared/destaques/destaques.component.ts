import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GaleriaFotosComponent } from '../galeria-fotos/galeria-fotos.component';

@Component({
  selector: 'app-destaques',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    GaleriaFotosComponent
  ],
  templateUrl: './destaques.component.html',
  styleUrl: './destaques.component.scss'
})
export class DestaquesComponent {

}
