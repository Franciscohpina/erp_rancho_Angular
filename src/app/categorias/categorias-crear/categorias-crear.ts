import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categorias } from '../../interfaces/categorias';
import { CategoriasService } from '../../services/categorias-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-crear',
  imports: [FormsModule],
  templateUrl: './categorias-crear.html',
  styleUrl: './categorias-crear.css'
})

export class CategoriasCrear {
  categorias: Categorias = {
    id:0,
    nombre:'',
    descripcion:''
  }

  constructor(private clienteServicio: CategoriasService,
                private route: Router
                ){}
  
    crearCategorias(){
      console.log('crear cliente');
      this.clienteServicio.guardarCategorias(this.categorias).subscribe({
        next(value){
          console.log('guardar categorias'+value);
        },
        error(err){
          console.log('error al guardar categorias'+err);
        },
      });
      this.route.navigate(['/categorias']);
    }

}
