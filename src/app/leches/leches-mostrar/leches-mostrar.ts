import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LechesService } from '../../services/leches-service';
import { CommonModule } from '@angular/common'; // Importante para *ngIf
import { Leches } from '../../interfaces/leches';

@Component({
  selector: 'app-leches-mostrar',
  imports: [RouterLink, CommonModule], // Añadido
  standalone: true, // Asumo que es standalone
  templateUrl: './leches-mostrar.html',
  styleUrl: './leches-mostrar.css'
})
export class LechesMostrar implements OnInit {

  idDeRuta: number = 0;
  leche: Leches | null = null; // Variable para guardar el registro

  constructor(
    private route: ActivatedRoute,
    private lechesServicio: LechesService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.lechesServicio.buscarLeche(this.idDeRuta).subscribe({
        next: (response: any) => {
          console.log('Datos recibidos:', response);
          this.leche = response.data; // Asignamos response.data
        },
        error: (err) => console.error('Error al cargar registro:', err)
      });
    }
  }
}