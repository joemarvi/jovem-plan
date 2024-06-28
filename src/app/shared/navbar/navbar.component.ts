import { Component, HostListener, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
    this.checkScrollLogo();
  }

  checkScroll() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY < 50) {
      navbar?.classList.add('transparent');
    } else {
      navbar?.classList.remove('transparent');
    }
  }

  checkScrollLogo() {
    const navbar = document.getElementById('mainNavbar');
    const logo = document.getElementById('navbarLogo');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
      logo?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
      logo?.classList.remove('scrolled');
    }
  }
}
