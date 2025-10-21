import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leches-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './leches-listar.html',
  styleUrl: './leches-listar.css'
})
export class LechesListar {
  leches = [
    {id:1, fecha:'2024-06-01', cantidad:50, densidad:1.03, tanque_id:1, ganado_id:1}
  ];
}
