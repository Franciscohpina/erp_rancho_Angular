import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cliente-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './cliente-listar.html',
  styleUrl: './cliente-listar.css'
})
export class ClienteListar {
cliente = [
    {id:1, nombre:'Alexander McQueen', direccion:'Meconetzin 7405, Tj', telefono:'1234567890',correo:'armani@ranchotecate.com',rfc:'6659208576', csf:'GIA234567',estado:'Activo'}
  ];
}
