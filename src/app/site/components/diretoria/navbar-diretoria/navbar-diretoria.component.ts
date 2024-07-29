import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DepartamentosComponent } from '../departamentos/departamentos.component';
import { DiretoresComponent } from '../diretores/diretores.component';
import { SecGeralComponent } from '../sec-geral/sec-geral.component';

@Component({
  selector: 'app-navbar-diretoria',
  standalone: true,
  imports: [
    CommonModule,
    DepartamentosComponent,
    DiretoresComponent,
    MatTabsModule,
    SecGeralComponent
  ],

  templateUrl: './navbar-diretoria.component.html',
  styleUrls: ['./navbar-diretoria.component.scss']
})
export class NavbarDiretoriaComponent { }
