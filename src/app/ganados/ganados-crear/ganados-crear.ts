import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ganados } from '../../interfaces/ganados';
import { GanadosService } from '../../services/ganados-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ganados-crear',
  imports: [FormsModule],
  templateUrl: './ganados-crear.html',
  styleUrl: './ganados-crear.css'
})
export class GanadosCrear {
  
  ganados: Ganados ={
    id:0,
    edad:0,
    sexo:'',
    precio:0,
    peso:0,
    origen:'',
    altura:0,
    imagen:'',
    estado:'',
    raza_id:0,
    categoria_id:0,
    corral_id:0,
    proveedor_id:0
  }

  constructor(private ganadosServicio: GanadosService,
                private route: Router
                ){}
  
    crearGanados(){
      console.log('crear cliente');
      this.ganadosServicio.guardarGanados(this.ganados).subscribe({
        next(value){
          console.log('guardar ganados'+value);
        },
        error(err){
          console.log('error al guardar ganados'+err);
        },
      });
      this.route.navigate(['/ganados']);
    }
}
