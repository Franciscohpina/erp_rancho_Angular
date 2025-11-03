import { Component } from '@angular/core';
import { RazasService } from '../../services/razas-service';
import { CommonModule, DatePipe } from '@angular/common'; // Importa DatePipe
import { FormsModule } from '@angular/forms'; // Importante para [(ngModel)]
import { Razas } from '../../interfaces/razas';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-razas-editar',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './razas-editar.html',
  styleUrl: './razas-editar.css',
  standalone: true,
  providers: [DatePipe] // Añade DatePipe a los providers
})
export class RazasEditar {

  
  idDeRuta: number = 0;

    raza: Razas = {
    id:0, 
    nombre:'',
    origen:'',
    descripcion:'',
    estado:''
    };
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private razasServicio: RazasService,
      private datePipe: DatePipe // Inyecta DatePipe
    ) {}
  
    ngOnInit(): void {
      this.idDeRuta = this.route.snapshot.params['id'];
      if (this.idDeRuta) {
        this.razasServicio.buscarRaza(this.idDeRuta).subscribe({
          next: (response: any) => {
            this.raza = response.data; 
            // Formateamos la fecha para el input type="date"
            // if (this.raza.fecha) {
            //   this.raza.fecha = this.datePipe.transform(this.raza.fecha, 'yyyy-MM-dd')!;
            // }
          },
          error: (err) => console.error('Error al cargar:', err)
        });
      }
    }
  
    actualizarRaza(): void {
      this.razasServicio.actualizarRaza(this.idDeRuta, this.raza).subscribe({
        next: () => {
          console.log('Registro actualizado');
          this.router.navigate(['/razas']); // Redirigimos a la lista
        },
        error: (err) => console.error('Error al actualizar:', err)
      });
    }
  
}
