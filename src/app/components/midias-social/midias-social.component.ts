import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-midias-social',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './midias-social.component.html',
  styleUrls: ['./midias-social.component.scss']
})
export class MidiasSocialComponent {

}
