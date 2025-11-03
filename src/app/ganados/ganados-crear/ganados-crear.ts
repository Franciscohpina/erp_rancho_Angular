import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ganados } from '../../interfaces/ganados';
import { GanadosService } from '../../services/ganados-service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-ganados-crear',
  imports: [FormsModule, RouterLink, CommonModule], // Añade CommonModule
  standalone: true, // Asegúrate de que sea standalone
  templateUrl: './ganados-crear.html',
  styleUrl: './ganados-crear.css'
})
export class GanadosCrear {
  
  ganados: Ganados ={
    id:0,
    edad:0,
    sexo:'Hembra', // Valor por defecto
    precio:0,
    peso:0,
    origen:'',
    altura:0,
    imagen:'',
    estado:'activo', // Valor por defecto
    raza_id:0,
    categoria_id:0,
    corral_id: 0, // Usar 'null' para corrales opcionales
    proveedor_id:0
  }

  // 1. Variable para guardar el archivo seleccionado
  archivoImagen: File | null = null;

  constructor(private ganadosServicio: GanadosService,
                private route: Router
                ){}
  
  // 2. Método para capturar el archivo del input
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.archivoImagen = event.target.files[0];
    }
  }

  // 3. Método 'crearGanados' RE-ESCRITO
  crearGanados(){
    console.log('crear ganado'); // (corregí el log de "cliente")

    // Validamos que los IDs requeridos no sean 0
    if (this.ganados.raza_id === 0 || this.ganados.categoria_id === 0 || this.ganados.proveedor_id === 0) {
      alert('Por favor, completa los campos de ID (Raza, Categoría, Proveedor).');
      return;
    }
    // Validamos que se haya seleccionado una imagen
    if (!this.archivoImagen) {
      alert('Por favor, selecciona una imagen.');
      return;
    }

    // 1. Crear el FormData
    const formData = new FormData();

    // 2. Adjuntar todos los campos de 'this.ganados'
    formData.append('edad', this.ganados.edad.toString());
    formData.append('sexo', this.ganados.sexo);
    formData.append('peso', this.ganados.peso.toString());
    formData.append('precio', this.ganados.precio.toString());
    formData.append('origen', this.ganados.origen);
    formData.append('altura', this.ganados.altura.toString());
    formData.append('estado', this.ganados.estado);
    formData.append('raza_id', this.ganados.raza_id.toString());
    formData.append('categoria_id', this.ganados.categoria_id.toString());
    formData.append('proveedor_id', this.ganados.proveedor_id.toString());
    
    // Adjuntar 'corral_id' solo si tiene un valor
    if (this.ganados.corral_id) {
      formData.append('corral_id', this.ganados.corral_id.toString());
    }

    // 3. Adjuntar la imagen
    formData.append('imagen', this.archivoImagen, this.archivoImagen.name);

    // 4. Enviar el FormData al servicio
    this.ganadosServicio.guardarGanados(formData).subscribe({
        next: (value) => {
          console.log('guardar ganados'+value);
          // 5. Navegar SOLO si hay éxito
          this.route.navigate(['/ganados']);
        },
        error: (err) => {
          console.log('error al guardar ganados'+err);
          // Aquí podrías mostrar un alert al usuario con el error
          alert('Error al guardar: ' + err.message);
        },
      });
    }
  }