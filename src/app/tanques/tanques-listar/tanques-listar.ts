import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tanques-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './tanques-listar.html',
  styleUrl: './tanques-listar.css'
})
export class TanquesListar {
  tanques = [
    {id:1, capacidad:'5000L', temperatura:'5ºC', estado:'Lleno', leche_id:'1'}
  ];
}
