import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LechesService } from '../../services/leches-service';
import { CommonModule, DatePipe } from '@angular/common'; // Importa DatePipe
import { FormsModule } from '@angular/forms'; // Importante para [(ngModel)]
import { Leches } from '../../interfaces/leches';

@Component({
  selector: 'app-leches-editar',
  imports: [RouterLink, CommonModule, FormsModule], // Añadido
  standalone: true,
  providers: [DatePipe], // Añade DatePipe a los providers
  templateUrl: './leches-editar.html',
  styleUrl: './leches-editar.css'
})
export class LechesEditar implements OnInit {

idDeRuta: number = 0;
  leche: Leches = {
    id: 0,
    fecha: '', // Se cargará como string
    cantidad: 0,
    densidad: 0,
    tanque_id: 0,
    ganado_id: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lechesServicio: LechesService,
    private datePipe: DatePipe // Inyecta DatePipe
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.lechesServicio.buscarLeche(this.idDeRuta).subscribe({
        next: (response: any) => {
          this.leche = response.data; 
          // Formateamos la fecha para el input type="date"
          if (this.leche.fecha) {
            this.leche.fecha = this.datePipe.transform(this.leche.fecha, 'yyyy-MM-dd')!;
          }
        },
        error: (err) => console.error('Error al cargar:', err)
      });
    }
  }

  actualizarLeche(): void {
    this.lechesServicio.actualizarLeche(this.idDeRuta, this.leche).subscribe({
      next: () => {
        console.log('Registro actualizado');
        this.router.navigate(['/leches']); // Redirigimos a la lista
      },
      error: (err) => console.error('Error al actualizar:', err)
    });
  }
}