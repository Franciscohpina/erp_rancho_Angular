import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa esto

@Component({
  selector: 'app-dashboard',
  standalone: true, // ¡Clave!
  imports: [
    CommonModule // Añadido para *ngIf, *ngFor, etc.
  ],
  templateUrl: './dashboard.html', // Corregido
  styleUrl: './dashboard.css'  // Corregido
})
export class DashboardComponent { // Corregido
  
  // Tu lógica irá aquí
  
}