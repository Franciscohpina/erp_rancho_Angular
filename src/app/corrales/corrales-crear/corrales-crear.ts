import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Corrales } from '../../interfaces/corrales';
import { CorralesService } from '../../services/corrales-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corrales-crear',
  imports: [FormsModule],
  templateUrl: './corrales-crear.html',
  styleUrl: './corrales-crear.css'
})
export class CorralesCrear {

  corrales: Corrales = {
    id:0,
    capacidad:0,
    estado:''
  }

  constructor(private corralesServicio: CorralesService,
              private route: Router
              ){}

  crearCorrales(){
    console.log('crear corral');
    this.corralesServicio.guardarCorrales(this.corrales).subscribe({
      next(value){
        console.log('guardar corrales'+value);
      },
      error(err){
        console.log('error al guardar corrales'+err);
      },
    });
    this.route.navigate(['/corrales']);
  }

}
