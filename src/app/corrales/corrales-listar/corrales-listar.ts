import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corrales-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './corrales-listar.html',
  styleUrl: './corrales-listar.css'
})
export class CorralesListar {
corrales = [
    {id:1, capacidad:'3000', estado:'activo'}
  ];
}
