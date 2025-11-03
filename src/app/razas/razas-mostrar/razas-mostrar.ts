import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RazasService } from '../../services/razas-service';
import { CommonModule } from '@angular/common'; // Importante para *ngIf
import { Razas } from '../../interfaces/razas';

@Component({
  selector: 'app-razas-mostrar',
  imports: [RouterLink, CommonModule],
  templateUrl: './razas-mostrar.html',
  styleUrl: './razas-mostrar.css'
})


export class RazasMostrar implements OnInit {

  idDeRuta: number = 0;
  raza: Razas | null = null; // Variable para guardar el registro

  constructor(
    private route: ActivatedRoute,
    private razasServicio: RazasService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.razasServicio.buscarRaza(this.idDeRuta).subscribe({
        next: (response: any) => {
          console.log('Datos recibidos:', response);
          this.raza = response.data; // Asignamos response.data
        },
        error: (err) => console.error('Error al cargar registro:', err)
      });
    }
  }
}