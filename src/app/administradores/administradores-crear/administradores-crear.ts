import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Administradores } from '../../interfaces/administradores';
import { AdministradoresService } from '../../services/administradores-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administradores-crear',
  imports: [FormsModule],
  templateUrl: './administradores-crear.html',
  styleUrl: './administradores-crear.css'
})
export class AdministradoresCrear {

  administradores: Administradores  = {
    id:0,
    nombres:'',
    apellidos:'',
    telefono:'',
    rfc:'',
    nss:'',
    email:'',
    username:'',
    password:'',
    imagen:'',
    rol:''
  }

  constructor(private administradoresServicio: AdministradoresService,
                private route: Router
                ){}
  
    crearAdministradores(){
      console.log('crear administrador');
      this.administradoresServicio.guardarAdministradores(this.administradores).subscribe({
        next(value){
          console.log('guardar administrador'+value);
        },
        error(err){
          console.log('error al guardar administrador'+err);
        },
      });
      this.route.navigate(['/administradores']);
    }

}
