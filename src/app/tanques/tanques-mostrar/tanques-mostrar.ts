import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TanquesService } from '../../services/tanques-service';
import { CommonModule } from '@angular/common'; // Importante para *ngIf
import { Tanques } from '../../interfaces/tanques';

@Component({
  selector: 'app-tanques-mostrar',
  imports: [RouterLink, CommonModule],
  templateUrl: './tanques-mostrar.html',
  styleUrl: './tanques-mostrar.css'
})

export class TanquesMostrar implements OnInit {

  idDeRuta: number = 0;
  tanque: Tanques | null = null; // Variable para guardar el registro

  constructor(
    private route: ActivatedRoute,
    private tanquesServicio: TanquesService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.tanquesServicio.buscarTanque(this.idDeRuta).subscribe({
        next: (response: any) => {
          console.log('Datos recibidos:', response);
          this.tanque = response.data; // Asignamos response.data
        },
        error: (err) => console.error('Error al cargar registro:', err)
      });
    }
  }
}

