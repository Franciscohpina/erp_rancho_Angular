import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente-service';

@Component({
  selector: 'app-cliente-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './cliente-listar.html',
  styleUrl: './cliente-listar.css'
})
export class ClienteListar { // agredar "implements OnInit" si manda error
  clientes: Cliente[] = [];

  constructor(private clienteServicio: ClienteService){} //le dice que debe estar desde que se cargue la pagina

  ngOnInit(): void{ //carga los datos al iniciar la pagina
            console.log("Registros devueltos");
    this.cargarClientes();
  }  

  cargarClientes(){
    this.clienteServicio.obtenerClientes().subscribe(
      (registros: any)=>{
        console.log("Registros devueltos desde SQL" + registros);
        this.clientes=registros.data;
      });
  }

  // cliente = [
//     {id:1, nombre:'Alexander McQueen', direccion:'Meconetzin 7405, Tj', telefono:'1234567890',correo:'armani@ranchotecate.com',rfc:'6659208576', csf:'GIA234567',estado:'Activo'}
//   ];
}
