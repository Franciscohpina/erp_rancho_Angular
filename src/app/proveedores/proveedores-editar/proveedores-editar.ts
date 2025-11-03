import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProveedoresService } from '../../services/proveedores-service';
import { CommonModule, DatePipe } from '@angular/common'; // Importa DatePipe
import { FormsModule } from '@angular/forms'; // Importante para [(ngModel)]
import { Proveedores } from '../../interfaces/proveedores';

@Component({
  selector: 'app-proveedores-editar',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './proveedores-editar.html',
  styleUrl: './proveedores-editar.css',
  standalone: true,
  providers: [DatePipe], // Añade DatePipe a los providers
})

export class ProveedoresEditar implements OnInit{

idDeRuta: number = 0;
  proveedor: Proveedores = {
    id:0, 
    nombre:'',
    direccion:'', 
    correo:'',
    telefono:'', 
    categoria:'',
    estado:''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proveedoresServicio: ProveedoresService,
    private datePipe: DatePipe // Inyecta DatePipe
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.proveedoresServicio.buscarProveedor(this.idDeRuta).subscribe({
        next: (response: any) => {
          this.proveedor = response.data; 
          // Formateamos la fecha para el input type="date"
          // if (this.proveedor.fecha) {
          //   this.proveedor.fecha = this.datePipe.transform(this.proveedor.fecha, 'yyyy-MM-dd')!;
          // }
        },
        error: (err) => console.error('Error al cargar:', err)
      });
    }
  }

  actualizarProveedor(): void {
    this.proveedoresServicio.actualizarProveedor(this.idDeRuta, this.proveedor).subscribe({
      next: () => {
        console.log('Registro actualizado');
        this.router.navigate(['/proveedores']); // Redirigimos a la lista
      },
      error: (err) => console.error('Error al actualizar:', err)
    });
  }
}
