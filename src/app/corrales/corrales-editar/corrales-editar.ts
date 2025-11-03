import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CorralesService } from '../../services/corrales-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para [(ngModel)]
import { Corrales } from '../../interfaces/corrales';

@Component({
  selector: 'app-corrales-editar',
  imports: [RouterLink, CommonModule, FormsModule], // Añadido
  standalone: true,
  templateUrl: './corrales-editar.html',
  styleUrl: './corrales-editar.css'
})
export class CorralesEditar implements OnInit {

idDeRuta: number = 0;
  corral: Corrales = {
    id: 0,
    capacidad: 0, // Inicia como número
    estado: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private corralesServicio: CorralesService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.corralesServicio.buscarCorral(this.idDeRuta).subscribe({
        next: (response: any) => {
          this.corral = response.data; 
        },
        error: (err) => console.error('Error al cargar:', err)
      });
    }
  }

  actualizarCorral(): void {
    this.corralesServicio.actualizarCorral(this.idDeRuta, this.corral).subscribe({
      next: () => {
        console.log('Corral actualizado');
        this.router.navigate(['/corrales']); // Redirigimos a la lista
      },
      error: (err) => console.error('Error al actualizar:', err)
    });
  }
}