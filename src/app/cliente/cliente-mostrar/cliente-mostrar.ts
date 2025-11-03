import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Route } from '@angular/router';
import { ClienteService } from '../../services/cliente-service';
import { CommonModule } from '@angular/common'; // Importante para *ngIf
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-cliente-mostrar',
  imports: [RouterLink, CommonModule], // Añadido
  standalone: true, // Asumo que es standalone como los demás
  templateUrl: './cliente-mostrar.html',
  styleUrl: './cliente-mostrar.css'
})
export class ClienteMostrar implements OnInit {

  idDeRuta: number = 0;
  cliente: Cliente | null = null; // Variable para guardar el cliente

  constructor(
    private route: ActivatedRoute,
    private clienteServicio: ClienteService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.clienteServicio.buscarCliente(this.idDeRuta).subscribe({
        next: (cliente: any) => {
          console.log('Datos recibidos:', cliente);
          this.cliente = cliente.data; // Asignamos response.data
        },
        error: (err) => console.error('Error al cargar cliente:', err)
      });
    }
  }
}