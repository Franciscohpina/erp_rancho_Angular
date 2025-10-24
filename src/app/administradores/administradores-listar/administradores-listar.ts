import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Administradores } from '../../interfaces/administradores';
import { AdministradoresService } from '../../services/administradores-service';


@Component({
  selector: 'app-administradores-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './administradores-listar.html',
  styleUrl: './administradores-listar.css'
})
export class AdministradoresListar {
   administradores: Administradores[] = [];
  
    constructor(private administradoresServicio: AdministradoresService){} //le dice que debe estar desde que se cargue la pagina
  
    ngOnInit(): void{ //carga los datos al iniciar la pagina
              console.log("Registros devueltos");
      this.cargarAdministradores();
    }  
  
    cargarAdministradores(){
      this.administradoresServicio.obtenerAdministradores().subscribe(
        (registros: Administradores[])=>{
          console.log("Registros devueltos desde SQL" + registros);
          this.administradores=registros;
        });
    }
  

  // administradores = [
  //   {id:1, nombres:'Giorgio', apellidos:'armani', nss:'1234567890',correo:'armani@ranchotecate.com',telefono:'6659208576', rfc:'GIA234567',usuario:'armani1',contrasena: '123456',imagen: 'id.jpg',rol:'activo'}
  // ];
}
