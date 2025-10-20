import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-administradores-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './administradores-listar.html',
  styleUrl: './administradores-listar.css'
})
export class AdministradoresListar {
  administradores = [
    {id:1, nombres:'Giorgio', apellidos:'armani', nss:'1234567890',correo:'armani@ranchotecate.com',telefono:'6659208576', rfc:'GIA234567',usuario:'armani1',contrasena: '123456',imagen: 'id.jpg',rol:'activo'}
  ];
}
