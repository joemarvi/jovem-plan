import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-diretores',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './diretores.component.html',
  styleUrl: './diretores.components.scss'
})
export class DiretoresComponent { }
