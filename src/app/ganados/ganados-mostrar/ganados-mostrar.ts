import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GanadosService } from '../../services/ganados-service';
import { CommonModule } from '@angular/common'; // Importante para *ngIf
import { Ganados } from '../../interfaces/ganados';

@Component({
  selector: 'app-ganados-mostrar',
  imports: [RouterLink, CommonModule], // Añadido
  standalone: true, 
  templateUrl: './ganados-mostrar.html',
  styleUrl: './ganados-mostrar.css'
})
export class GanadosMostrar implements OnInit {

  idDeRuta: number = 0;
  ganado: Ganados | null = null; // Variable para guardar el animal

  constructor(
    private route: ActivatedRoute,
    private ganadosServicio: GanadosService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.ganadosServicio.buscarGanado(this.idDeRuta).subscribe({
        next: (response: any) => {
          console.log('Datos recibidos:', response);
          this.ganado = response.data; // Asignamos response.data
        },
        error: (err) => console.error('Error al cargar ganado:', err)
      });
    }
  }
}