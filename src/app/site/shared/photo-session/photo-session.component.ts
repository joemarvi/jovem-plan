import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

interface Photo {
  url: string;
  title: string;
  date: string;
  competition: string;
}

@Component({
  selector: 'app-photo-session',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule],
  templateUrl: './photo-session.component.html',
  styleUrls: ['./photo-session.component.scss']
})
export class PhotoSessionComponent {
  photos: Photo[] = [
    { url: '../../../assets/geleria-torcedor/torcedor-01.jpg', title: 'Torcida da Jovem Plan após vitória', date: '2024-07-01', competition: '4º Copa Jardim Roriz' },
    { url: '../../../assets/geleria-torcedor/torcedor-02.jpg', title: 'Comemoração após vitória em clássico', date: '2024-07-02', competition: '4º Copa Jardim Roriz' },
    { url: '../../../assets/geleria-torcedor/torcedor-03.jpg', title: 'Atleta em jogo disputado', date: '2024-07-03', competition: '4º Copa Jardim Roriz' },
    { url: '../../../assets/geleria-torcedor/torcedor-04.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '4º Copa Jardim Roriz' },
    { url: '../../../assets/geleria-torcedor/torcedor-04.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '4º Copa Jardim Roriz' },
    { url: '../../../assets/geleria-torcedor/torcedor-04.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '4º Copa Jardim Roriz' },
    { url: '../../../assets/geleria-torcedor/torcedor-04.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '4º Copa Jardim Roriz' },
    { url: '../../../assets/geleria-torcedor/torcedor-04.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '4º Copa Jardim Roriz' },

    // Properties 16º Campeonato Amador
    { url: '../../../assets/geleria-torcedor/torcedor-01.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '16º Campeonato Amador' },
    { url: '../../../assets/geleria-torcedor/torcedor-02.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '16º Campeonato Amador' },
    { url: '../../../assets/geleria-torcedor/torcedor-03.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '16º Campeonato Amador' },
    { url: '../../../assets/geleria-torcedor/torcedor-04.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '16º Campeonato Amador' },
    { url: '../../../assets/geleria-torcedor/torcedor-01.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '16º Campeonato Amador' },
    { url: '../../../assets/geleria-torcedor/torcedor-02.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '16º Campeonato Amador' },
    { url: '../../../assets/geleria-torcedor/torcedor-03.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '16º Campeonato Amador' },
    { url: '../../../assets/geleria-torcedor/torcedor-04.jpg', title: 'Jovem Plan x Valência', date: '2024-07-04', competition: '16º Campeonato Amador' },
    // Adicione mais fotos conforme necessário
  ];

  displayedPhotos: Photo[] = [];
  competitions: string[] = ['4º Copa Jardim Roriz', '16º Campeonato Amador'];
  selectedCompetition: string = this.competitions[0];
  searchTerm: string = '';
  photosPerPage: number = 4;
  currentPage: number = 1;

  constructor() {
    this.filterPhotos();
  }

  filterPhotos() {
    const filteredPhotos = this.photos.filter(photo =>
      photo.competition === this.selectedCompetition &&
      photo.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    this.displayedPhotos = filteredPhotos.slice(0, this.photosPerPage * this.currentPage);
  }

  loadMorePhotos() {
    this.currentPage++;
    this.filterPhotos();
  }
}
