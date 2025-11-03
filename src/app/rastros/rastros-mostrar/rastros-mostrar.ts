import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RastrosService } from '../../services/rastros-service';
import { CommonModule } from '@angular/common'; // Importante para *ngIf
import { Rastros } from '../../interfaces/rastros';

@Component({
  selector: 'app-rastros-mostrar',
  imports: [RouterLink, CommonModule], // Añadido
  standalone: true, // Asumo que es standalone
  templateUrl: './rastros-mostrar.html',
  styleUrl: './rastros-mostrar.css'
})
export class RastrosMostrar implements OnInit {

  idDeRuta: number = 0;
  rastro: Rastros | null = null; // Variable para guardar el registro

  constructor(
    private route: ActivatedRoute,
    private rastrosServicio: RastrosService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.rastrosServicio.buscarRastro(this.idDeRuta).subscribe({
        next: (response: any) => {
          console.log('Datos recibidos:', response);
          this.rastro = response.data; // Asignamos response.data
        },
        error: (err) => console.error('Error al cargar registro:', err)
      });
    }
  }
}