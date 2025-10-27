import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Proveedores } from '../../interfaces/proveedores';
import { ProveedoresService } from '../../services/proveedores-service';

@Component({
  selector: 'app-proveedores-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './proveedores-listar.html',
  styleUrl: './proveedores-listar.css'
})
export class ProveedoresListar {
 proveedores: Proveedores[] = [];

  constructor(private proveedoresServicio: ProveedoresService){} //le dice que debe estar desde que se cargue la pagina

  ngOnInit(): void{ //carga los datos al iniciar la pagina
            console.log("Registros devueltos");
    this.cargarProveedores();
  }  

  cargarProveedores(){
    this.proveedoresServicio.obtenerProveedores().subscribe(
      (registros: any)=>{
        console.log("Registros devueltos desde SQL" + registros);
        this.proveedores=registros.data;
      });
}

//   proveedores = [
//     {id:1, nombre:'MB', direccion:'Calle Falsa 123', correo:'mb@gmai.com', telefono:'5551234567', categoria:'Ganado', estado:'activo'}
//   ]; 
}
