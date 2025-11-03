import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { CategoriasService } from '../../services/categorias-service';
import { CommonModule } from '@angular/common'; // <-- Importante para *ngIf
import { Categorias } from '../../interfaces/categorias';

@Component({
  selector: 'app-categorias-mostrar',
  imports: [RouterLink, CommonModule], // <-- Añadido
  standalone: true, // <-- Asegúrate que sea standalone si no usas módulos
  templateUrl: './categorias-mostrar.html',
  styleUrl: './categorias-mostrar.css'
})
export class CategoriasMostrar implements OnInit {

  idDeRuta: number = 0;
  categoria: Categorias | null = null; // <-- Variable para guardar la categoría

  constructor(
    private route: ActivatedRoute,
    private categoriasServicio: CategoriasService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.categoriasServicio.buscarCategoria(this.idDeRuta).subscribe({
        next: (categorias: any) => {
          console.log('Datos recibidos:', categorias);
          this.categoria = categorias.data; // <-- Asignamos response.data
        },
        error: (err) => console.error('Error al cargar categoría:', err)
      });
    }
  }
}