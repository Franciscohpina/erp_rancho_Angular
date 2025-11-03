import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Razas } from '../../interfaces/razas';
import { RazasService } from '../../services/razas-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-razas-crear',
  imports: [FormsModule, RouterLink],
  templateUrl: './razas-crear.html',
  styleUrl: './razas-crear.css'
})
export class RazasCrear {
  razas: Razas ={
    id:0,
    nombre:'',
    origen:'',
    descripcion:'',
    estado:''
  }

  constructor(private razasServicio: RazasService,
                private route: Router
                ){}
  
    crearRazas(){
      console.log('crear raza');
      this.razasServicio.guardarRazas(this.razas).subscribe({
        next(value){
          console.log('guardar raza'+value);
        },
        error(err){
          console.log('error al guardar raza'+err);
        },
      });
      this.route.navigate(['/razas']);
    }
}
