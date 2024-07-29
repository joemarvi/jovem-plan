import { Component } from '@angular/core';
import { GaleriaFotosComponent } from '../../shared/galeria-fotos/galeria-fotos.component';
import { PhotoSessionComponent } from '../../shared/photo-session/photo-session.component';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [
    GaleriaFotosComponent,
    PhotoSessionComponent
  ],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {

}
