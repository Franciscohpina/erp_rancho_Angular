import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RastrosService } from '../../services/rastros-service';
import { CommonModule, DatePipe } from '@angular/common'; // Importa DatePipe
import { FormsModule } from '@angular/forms'; // Importante para [(ngModel)]
import { Rastros } from '../../interfaces/rastros';

@Component({
  selector: 'app-rastros-editar',
  imports: [RouterLink, CommonModule, FormsModule], // Añadido
  standalone: true,
  providers: [DatePipe], // Añade DatePipe a los providers
  templateUrl: './rastros-editar.html',
  styleUrl: './rastros-editar.css'
})
export class RastrosEditar implements OnInit {

idDeRuta: number = 0;
  rastro: Rastros = {
    id: 0,
    fecha: '', // Se cargará como string
    destino: '',
    estado: '',
    ganado_id: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rastrosServicio: RastrosService,
    private datePipe: DatePipe // Inyecta DatePipe
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.rastrosServicio.buscarRastro(this.idDeRuta).subscribe({
        next: (response: any) => {
          this.rastro = response.data; 
          // Formateamos la fecha para el input type="date"
          if (this.rastro.fecha) {
            this.rastro.fecha = this.datePipe.transform(this.rastro.fecha, 'yyyy-MM-dd')!;
          }
        },
        error: (err) => console.error('Error al cargar:', err)
      });
    }
  }

  actualizarRastro(): void {
    this.rastrosServicio.actualizarRastro(this.idDeRuta, this.rastro).subscribe({
      next: () => {
        console.log('Registro actualizado');
        this.router.navigate(['/rastros']); // Redirigimos a la lista
      },
      error: (err) => console.error('Error al actualizar:', err)
    });
  }
}