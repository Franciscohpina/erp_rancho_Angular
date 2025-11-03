import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClienteService } from '../../services/cliente-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-cliente-editar',
  imports: [RouterLink, CommonModule, FormsModule], // Añadido
  standalone: true,
  templateUrl: './cliente-editar.html',
  styleUrl: './cliente-editar.css'
})
export class ClienteEditar implements OnInit {

  idDeRuta: number = 0;
  cliente: Cliente = {
    id: 0,
    nombre: '',
    direccion: '',
    telefono: '',
    correo: '',
    rfc: '',
    estado: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteServicio: ClienteService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.clienteServicio.buscarCliente(this.idDeRuta).subscribe({
        next: (cliente: any) => {
          this.cliente = cliente.data; 
        },
        error: (err) => console.error('Error al cargar:', err)
      });
    }
  }

  actualizarCliente(): void {
    this.clienteServicio.actualizarCliente(this.idDeRuta, this.cliente).subscribe({
      next: () => {
        console.log('Cliente actualizado');
        this.router.navigate(['/cliente']); // Redirigimos a la lista
      },
      error: (err) => console.error('Error al actualizar:', err)
    });
  }
}