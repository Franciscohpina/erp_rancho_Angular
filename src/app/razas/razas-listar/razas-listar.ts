import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Razas } from '../../interfaces/razas';
import { RazasService } from '../../services/razas-service';

@Component({
  selector: 'app-razas-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './razas-listar.html',
  styleUrl: './razas-listar.css'
})
export class RazasListar {
razas: Razas[] = [];

  constructor(private razasServicio: RazasService){} //le dice que debe estar desde que se cargue la pagina

  ngOnInit(): void{ //carga los datos al iniciar la pagina
            console.log("Registros devueltos");
    this.cargarRazas();
  }  

  cargarRazas(){
    this.razasServicio.obtenerRazas().subscribe(
      (registros: Razas[])=>{
        console.log("Registros devueltos desde SQL" + registros);
        this.razas=registros;
      });
  }


  // razas = [
  //   {id:1, nombre:'Wagyu', origen:'Australia', descripcion:'Raza productora de carne de alta calidad' ,estado:'activo'}
  // ];
}
