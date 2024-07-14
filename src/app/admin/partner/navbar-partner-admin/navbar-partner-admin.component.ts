import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DepartamentosComponent } from '../../../components/diretoria/departamentos/departamentos.component';
import { DashboardMemberComponent } from '../dashboard-member/dashboard-member.component';
import { ManagerInformationsComponent } from '../manager-informations/manager-informations.component';
import { ManagerPlansComponent } from '../manager-plans/manager-plans.component';

@Component({
  selector: 'app-navbar-partner-admin',
  standalone: true,
  imports: [
    CommonModule,
    DepartamentosComponent,
    MatTabsModule,
    DashboardMemberComponent,
    ManagerInformationsComponent,
    ManagerPlansComponent
],
  templateUrl: './navbar-partner-admin.component.html',
  styleUrl: './navbar-partner-admin.component.scss'
})
export class NavbarPartnerAdminComponent {

}
