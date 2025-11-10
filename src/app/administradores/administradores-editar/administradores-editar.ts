import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necesario
import { ActivatedRoute, Router, RouterLink } from '@angular/router'; // Necesario
import { Administradores } from '../../interfaces/administradores';
import { AdministradoresService } from '../../services/administradores-service';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf

@Component({
  selector: 'app-administradores-editar',
  imports: [FormsModule, RouterLink, CommonModule], // Asegúrate de tener estos
  standalone: true, // Asumo que es standalone
  templateUrl: './administradores-editar.html',
  styleUrls: ['./administradores-editar.css']
})
export class AdministradoresEditar implements OnInit {
  idDeRuta: number = 0;
  administrador: Administradores  = {
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
  };

  // Variable para la nueva imagen
  archivoImagen: File | null = null;
  // Variable para la URL de la imagen actual
  imagenActualUrl: string | null = null;

  constructor(private administradoresServicio: AdministradoresService,
              private router: Router, 
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id']; 
    if (this.idDeRuta) {
      this.administradoresServicio.buscarAdministradores(this.idDeRuta).subscribe({
        next: (response: any) => { // Cambiado a 'response: any'
          this.administrador = response.data; // Asignamos 'response.data'
          // Guardamos la URL de la imagen actual
          if (this.administrador.imagen) {
            this.imagenActualUrl = 'http://localhost:3000/' + this.administrador.imagen;
          }
        },
        error: (err) => console.error('Error al cargar:', err)
      });
    }
  }

  // Método para capturar el archivo
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.archivoImagen = file;
      // Mostrar vista previa de la nueva imagen
      this.imagenActualUrl = URL.createObjectURL(file);
    }
  }
  
  // Método para actualizar (ahora usa FormData)
  actualizarAdministrador(){
    const formData = new FormData();
    // Adjuntamos todos los campos de texto
    formData.append('nombres', this.administrador.nombres);
    formData.append('apellidos', this.administrador.apellidos);
    formData.append('telefono', this.administrador.telefono);
    formData.append('rfc', this.administrador.rfc);
    formData.append('nss', this.administrador.nss);
    formData.append('email', this.administrador.email);
    formData.append('username', this.administrador.username);
    formData.append('rol', this.administrador.rol);

    // Si el usuario escribió una nueva contraseña, la añadimos
    if (this.administrador.password) {
      formData.append('password', this.administrador.password);
    }

    // Si el usuario seleccionó una NUEVA imagen, la añadimos
    if (this.archivoImagen) {
      formData.append('imagen', this.archivoImagen, this.archivoImagen.name);
    }

    this.administradoresServicio.actualizarAdministradores(this.idDeRuta, formData).subscribe({
      next: (value) => {
        console.log('administrador actualizado'+value);
        this.router.navigate(['/administradores']); // Navegamos al éxito
      },
      error: (err) => {
        console.log('error al actualizar administrador'+err);
        alert('Error al actualizar: ' + err.message);
      },
    });
  }
}