import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proveedores } from '../../interfaces/proveedores';
import { ProveedoresService } from '../../services/proveedores-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores-crear',
  imports: [FormsModule],
  templateUrl: './proveedores-crear.html',
  styleUrl: './proveedores-crear.css'
})
export class ProveedoresCrear {

  proveedores: Proveedores = {
    id:0,
    nombre:'',
    direccion:'',
    correo:'',
    telefono:'',
    categoria:'',
    estado:''
  }

  constructor(private proveedoresServicio: ProveedoresService,
                private route: Router
                ){}
  
    crearCliente(){
      console.log('crear cliente');
      this.proveedoresServicio.guardarProveedores(this.proveedores).subscribe({
        next(value){
          console.log('guardar proveedores'+value);
        },
        error(err){
          console.log('error al guardar proveedores'+err);
        },
      });
      this.route.navigate(['/proveedores']);
    }
}
