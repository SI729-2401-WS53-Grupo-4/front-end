import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  register(user: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((u: any) => u.username === user.username);

    if (userExists) {
      return false; // El usuario ya existe
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(credentials: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === credentials.username && u.password === credentials.password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }
}
