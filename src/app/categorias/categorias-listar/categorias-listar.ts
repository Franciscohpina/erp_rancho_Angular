import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Categorias } from '../../interfaces/categorias';
import { CategoriasService } from '../../services/categorias-service';


@Component({
  selector: 'app-categorias-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './categorias-listar.html',
  styleUrl: './categorias-listar.css'
})
export class CategoriasListar {
   categorias: Categorias[] = [];
  
    constructor(private categoriasServicio: CategoriasService){} //le dice que debe estar desde que se cargue la pagina
  
    ngOnInit(): void{ //carga los datos al iniciar la pagina
              console.log("Registros devueltos");
      this.cargarCategorias();
    }  
  
    cargarCategorias(){
      this.categoriasServicio.obtenerCategorias().subscribe(
        (registros: Categorias[])=>{
          console.log("Registros devueltos desde SQL" + registros);
          this.categorias=registros;
        });
    }
// categorias = [
//     {id:1, nombre:'lechero', descripcion:'ganado lactando'}
//   ];
}
