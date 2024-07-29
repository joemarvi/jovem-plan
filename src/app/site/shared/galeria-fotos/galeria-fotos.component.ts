import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-galeria-fotos',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './galeria-fotos.component.html',
  styleUrl: './galeria-fotos.component.scss'
})
export class GaleriaFotosComponent {

  photos = [
    { src: '../../../assets/geleria-torcedor/torcedor-01.jpg', alt: 'Photo 1' },
    { src: '../../../assets/geleria-torcedor/torcedor-02.jpg', alt: 'Photo 2' },
    { src: '../../../assets/geleria-torcedor/torcedor-03.jpg', alt: 'Photo 3' },
    // { src: '../../../assets/geleria-torcedor/torcedor-01.jpg', alt: 'Photo 4' },
    // { src: '../../../assets/geleria-torcedor/torcedor-01.jpg', alt: 'Photo 5' },
    // { src: '../../../assets/geleria-torcedor/torcedor-01.jpg', alt: 'Photo 6' },
    // { src: '../../../assets/geleria-torcedor/torcedor-01.jpg', alt: 'Photo 7' },
    // { src: '../../../assets/geleria-torcedor/torcedor-01.jpg', alt: 'Photo 8' },
  ];

  photoRows: any[] = [];

  constructor() {
    this.arrangePhotos();
  }

  arrangePhotos() {
    this.photoRows = [];
    for (let i = 0; i < this.photos.length; i += 3) {
      this.photoRows.push(this.photos.slice(i, i + 3));
    }
  }

  showMore() {
    // Adicione a lógica para carregar mais fotos
  }

}
