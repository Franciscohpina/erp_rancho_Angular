import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Administradores } from '../../interfaces/administradores';
import { AdministradoresService } from '../../services/administradores-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administradores-mostrar',
  imports: [RouterModule],
  templateUrl: './administradores-mostrar.html',
  styleUrl: './administradores-mostrar.css'
})
export class AdministradoresMostrar {

    idDeRuta: number | undefined;
    id!:number;
    nombres!:string;
    apellidos!:string;
    nss!:string;
    email!:string;
    telefono!:string;
    rfc!:string;
    username!:string;
    password!: string;
    imagen!: string;
    rol!:string;

    administradores: Administradores = {
        id: 0,
        nombres: '',
        apellidos: '',
        telefono: '',
        rfc: '',
        nss: '',
        email: '',
        username: '',
        password: '',
        imagen: '',
        rol: ''
      };

      constructor(
    private administradoresServicio: AdministradoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.administradoresServicio.buscarAdministradores(this.idDeRuta).subscribe({
        next: (admin: Administradores) => {
          console.log('Datos recibidos del backend:', admin);
          this.administradores = admin;
        },
        error: (err) => console.error('Error al cargar administrador:', err)
      });
    }
  }
}
