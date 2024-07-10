import { Component } from '@angular/core';
import { NewsComponent } from '../../shared/banners/news/news.component';
import { NextMatchesComponent } from '../../shared/banners/next-matches/next-matches.component';
import { DestaquesComponent } from '../../shared/destaques/destaques.component';
import { GaleriaFotosComponent } from '../../shared/galeria-fotos/galeria-fotos.component';
import { SponsorsJpComponent } from '../../shared/sponsors-jp/sponsors-jp.component';
import { TeamComponent } from '../../shared/team/team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NewsComponent,
    NewsComponent,
    NextMatchesComponent,
    DestaquesComponent,
    TeamComponent,
    SponsorsJpComponent,
    GaleriaFotosComponent


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
