import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return !!currentUser && !!currentUser.profilePerfil;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser && currentUser.profilePerfil) {
      const userProfile = currentUser.profilePerfil;
      const allowedRoutes = this.getAllowedRoutes(userProfile);

      const routePath = next.routeConfig?.path || '';

      if (allowedRoutes.includes(routePath)) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }

  private getAllowedRoutes(profile: string): string[] {
    const adminRoutes = [
      'partner-admin',
      'partner-dash',

      'register-news',
      'list-news',
      'edit-news/:id'
    ];
    const userRoutes = [
      'diretoria',
      'historia',
      'debts',
      'titulos',
      'projetos',
      'jogos',
      'noticias',
      'resultados',
      'midias',
      'contatos',
    ];

    if (profile === 'administrator') {
      return adminRoutes;
    } else if (profile === 'user') {
      return userRoutes;
    } else {
      return [];
    }
  }
}
