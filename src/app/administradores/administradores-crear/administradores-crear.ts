import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Administradores } from '../../interfaces/administradores';
import { AdministradoresService } from '../../services/administradores-service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- Añadido

@Component({
  selector: 'app-administradores-crear',
  imports: [FormsModule, RouterLink, CommonModule], // <-- Añadido
  standalone: true, // <-- Añadido
  templateUrl: './administradores-crear.html',
  styleUrl: './administradores-crear.css'
})
export class AdministradoresCrear {

  administradores: Administradores  = {
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
    rol:'' // <-- Inicializado como vacío para el 'select'
  };

  // 1. Variable para guardar el archivo seleccionado
  archivoImagen: File | null = null;

  constructor(private administradoresServicio: AdministradoresService,
                private route: Router
                ){}
  
  // 2. Método para capturar el archivo del input
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.archivoImagen = event.target.files[0];
    }
  }

  // 3. Método 'crearAdministradores' RE-ESCRITO
  crearAdministradores(){
    console.log('crear administrador');

    // Validamos que se haya seleccionado una imagen
    if (!this.archivoImagen) {
      alert('Por favor, selecciona una imagen.');
      return;
    }
    // Validamos que se haya seleccionado un rol
    if (!this.administradores.rol) {
      alert('Por favor, selecciona un rol.');
      return;
    }

    // 1. Crear el FormData
    const formData = new FormData();

    // 2. Adjuntar todos los campos de 'this.administradores'
    formData.append('nombres', this.administradores.nombres);
    formData.append('apellidos', this.administradores.apellidos);
    formData.append('telefono', this.administradores.telefono);
    formData.append('rfc', this.administradores.rfc);
    formData.append('nss', this.administradores.nss);
    formData.append('email', this.administradores.email);
    formData.append('username', this.administradores.username);
    formData.append('password', this.administradores.password);
    formData.append('rol', this.administradores.rol);
    
    // 3. Adjuntar la imagen (asegurándonos de que no es nula)
    formData.append('imagen', this.archivoImagen, this.archivoImagen.name);

    // 4. Enviar el FormData al servicio
    this.administradoresServicio.guardarAdministradores(formData).subscribe({
        next: (value) => {
          console.log('guardar administrador'+value);
          // 5. Navegar SOLO si hay éxito
          this.route.navigate(['/administradores']);
        },
        error: (err) => {
          console.log('error al guardar administrador'+err);
          alert('Error al guardar: ' + (err.error?.message || err.message));
        },
      });
    }
}