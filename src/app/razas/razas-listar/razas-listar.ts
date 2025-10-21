import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-razas-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './razas-listar.html',
  styleUrl: './razas-listar.css'
})
export class RazasListar {
  razas = [
    {id:1, nombre:'Wagyu', origen:'Australia', descripcion:'Raza productora de carne de alta calidad' ,estado:'activo'}
  ];
}
