import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Corrales } from '../../interfaces/corrales';
import { CorralesService } from '../../services/corrales-service';

@Component({
  selector: 'app-corrales-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './corrales-listar.html',
  styleUrl: './corrales-listar.css'
})
export class CorralesListar {
 corrales: Corrales[] = [];

  constructor(private corralesServicio: CorralesService){} //le dice que debe estar desde que se cargue la pagina

  ngOnInit(): void{ //carga los datos al iniciar la pagina
            console.log("Registros devueltos");
    this.cargarCorrales();
  }  

  cargarCorrales(){
    this.corralesServicio.obtenerCorrales().subscribe(
      (registros: Corrales[])=>{
        console.log("Registros devueltos desde SQL" + registros);
        this.corrales=registros;
      });
  }

// corrales = [
//     {id:1, capacidad:'3000', estado:'activo'}
//   ];
}
