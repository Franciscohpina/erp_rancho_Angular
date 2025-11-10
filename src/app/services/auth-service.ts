import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // La URL de tu backend de Express
  private API_URL = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private router: Router) { }

  // Llama al endpoint de login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials).pipe(
      tap((response: any) => {
        // Asumiendo que tu backend devuelve { token: '...' }
        this.saveToken(response.token);
      })
    );
  }

  // Guarda el token en localStorage
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Obtiene el token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Cierra sesión
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']); // Redirige a login
  }

  // Verifica si el token existe
  isLoggedIn(): boolean {
    return !!this.getToken(); // Devuelve true si el token existe
  }
}