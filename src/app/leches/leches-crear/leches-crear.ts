import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Leches } from '../../interfaces/leches';
import { LechesService } from '../../services/leches-service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leches-crear',
  imports: [FormsModule, RouterLink],
  templateUrl: './leches-crear.html',
  styleUrl: './leches-crear.css'
})
export class LechesCrear {
  leches: Leches = {
    id:0,
    fecha:'',
    cantidad:0,
    densidad:0,
    tanque_id:0,
    ganado_id:0
  }

  constructor(private lechesServicio: LechesService,
                private route: Router
                ){}
  
    crearLeches(){
      console.log('crear cliente');
      this.lechesServicio.guardarLeches(this.leches).subscribe({
        next(value){
          console.log('guardar leches'+value);
        },
        error(err){
          console.log('error al guardar leches'+err);
        },
      });
      this.route.navigate(['/leches']);
    }
}
