import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rastros-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './rastros-listar.html',
  styleUrl: './rastros-listar.css'
})
export class RastrosListar {
  rastros = [
    {id:1, fecha:'2023-10-01', destino:'Mercado Central', estado:'completo', ganado_id: 1}
  ];
}
