import { Component } from '@angular/core';
// 1. Importa los módulos necesarios para el routing
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-main',
  // 2. Marca el componente como standalone
  standalone: true,
  // 3. Añade los imports que este componente usa en su HTML
  imports: [
    RouterLink,   // Necesario para los [routerLink] del sidebar
    RouterOutlet,  // Necesario para el <router-outlet>
    RouterLinkActive
  ],
  // 4. Revisa que estos nombres coincidan con tus archivos
  templateUrl: './main.html',
  styleUrl: './main.css'
})
// 5. Asegúrate que el nombre de la clase sea MainComponent
export class MainComponent {
  constructor(private authService: AuthService) {}

  /**
   * 3. Crea el método logout() que será llamado por el botón
   */
  logout(): void {
    // Simplemente llama al método logout de tu servicio
    this.authService.logout();
  }
}