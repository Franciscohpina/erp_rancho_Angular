import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Administradores } from '../../interfaces/administradores';
import { AdministradoresService } from '../../services/administradores-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administradores-mostrar',
  imports: [RouterModule, CommonModule],
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
    console.log('--- Componente MOSTRAR cargado ---');
    this.idDeRuta = this.route.snapshot.params['id'];

    console.log('El ID de la ruta es:', this.idDeRuta);
    console.log('Objeto de parámetros completo:', this.route.snapshot.params);

    if (this.idDeRuta) {
      console.log('Buscando administrador con ID:', this.idDeRuta);
      this.administradoresServicio.buscarAdministradores(this.idDeRuta).subscribe({
        next: (admin: any) => {
          console.log('Datos recibidos del backend:', admin);
          this.administradores = admin.data;
          console.log('Variable this.administradores ASIGNADA:', this.administradores);
        },
        error: (err) => { 
          console.error('¡¡¡¡¡¡¡¡ ERROR EN EL SUBSCRIBE DE MOSTRAR !!!!!!!!!!!');
          console.error('Error al cargar administrador:', err); // Este es el error real
        }
      });
    }
  }
}
