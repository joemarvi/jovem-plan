import { Component } from '@angular/core';
import { NewsComponent } from '../../shared/banners/news/news.component';
import { NextMatchesComponent } from '../../shared/banners/next-matches/next-matches.component';
import { DestaquesComponent } from '../../shared/destaques/destaques.component';
import { TeamComponent } from '../../shared/team/team.component';
import { MidiasSocialComponent } from '../midias-social/midias-social.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NewsComponent,
    NewsComponent,
    NextMatchesComponent,
    DestaquesComponent,
    TeamComponent,
    MidiasSocialComponent


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
