import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isModalOpen = false;
  dropdownOpen: string | null = null;
  isTransparent = true;
  isScrolled = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkScroll();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIfLoginPage();
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
    // Fechar o dropdown ao rolar a página
    this.dropdownOpen = null;
  }

  checkScroll() {
    if (window.scrollY < 50) {
      this.isTransparent = true;
      this.isScrolled = false;
    } else {
      this.isTransparent = false;
      this.isScrolled = true;
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  navigateToForm() {
    this.closeModal();
    this.router.navigate(['/partner-dash']);
  }

  navigateToHome() {
    this.closeModal();
    this.router.navigate(['/']);
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  checkIfLoginPage() {
    if (this.isLoginPage()) {
      document.getElementById('mainNavbar')?.classList.add('login-page');
    } else {
      document.getElementById('mainNavbar')?.classList.remove('login-page');
    }
  }

  toggleDropdown(dropdownId: string) {
    if (this.dropdownOpen === dropdownId) {
      this.dropdownOpen = null;
    } else {
      this.dropdownOpen = dropdownId;
    }
  }

  closeDropdown() {
    this.dropdownOpen = null;
  }
}
