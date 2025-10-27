import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Rastros } from '../../interfaces/rastros';
import { RastrosService } from '../../services/rastros-service';

@Component({
  selector: 'app-rastros-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './rastros-listar.html',
  styleUrl: './rastros-listar.css'
})
export class RastrosListar {
rastros: Rastros[] = [];

  constructor(private rastrosServicio: RastrosService){} //le dice que debe estar desde que se cargue la pagina

  ngOnInit(): void{ //carga los datos al iniciar la pagina
            console.log("Registros devueltos");
    this.cargarRastros();
  }  

  cargarRastros(){
    this.rastrosServicio.obtenerRastros().subscribe(
      (registros: any)=>{
        console.log("Registros devueltos desde SQL" + registros);
        this.rastros=registros.data;
      });
  }

  // rastros = [
  //   {id:1, fecha:'2023-10-01', destino:'Mercado Central', estado:'completo', ganado_id: 1}
  // ];
}
