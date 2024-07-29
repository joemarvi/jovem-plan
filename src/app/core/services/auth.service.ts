import { Injectable } from '@angular/core';
import { Associete } from '../interfaces/associete';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(associete: Associete) {
    localStorage.setItem('currentAssociete', JSON.stringify(associete));
    localStorage.setItem('currentAssocieteId', associete.id?.toString() ?? '');
  }

  logout() {
    localStorage.removeItem('currentAssociete');
    localStorage.removeItem('currentAssocieteId');
  }

  getCurrentAssociete(): Associete | null {
    const currentAssociete = localStorage.getItem('currentAssociete');
    return currentAssociete ? JSON.parse(currentAssociete) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentAssociete();
  }
}
