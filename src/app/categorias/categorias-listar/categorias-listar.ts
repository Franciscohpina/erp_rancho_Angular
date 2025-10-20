import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './categorias-listar.html',
  styleUrl: './categorias-listar.css'
})
export class CategoriasListar {
categorias = [
    {id:1, nombre:'lechero', descripcion:'ganado lactando'}
  ];
}
