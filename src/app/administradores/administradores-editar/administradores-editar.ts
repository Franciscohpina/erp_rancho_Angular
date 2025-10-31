import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Administradores } from '../../interfaces/administradores';
import { AdministradoresService } from '../../services/administradores-service';

@Component({
  selector: 'app-administradores-editar',
  imports: [FormsModule, RouterModule],
  templateUrl: './administradores-editar.html',
  styleUrls: ['./administradores-editar.css']
})
export class AdministradoresEditar implements OnInit {
  idDeRuta!: number;
  administrador: Administradores  = {
    id:0,
    nombres:'',
    apellidos:'',
    telefono:'',
    rfc:'',
    nss:'',
    email:'',
    username:'',
    password:'',
    imagen:'',
    rol:''
  }

  constructor(private administradoresServicio: AdministradoresService,
              private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id']; 
    console.log('ID de ruta:', this.idDeRuta);
    if (this.idDeRuta) {
      this.administradoresServicio.buscarAdministradores(this.idDeRuta).subscribe({
        next: (admin: Administradores) => {
          console.log('Administrador cargado:', admin);
          this.administrador = admin;
          console.log('Administradores después de la asignación:', this.administrador);
          alert('Administrador cargado correctamente' + JSON.stringify(this.administrador));
        },
        error: (err) => console.error('Error al cargar:', err)
      });
    }
  }
       
  
    actualizarAdministrador(){
      console.log('crear administrador');
      this.administradoresServicio.guardarAdministradores(this.administrador).subscribe({
        next(value){
          console.log('guardar administrador'+value);
        },
        error(err){
          console.log('error al guardar administrador'+err);
        },
      });
      this.router.navigate(['/administradores']);
    }

}
