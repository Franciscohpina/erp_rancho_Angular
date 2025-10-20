import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ganados-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './ganados-listar.html',
  styleUrl: './ganados-listar.css'
})
export class GanadosListar {
ganados = [
    {id:1, edad:'10 meses', sexo:'hembra', peso:'750',precio:'12000.00',origen:'indegsa', altura:'153',imagen:'vaca.jpg',estado: 'activo',raza_id: '1',categoria_id:'1',corral_id: '1',proveedor_id:'1'}
  ];
}
