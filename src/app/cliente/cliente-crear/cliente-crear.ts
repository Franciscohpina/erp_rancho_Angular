import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-crear',
  imports: [FormsModule],
  templateUrl: './cliente-crear.html',
  styleUrl: './cliente-crear.css'
})
export class ClienteCrear {
  
  cliente: Cliente = {
    id:1,
    nombre:'',
    direccion:'',
    telefono:'',
    correo:'',
    rfc:'',
    csf:'',
    estado:'',
  }

  constructor(private clienteServicio: ClienteService,
              private route: Router
              ){}

  crearCliente(){
    console.log('crear cliente');
    this.clienteServicio.guardarCliente(this.cliente).subscribe({
      next(value){
        console.log('guardar cliente'+value);
      },
      error(err){
        console.log('error al guardar cliente'+err);
      },
    });
    this.route.navigate(['/cliente']);
  }

}

