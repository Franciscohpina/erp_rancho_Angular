import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TanquesService } from '../../services/tanques-service';
import { CommonModule, DatePipe } from '@angular/common'; // Importa DatePipe
import { FormsModule } from '@angular/forms'; // Importante para [(ngModel)]
import { Tanques } from '../../interfaces/tanques';


@Component({
  selector: 'app-tanques-editar',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './tanques-editar.html',
  styleUrl: './tanques-editar.css'
})
export class TanquesEditar {
idDeRuta: number = 0;
  tanque: Tanques = {
    id:0, 
    capacidad:'',
    temperatura:'', 
    estado:'', 
    leche_id:0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tanquesServicio: TanquesService,
    //private datePipe: DatePipe // Inyecta DatePipe
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.tanquesServicio.buscarTanque(this.idDeRuta).subscribe({
        next: (response: any) => {
          this.tanque = response.data; 
          // Formateamos la fecha para el input type="date"
          // if (this.tanque.fecha) {
          //   this.tanque.fecha = this.datePipe.transform(this.tanque.fecha, 'yyyy-MM-dd')!;
          // }
        },
        error: (err) => console.error('Error al cargar:', err)
      });
    }
  }

  actualizarTanque(): void {
    this.tanquesServicio.actualizarTanque(this.idDeRuta, this.tanque).subscribe({
      next: () => {
        console.log('Registro actualizado');
        this.router.navigate(['/tanques']); // Redirigimos a la lista
      },
      error: (err) => console.error('Error al actualizar:', err)
    });
  }
}

