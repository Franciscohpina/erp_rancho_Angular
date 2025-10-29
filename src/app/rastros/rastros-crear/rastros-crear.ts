import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rastros } from '../../interfaces/rastros';
import { RastrosService } from '../../services/rastros-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rastros-crear',
  imports: [FormsModule],
  templateUrl: './rastros-crear.html',
  styleUrl: './rastros-crear.css'
})
export class RastrosCrear {

  rastros: Rastros ={
    id:0,
    fecha:'',
    destino:'',
    estado:'',
    ganado_id:0
  }

  constructor(private rastrosServicio: RastrosService,
                private route: Router
                ){}
  
    crearRastros(){
      console.log('crear rastro');
      this.rastrosServicio.guardarRastros(this.rastros).subscribe({
        next(value){
          console.log('guardar rastro'+value);
        },
        error(err){
          console.log('error al guardar rastro'+err);
        },
      });
      this.route.navigate(['/rastros']);
    }

}
