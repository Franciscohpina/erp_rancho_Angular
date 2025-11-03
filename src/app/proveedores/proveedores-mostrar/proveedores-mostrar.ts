import { Component } from '@angular/core';
import { Proveedores } from '../../interfaces/proveedores';
import { ProveedoresService } from '../../services/proveedores-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importante para *ngIf

@Component({
  selector: 'app-proveedores-mostrar',
  imports: [RouterLink, CommonModule],
  templateUrl: './proveedores-mostrar.html',
  styleUrl: './proveedores-mostrar.css'
})
export class ProveedoresMostrar {
  idDeRuta: number = 0;
  proveedor: Proveedores | null = null; // Variable para guardar el registro

  constructor(
    private route: ActivatedRoute,
    private proveedoresServicio: ProveedoresService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.proveedoresServicio.buscarProveedor(this.idDeRuta).subscribe({
        next: (response: any) => {
          console.log('Datos recibidos:', response);
          this.proveedor = response.data; // Asignamos response.data
        },
        error: (err) => console.error('Error al cargar registro:', err)
      });
    }
  }
}
