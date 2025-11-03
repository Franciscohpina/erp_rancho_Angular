import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CorralesService } from '../../services/corrales-service';
import { CommonModule } from '@angular/common'; // Importante para *ngIf
import { Corrales } from '../../interfaces/corrales';

@Component({
  selector: 'app-corrales-mostrar',
  imports: [RouterLink, CommonModule], // Añadido
  standalone: true, // Asumo que es standalone como los demás
  templateUrl: './corrales-mostrar.html',
  styleUrl: './corrales-mostrar.css'
})
export class CorralesMostrar implements OnInit {

  idDeRuta: number = 0;
  corral: Corrales | null = null; // Variable para guardar el corral

  constructor(
    private route: ActivatedRoute,
    private corralesServicio: CorralesService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.corralesServicio.buscarCorral(this.idDeRuta).subscribe({
        next: (response: any) => {
          console.log('Datos recibidos:', response);
          this.corral = response.data; // Asignamos response.data
        },
        error: (err) => console.error('Error al cargar corral:', err)
      });
    }
  }
}