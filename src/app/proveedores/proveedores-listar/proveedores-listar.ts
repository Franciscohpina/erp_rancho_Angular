import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proveedores-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './proveedores-listar.html',
  styleUrl: './proveedores-listar.css'
})
export class ProveedoresListar {
  proveedores = [
    {id:1, nombre:'MB', direccion:'Calle Falsa 123', correo:'mb@gmai.com', telefono:'5551234567', categoria:'Ganado', estado:'activo'}
  ]; 
}
