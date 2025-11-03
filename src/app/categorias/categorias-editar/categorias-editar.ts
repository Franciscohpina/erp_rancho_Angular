import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoriasService } from '../../services/categorias-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Importante para [(ngModel)]
import { Categorias } from '../../interfaces/categorias';

@Component({
  selector: 'app-categorias-editar',
  imports: [RouterLink, CommonModule, FormsModule], // <-- Añadido
  standalone: true,
  templateUrl: './categorias-editar.html',
  styleUrl: './categorias-editar.css'
})
export class CategoriasEditar implements OnInit {

  idDeRuta: number = 0;
  // Inicializamos un objeto vacío para el ngModel
  categoria: Categorias = {
    id: 0,
    nombre: '',
    descripcion: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriasServicio: CategoriasService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      // 1. Buscamos la categoría
      this.categoriasServicio.buscarCategoria(this.idDeRuta).subscribe({
        next: (response: any) => {
          // 2. Rellenamos el objeto 'categoria'
          this.categoria = response.data; 
        },
        error: (err) => console.error('Error al cargar:', err)
      });
    }
  }

  // 3. Método para enviar el formulario
  actualizarCategoria(): void {
    this.categoriasServicio.actualizarCategoria(this.idDeRuta, this.categoria).subscribe({
      next: () => {
        console.log('Categoría actualizada');
         // Redirigimos a la lista
      },
      error: (err) => console.error('Error al actualizar:', err)
    });
    this.router.navigate(['/categorias']);
  }
}