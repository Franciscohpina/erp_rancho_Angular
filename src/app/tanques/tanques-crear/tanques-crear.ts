import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tanques } from '../../interfaces/tanques';
import { TanquesService } from '../../services/tanques-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tanques-crear',
  imports: [FormsModule, RouterLink],
  templateUrl: './tanques-crear.html',
  styleUrl: './tanques-crear.css'
})
export class TanquesCrear {
  tanques: Tanques ={
    id:0,
    capacidad:'',
    temperatura:'',
    estado:'',
    leche_id:0
  }

  constructor(private tanquesServicio: TanquesService,
                private route: Router
                ){}
  
    crearTanques(){
      console.log('crear tanque');
      this.tanquesServicio.guardarTanques(this.tanques).subscribe({
        next(value){
          console.log('guardar tanque'+value);
        },
        error(err){
          console.log('error al guardar tanque'+err);
        },
      });
      this.route.navigate(['/tanques']);
    }
}
