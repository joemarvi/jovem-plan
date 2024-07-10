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
  template: `
    <mat-tab-group mat-stretch-tabs>
      <mat-tab>
        <ng-template mat-tab-label>
          <span class="tab-label">Diretores</span>
        </ng-template>
        <app-diretores></app-diretores>
      </mat-tab>
      <mat-tab>
        <ng-template mat-tab-label>
          <span class="tab-label">Departamentos</span>
        </ng-template>
        <app-departamentos></app-departamentos>
      </mat-tab>
      <mat-tab>
        <ng-template mat-tab-label>
          <span class="tab-label">Secretaria Geral</span>
        </ng-template>
        <app-sec-geral></app-sec-geral>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [`
    mat-tab-group {
      margin-top: 90px;
    }

    .tab-label {
      text-transform: uppercase;
      font-family: 'Fjalla One', sans-serif;
      color: #FE6B01;
    }

    .mat-tab-label {
      font-size: 14px; /* Opcional: ajuste o tamanho da fonte conforme necessário */
    }

    .mat-tab-label-active {
      color: #FE6B01 !important;
    }
    .mat-mdc-tab-group, .mat-mdc-tab-nav-bar {
    --mdc-tab-indicator-active-indicator-color: orange !important;
    --mat-tab-header-disabled-ripple-color: orange !important;
    --mat-tab-header-pagination-icon-color: orange !important;
    --mat-tab-header-active-ripple-color: orange !important;
    --mat-tab-header-inactive-ripple-color: orange !important;
    --mat-tab-header-inactive-focus-label-text-color: orange !important;
    --mat-tab-header-inactive-hover-label-text-color: orange !important;
    --mat-tab-header-active-focus-indicator-color: orange !important;
    --mat-tab-header-active-hover-indicator-color: #orange !important;
}
  `]
})
export class NavbarDiretoriaComponent { }
