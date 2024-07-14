import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-partner-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterLink,
    MatButtonModule

  ],
  templateUrl: './partner-admin.component.html',
  styleUrl: './partner-admin.component.scss'
})
export class PartnerAdminComponent {

  constructor(
    private router: Router
  ) {}

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
